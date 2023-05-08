import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'transportApp';
  isLoggedIn = false;
  constructor(private _service:AuthService){}
  ngOnInit(){}
  isLoggedInFunction(){
    this._service.logout()
  }
}
