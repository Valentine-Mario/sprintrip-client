import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private Helpers:HelpersService) { }
  user:any
  invitedUser:any
  showInviteUser:Boolean=false
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    if(localStorage.getItem('invite-token')){
      this.invitedUser=this.ActiveRoute.snapshot.data['invite']
      this.showInviteUser=true;
      console.log(this.invitedUser)
    }
    console.log(this.user)
  }

}
