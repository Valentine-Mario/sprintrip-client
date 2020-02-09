import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {HelpersService} from '../services/helpers.service'
import {GroupService} from '../services/group.service'

@Injectable()
export class GetGroups implements Resolve<any> {
  constructor(private data:GroupService, private helpers:HelpersService) {}
    
  resolve(){
    
      return this.data.getGroups(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
    
}
}