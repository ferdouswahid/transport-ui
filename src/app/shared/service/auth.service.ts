import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class AuthService {
  headers = null;
  userInfo: any;
  localStorageData: any = {};

  constructor(public http: HttpClient) { }

  logIn(username: string, password: string) {
    // console.log(username, password);
    return this.http.post<any>(environment.apiUrl + '/authenticate', {  username, password })
      .pipe(map(res => {
        if (res.status) {
          const jwtToken = res.jwtToken;
          localStorage.setItem('accessToken', jwtToken);
          return res;
        } else {
          return res;
        }
      }));
  }

  registration(name: string,userName: string, password: string) {
    return this.http.post<any>(environment.apiUrl + '/userProfile/registration', { name, userName, password });
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('roles');
    localStorage.removeItem('user');
    localStorage.removeItem('authority');
  }

  getToken(): any {
    if (localStorage.getItem('accessToken')) {
      return localStorage.getItem('accessToken');
    } else {
      return '';
    }
  }

  getUserDetails() {
    const token = localStorage.getItem('accessToken');
    const toArray =  token.split('.');
    const decodedString = atob(toArray[1]);
    // console.log('decodedString', decodedString);
    return decodedString;
  }

  getUserInfo() {
    console.log('calling getUserInfo');
    return this.http.get<any[]>(environment.apiUrl + '/account/userInfo').pipe(
      map(res => {
        console.log('UserInfo: ' + res['data']);
      })
    );
  }

  getHeadersWithAccessToken(): HttpHeaders {
    this.headers = new HttpHeaders()
      .append('Authorization', 'Bearer ' + this.getToken());
    return this.headers;
  }

  decodeJWT(jwtToken){
    const toArray =  jwtToken.split('.');
    const decodedString = atob(toArray[1]);
    console.log('decodedJWT', decodedString);
    for (const val of toArray) {
      console.log(val);
      console.log(atob(val));
    }
  }

}
