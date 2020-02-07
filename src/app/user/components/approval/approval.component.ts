import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HelpersService} from '../../services/helpers.service'

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private location:Location, private Helpers:HelpersService) { }
user:any
invitedUser:any
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    this.invitedUser=this.ActiveRoute.snapshot.data['invite']
    if(this.user.body.message.account_type !== 'Business'){
      this.location.back();
    }
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
  }

}
