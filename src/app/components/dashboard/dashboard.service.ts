import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpParams, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class DashboardService {

  constructor(public http: HttpClient) { }

  getStopList(stopId) {
    const params = new HttpParams().set('stop', stopId);
    return this.http.get(`${environment.apiUrl}/product/getAll`,{ params});
  }

  getAllStop() {
    return this.http.get(`${environment.apiUrl}/product/getAll`,{ });

  }

}
