import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../interfaces/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private bookingService:BookingService){}
  id:any
  bookingDetails:any[];
  ngOnInit(){
    this.id=history.state.data
    this.bookingService.getBookingDetails(this.id).subscribe(
      data=>{this.bookingDetails=data
        
      },
      error=>{

      }
    )
  }
}
