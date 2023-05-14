import { Component } from '@angular/core';
import { Route } from '../interfaces/route';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent {

  constructor(private service:RouteService, private _route: ActivatedRoute){}
  
  sub: any;
  idParam: string = "";
  routeDetails : Route;
  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.idParam = params['id'];
    })
    this.service.getRouteDetails(this.idParam).subscribe(
      data=>{
        this.routeDetails=data;
      }
    )
    
  }

}
