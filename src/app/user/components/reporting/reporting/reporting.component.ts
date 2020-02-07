import { Component, OnInit } from '@angular/core';
import {HelpersService} from '../../../services/helpers.service'
import {BookingService} from '../../../services/booking.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  constructor(private Helpers:HelpersService, private ActiveRoute:ActivatedRoute,
    private bookingService:BookingService) { }
user:any;
summary:any;
summaryObject:object
spin:Boolean=false
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
  }

  getSummary(a){
    this.spin=true
    this.bookingService.getBookingType(a, 1, 15).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.summaryObject=response.body;
      }else{
        this.Helpers.errorToast('', 'error retriving data')
      }
    })
  }

  paginateSummary(a){
    this.spin=true;
    this.bookingService.getBookingType(this.summaryObject['message']['docs'][0]['type'], a, 15).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.summaryObject=response.body;
      }else{
        this.Helpers.errorToast('', 'error retriving data')
      }
    })
  }

}
