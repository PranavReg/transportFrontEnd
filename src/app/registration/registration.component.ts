import { Component } from '@angular/core';
import { LoginAndregService } from '../services/login-andreg.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../interfaces/login';
import { StudentLogin } from '../interfaces/student-login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  msg="";
  registerForm : FormGroup;
  login= new Login();
  studentLogin=new StudentLogin();
  submitted = false;
constructor(private _service:LoginAndregService, private _route:Router, private fb:FormBuilder) { }

ngOnInit() {
  this.registerForm = this.fb.group({
    id: ['', Validators.required],
    password:['', Validators.required],
    confirmPassword: ['', Validators.required]

  },{
    validator: MustMatch('password', 'confirmPassword')
});
}
get s() {return this.registerForm.controls; }

  userRegister(){
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.login.id=Number(this.Id.value);
    this.login.password=this.Password.value;
  this._service.registerUserFromClient(this.login).subscribe(
    data => {
      this.msg="Student Registered Successfully"
    this._route.navigate(['/'])
  }
    ,
    error => {
      if(error.status==409){
        this.msg="Student already Registered"
      }
      else if(error.status==401){
        this.msg="Not a valid Student ID to register"
      }
      else{
        this.msg="Unable to register the student at this time"
      }
});

}

get Id(){  
  return this.registerForm.get('id');  
}  

get Password(){  
  return this.registerForm.get('password');  
}

get FirstName(){  
  return this.registerForm.get('firstName');  
}

get LastName(){  
  return this.registerForm.get('lastName');  
}

get EmailId(){  
  return this.registerForm.get('email');  
}

}
function MustMatch(original: string, comparable: string): any {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[original];
    const matchingControl = formGroup.controls[comparable];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
    } else {
        matchingControl.setErrors(null);
    }
}
}

