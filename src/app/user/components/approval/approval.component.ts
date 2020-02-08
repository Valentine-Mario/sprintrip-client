import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HelpersService} from '../../services/helpers.service'
import {BookingService} from '../../services/booking.service'
import {InviteService} from '../../services/invite.service'
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private location:Location, private invite:InviteService,
    private Helpers:HelpersService, private bookingService:BookingService) { }
user:any
invitedUser:any
Trips:any;
showPending:Boolean=true;
showApproved:Boolean=false;
showDeclined:Boolean=false;
spin:Boolean=false
p:number
inviteShow:Boolean
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(localStorage.getItem('invite-token')){
      this.invitedUser=this.ActiveRoute.snapshot.data['invite']
      if(this.invitedUser.status==205){
        this.Helpers.logoutAndRedirect()
        this.Helpers.infoToast('Token expired', '')
      }
      this.inviteShow=true;
    }
    this.Trips=this.ActiveRoute.snapshot.data['pending_trips']
    if(this.user.body.message.account_type !== 'Business'){
      this.location.back();
      this.Helpers.infoToast('', 'This account type is authorized to view this page')
    }
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
  }
  showPendingTrips(){
     setTimeout(() => {
      this.showPending=true; this.showApproved=false; this.showDeclined=false; 
    }, 500);
    this.spin=true;
    this.bookingService.getPendingTrips(1, 15).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Trips=response
      }else{
        this.Helpers.errorToast('', 'error getting pending list')
      }
    })
   
  }
  showApprovedTrips(){
    setTimeout(() => {
      this.showPending=false; this.showApproved=true; this.showDeclined=false;
    }, 500);
    this.spin=true;
    this.bookingService.getApprovedTrips(1, 15).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Trips=response
      }else{
        this.Helpers.errorToast('', 'error getting pending list')
      }
    })
  }
  showDeclinedTrips(){
    setTimeout(() => {
      this.showPending=false; this.showApproved=false; this.showDeclined=true; 
    }, 500);
    this.spin=true;
    this.bookingService.getDeclinedTrips(1, 15).subscribe(response=>{
      this.spin=false;
      if(response.status==200){
        this.Trips=response
      }else{
        this.Helpers.errorToast('', 'error getting pending list')
      }
    })
  }
  paginate(a){
    this.spin=true
    if(this.showPending){
      this.bookingService.getPendingTrips(a, 15).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Trips.body.message.docs=response.body['message']['docs']
        }else{
          this.Helpers.errorToast('', 'error getting pending list')
        }
      })
    }else if(this.showApproved){
      this.bookingService.getApprovedTrips(a, 15).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Trips.body.message.docs=response.body['message']['docs']
        }else{
          this.Helpers.errorToast('', 'error getting pending list')
        }
      })
    }else if(this.showDeclined){
      this.bookingService.getDeclinedTrips(a, 15).subscribe(response=>{
        this.spin=false;
        if(response.status==200){
          this.Trips.body.message.docs=response.body['message']['docs']
        }else{
          this.Helpers.errorToast('', 'error getting pending list')
        }
      })
    }else{
      //do nothing
    }
  }

  ChangeTripStatus(value, obj){
    var data={
      declined:value
    }
    this.spin=true;
    this.invite.ApproveOrDeclineBooking(data, obj._id).subscribe(response=>{
      this.spin=false
      if(response.status==200){
        this.Trips.body.message.docs.splice(this.Trips.body.message.docs.findIndex(i => i._id === obj._id), 1)
        if(value==true){
          this.Helpers.infoToast('Approved', 'trip declined successfully')
        }else{
          this.Helpers.successToast('Declined', 'trip approved successfully')
        }
      }
      else{
        this.Helpers.errorToast('', response.body['message'])
      }
    })
  }

}
