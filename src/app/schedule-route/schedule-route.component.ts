import { Component, OnInit } from '@angular/core';
import { ShuttleScheduleService } from '../services/schedule-route.service';
import { GoogleMapsModule, MapDirectionsService } from '@angular/google-maps'
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-shuttle-routes',
  templateUrl: './schedule-route.component.html',
  styleUrls: ['./schedule-route.component.css']
})

export class ScheduleRouteComponent implements OnInit{

constructor(private authService: AuthService,private _service:ShuttleScheduleService,private mapDirectionsService: MapDirectionsService, private router:Router) {}
    
ngOnInit(): void {}
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 42.322140,
      lng: -83.175941
  };
  zoom = 10;

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
};
markerPositions: google.maps.LatLngLiteral[] = [];
addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
}

geocoder = new google.maps.Geocoder();
destinationAddress="University of Michigan, Dearborn";
middleStops: google.maps.DirectionsWaypoint[] = [];;
addresses=[]
addressText=[]
result:any;
isFinished = false;
//routePositions: google.maps.LatLngLiteral[] = [];
markAddress()
async markAddress(){
    this.addresses=this._service.getRouteDetails();
    this.addressText=[this.addresses[0]["stopName1"],this.addresses[0]["stopName2"],this.addresses[0]["stopName3"]];

    for(let i=0;i<this.addressText.length;i++){
        await new Promise<void>(resolve => {
            setTimeout(()=> {this.geoCoderFunction(this.addressText[i]);
                resolve();
            }, 200);
        });
    }
    await new Promise<void>(resolve => {
        setTimeout(()=> {this.geoCoderFunction(this.destinationAddress);
            resolve();
        }, 200);
    });
    await new Promise<void>(resolve=>{
        setTimeout(()=> {this.checkLength();
            resolve();
        }, 200);
    });

    this.routDesign();
    this.options=[this.addresses[0]["stopName1"],this.addresses[0]["stopName2"],this.addresses[0]["stopName3"]]
    this.selectedValue=this.options[0];

}
checkLength(){
    if (this.markerPositions.length==4)return true
    else return false
}

geoCoderFunction(address): any{
    this.geocoder.geocode({ 'address': address }, (results, status) => {
        var latLng = {lat: results[0].geometry.location.lat (), lng: results[0].geometry.location.lng ()};
        this.markerPositions.push(latLng);
      })
}



directionsResults: Observable<google.maps.DirectionsResult>;

async routDesign(){
    //this.directionsService = new google.maps.DirectionsService();
  //this.directionsRenderer = new google.maps.DirectionsRenderer();

    this.middleStops=[{location:this.markerPositions[1],stopover:true},{location:this.markerPositions[2],stopover:true}]
    
    const request: google.maps.DirectionsRequest = {
        origin: this.markerPositions[0],
        destination: this.markerPositions[3],
        waypoints: this.middleStops,
        travelMode: google.maps.TravelMode.DRIVING
    }

    this.directionsResults=this.mapDirectionsService.route(request).pipe(map(response => response.result));
        
}
options:any
selectedValue:any;
timeSlots:any
id:any
fetchTimings(selectedValue){
    this._service.getTiminggsForStop(selectedValue).subscribe(data=>{this.timeSlots=data})
}

gotoBooking(slot){
    var childparameters=[history.state.data,slot,this.selectedValue];
    this.router.navigate(['/scheduleService'],{state:{data:childparameters}})


}

logout() {
    this.authService.logout();  
    this.router.navigate(['']);  
  }

  getBookings(){
    this.router.navigate(['/mybookings'],{state:{data:history.state.data}})


}
}


