import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Login } from '../interfaces/login';
import { HttpBaseUrl } from './HttpBaseUrl';


@Injectable({
  providedIn: 'root'
})
export class LoginAndregService {

constructor(private _http:HttpClient){}

public loginUserFromClient(login){
  return this._http.post<any>(`${HttpBaseUrl.baseURL}/login`,login)
}

public registerUserFromClient(login:Login) {
  return this._http.post<any>(`${HttpBaseUrl.baseURL}/register`,login)
}

public getStudentDetails(id){
  const params = new HttpParams()
      .set('id', id)
  return this._http.get<any>(`${HttpBaseUrl.baseURL}/studentDetails`,{params});
}
}

