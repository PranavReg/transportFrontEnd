import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseUrl } from './HttpBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _http:HttpClient) { }

  getRouteDetails(idParam) {
    return this._http.get<any>(`${HttpBaseUrl.baseURL}/shuttelRoutes/`+idParam);
  }
}
