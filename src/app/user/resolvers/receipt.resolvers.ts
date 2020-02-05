import {ReceiptService} from '../services/receipt.service'
import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {HelpersService} from '../services/helpers.service'


@Injectable()
export class GetReceipt implements Resolve<any> {
  constructor(private data:ReceiptService, private helpers:HelpersService) {}
    
  resolve(){
   
      return this.data.getReceipt(1, 10).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
    }
  
}
