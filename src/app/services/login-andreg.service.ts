import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Login } from '../interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class LoginAndregService {

constructor(private _http:HttpClient){}

public loginUserFromClient(login){
  return this._http.post<any>("http://localhost:8080/login",login)
}

public registerUserFromClient(login:Login) {
  return this._http.post<any>("http://localhost:8080/register",login)
}

public getStudentDetails(id){
  const params = new HttpParams()
      .set('id', id)
  return this._http.get<any>("http://localhost:8080/studentDetails",{params});
}
}

