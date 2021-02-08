import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class DashboardService {

  constructor(public http: HttpClient) { }

  getStopList(stopId) {
    const params = new HttpParams().set('id', stopId);
    return this.http.get<any>(`${environment.apiUrl}/step/getOne`,{ params});
  }

  getAllStop() {
    return this.http.get<any>(`${environment.apiUrl}/stop/getAll`,{ });

  }

}
