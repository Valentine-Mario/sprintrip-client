import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {HelpersService} from '../services/helpers.service'
import {BookingService} from '../services/booking.service';

@Injectable()
export class GetPastTrips implements Resolve<any> {
  constructor(private data:BookingService, private helpers:HelpersService) {}
    
  resolve(){
      return this.data.getPastTrips(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
}
}

@Injectable()
export class GetCurrentTrips implements Resolve<any> {
  constructor(private data:BookingService, private helpers:HelpersService) {}
    
  resolve(){
      return this.data.getCurrentTrips(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
}
}

@Injectable()
export class GetUpcomingTrips implements Resolve<any> {
  constructor(private data:BookingService, private helpers:HelpersService) {}
    
  resolve(){
      return this.data.getUpComingTrips(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
}
}

@Injectable()
export class GetPendingTrips implements Resolve<any> {
  constructor(private data:BookingService, private helpers:HelpersService) {}
    
  resolve(){
      return this.data.getPendingTrips(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.helpers.errorToast('Error', 'check internet connection'));
          return empty();
      }))
}
}

