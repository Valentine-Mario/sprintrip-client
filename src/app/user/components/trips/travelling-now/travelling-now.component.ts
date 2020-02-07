import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import {BookingService} from '../../../services/booking.service'
@Component({
  selector: 'app-travelling-now',
  templateUrl: './travelling-now.component.html',
  styleUrls: ['./travelling-now.component.css']
})
export class TravellingNowComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute,  private Helpers:HelpersService,
    private bookingService:BookingService) { }
user:any;
trips:any;
p:number;
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    this.trips=this.ActiveRoute.snapshot.data['trip']
  }

  paginate(a){
    
  }

}
