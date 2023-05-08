import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private _http:HttpClient) { }

  getRouteDetails(idParam) {
    return this._http.get<any>("http://localhost:8080/shuttelRoutes/"+idParam);
  }
}
