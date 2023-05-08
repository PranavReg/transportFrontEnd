import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http:HttpClient) { }

  scheduleRide(booking){
    console.log(booking)
    const params = new HttpParams()
      .set('id', booking.studentId).set('time',booking.timing);
    return this._http.post<any>("http://localhost:8080/scheduleRide",booking);
  }

  getBookingDetails(id){
    const params = new HttpParams()
      .set('studentId', id)
  return this._http.get<any>("http://localhost:8080/mybookings",{params});
  }
}
