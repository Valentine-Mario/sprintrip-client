import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {UserService} from '../services/user.service'
import {HelpersService} from '../services/helpers.service'

@Injectable()
export class GetUser implements Resolve<any> {
  constructor(private data:UserService, private helpers:HelpersService) {}
    
  resolve(){
    if(localStorage.getItem('user-token')==undefined){
      return true
    }else{
      return this.data.getProfile().pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
    }
  }
}
