import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LoginAndregService} from '../services/login-andreg.service';
import { Route, Router } from '@angular/router';
import { Login } from '../interfaces/login';
import { AuthService } from '../services/auth.service' 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
msg="";
loginForm : FormGroup;
loginNew= new Login();
submitted = false;

constructor(private _service:LoginAndregService, private _route:Router, private fb:FormBuilder,private authService: AuthService) {
 }
 ngOnInit() {
  this.loginForm = this.fb.group({
    id: ['', Validators.required],
    password: ['', Validators.required] 
  });
  this.authService.logout();

}

  


get s() {return this.loginForm.controls; }

userLogin(){
  this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    this.loginNew.id=Number(this.Id.value);
    this.loginNew.password=this.Password.value;

  this._service.loginUserFromClient(this.loginNew).subscribe(
    data => {
      if(data==null){this.msg="Student ID is not Registered. Please Register"
    }
    else{
      localStorage.setItem('isLoggedIn', "true");  
      localStorage.setItem('token', this.s.id.value);
      this.authService.login();
      this._route.navigate(['/shuttleRoutes'],{state:{data:this.loginNew.id}})}
  }
    ,
    error => {this.msg="Invalid credentials"
});
}

get Id(){  
  return this.loginForm.get('id');  
}  

get Password(){  
  return this.loginForm.get('password');  
}  


}


