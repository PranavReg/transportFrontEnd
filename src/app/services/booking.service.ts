import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseUrl } from './HttpBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http:HttpClient) { }

  scheduleRide(booking){
    const params = new HttpParams()
      .set('id', booking.studentId).set('time',booking.timing);
    //return this._http.post<any>("http://ec2-54-172-3-73.compute-1.amazonaws.com:8080/scheduleRide",booking);
    return this._http.post<any>(`${HttpBaseUrl.baseURL}/scheduleRide`,booking);
  }

  getBookingDetails(id){
    const params = new HttpParams()
      .set('studentId', id)
  return this._http.get<any>(`${HttpBaseUrl.baseURL}/mybookings`,{params});
  }
}
