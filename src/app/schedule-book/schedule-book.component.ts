import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginAndregService } from '../services/login-andreg.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Booking } from '../interfaces/booking';
import { Student } from '../interfaces/student';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-schedule-book',
  templateUrl: './schedule-book.component.html',
  styleUrls: ['./schedule-book.component.css']
})
export class ScheduleBookComponent {
  constructor(private router:Router,private fb:FormBuilder,private service:LoginAndregService,private _route: ActivatedRoute,private bookingService:BookingService){}
  sid:any
  timing:any;
  studentDetails=new Student();
  bookingDetails=new Booking();
  bookingForm : FormGroup;
  ngOnInit() {
    this.bookingForm = this.fb.group({
      id: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      emailId: new FormControl,
      timing: new FormControl,
      stopName:new FormControl
    });
    this.sid=history.state.data[0]
    this.timing=history.state.data[1];
    this.service.getStudentDetails(this.sid).subscribe(
      data=>{
        
        this.studentDetails=data;
        this.bookingDetails.timeSlot=history.state.data[1];
        this.bookingDetails.studentId=history.state.data[0];
        this.bookingDetails.stopName=history.state.data[2];
      }
    )
    
}

bookSchedule(){
  console.log(this.bookingDetails)
this.bookingService.scheduleRide(this.bookingDetails).subscribe(
  data=>{
    alert("Booking Successful");
      this.router.navigate(['/mybookings'],{state:{data:this.bookingDetails.studentId}})
  }
)
}
}
