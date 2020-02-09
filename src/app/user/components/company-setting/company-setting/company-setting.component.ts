import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HelpersService} from '../../../services/helpers.service'
import { Location } from '@angular/common';


@Component({
  selector: 'app-company-setting',
  templateUrl: './company-setting.component.html',
  styleUrls: ['./company-setting.component.css']
})
export class CompanySettingComponent implements OnInit {

  constructor(private ActiveRoute:ActivatedRoute, private Helpers:HelpersService, private location:Location) { }
user:any
  ngOnInit() {
    this.user= this.ActiveRoute.snapshot.data['user']
    if(this.user.status==205){
      this.Helpers.logoutAndRedirect()
      this.Helpers.infoToast('Token expired', '')
    }
    if(this.user.body.message.account_type !== 'Business'|| localStorage.getItem('invite-token')){
      this.location.back();
      this.Helpers.infoToast('', 'This account type is authorized to view this page')
    }
  }

}
