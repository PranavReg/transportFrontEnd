import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../interfaces/route';
import { Schedule } from '../interfaces/schedule';
import { HttpBaseUrl } from './HttpBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class ShuttleScheduleService {
  geocoder = new google.maps.Geocoder();
  constructor(private _http:HttpClient) { }

  getScheduleDetails() {
    return this._http.get<Schedule[]>(`${HttpBaseUrl.baseURL}/shuttleRoutes`);
  }

  datadetails(){
    //return fetch("http://localhost:8080/shuttleRoutes");
    var details= $.ajax({
      type: 'GET',
      url: `${HttpBaseUrl.baseURL}/shuttleRoutes`,
      async: false,
      }
  )
  return details;
  }

  getRouteDetails() {
    var routeDetails
    this.datadetails().done(function(msg) {
      routeDetails=msg;
    });
    return routeDetails;
}

getTiminggsForStop(values){
  const params = new HttpParams()
      .set('routeName', values)
  return this._http.get<any>(`${HttpBaseUrl.baseURL}/timings`,{params});
}

}
