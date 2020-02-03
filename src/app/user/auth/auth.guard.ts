import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';
import {HelpersService} from '../services/helpers.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data:HelpersService, private router:Router){}
  canActivate():boolean{
    if(this.data.loggedIn()){
      return true
    }else{
      this.data.infoToast('', 'Login before you perform action')
      this.router.navigate(['/'])
      return false
    }
  }
}