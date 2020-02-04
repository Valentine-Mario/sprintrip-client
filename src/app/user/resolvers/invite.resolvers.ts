import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {HelpersService} from '../services/helpers.service'
import {InviteService} from '../services/invite.service'

@Injectable()
export class GetInviteUser implements Resolve<any> {
  constructor(private data:InviteService, private helpers:HelpersService) {}
    
  resolve(){
    if(localStorage.getItem('invite-token')==undefined){
        return true
      }else{
      return this.data.getInvitedUsers().pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
    }
}
}