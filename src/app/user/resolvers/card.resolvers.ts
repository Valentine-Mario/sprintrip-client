import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {HelpersService} from '../services/helpers.service'
import {PaymentService} from '../services/payment.service'

@Injectable()
export class GetCards implements Resolve<any> {
  constructor(private data:PaymentService, private helpers:HelpersService) {}
    
  resolve(){
    
      return this.data.getCards().pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
    
}
}