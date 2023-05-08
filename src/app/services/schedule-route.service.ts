import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '../interfaces/route';
import { Schedule } from '../interfaces/schedule';

@Injectable({
  providedIn: 'root'
})
export class ShuttleScheduleService {
  
  geocoder = new google.maps.Geocoder();
  constructor(private _http:HttpClient) { }

  getScheduleDetails() {
    return this._http.get<Schedule[]>("http://localhost:8080/shuttleRoutes");
  }

  datadetails(){
    //return fetch("http://localhost:8080/shuttleRoutes");
    var CChat= $.ajax({
      type: 'GET',
      url: "http://localhost:8080/shuttleRoutes",
      async: false,
      }
  )
  return CChat;
  }

  getRouteDetails() {
    var cChatStatus
    this.datadetails().done(function(msg) {
     cChatStatus=msg;
    });
    return cChatStatus;
}

getTiminggsForStop(values){
  const params = new HttpParams()
      .set('routeName', values)
  return this._http.get<any>("http://localhost:8080/timings",{params});
}

}
