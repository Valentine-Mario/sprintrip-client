import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import {BookingService} from '../../../services/booking.service'
@Component({
  selector: 'app-past-trips',
  templateUrl: './past-trips.component.html',
  styleUrls: ['./past-trips.component.css']
})
export class PastTripsComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute,  private Helpers:HelpersService,
     private bookingService:BookingService) { }
user:any;
trips:any;
p:number;
spin:Boolean=false
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    this.trips=this.ActiveRoute.snapshot.data['trip']
  }
  paginate(a){
    this.spin=true
    this.bookingService.getCurrentTrips(a, 15).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.trips=response
      }else{
        this.Helpers.errorToast('', 'error loading data')
      }
    })
  }

}
