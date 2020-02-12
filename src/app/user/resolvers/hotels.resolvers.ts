import { Injectable } from '@angular/core';
import { empty} from 'rxjs'
import { Resolve } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot } from '@angular/router';
import {HelpersService} from '../services/helpers.service'
import {DummyCarsHotelsVenuesFlightService} from '../services/dummy-cars-hotels-venues-flight.service';

@Injectable()
export class GetHotel implements Resolve<any> {
  constructor(private data:DummyCarsHotelsVenuesFlightService, private Helpers:HelpersService) {}
    
  resolve(){
    
      return this.data.getHotels(1, 15).pipe(catchError((err)=>{
        setTimeout(() => this.Helpers.errorToast('', 'Error connecting to server, check internet connection'));
          return empty();
      }))
    
  }
}

@Injectable()
export class GetHotelId implements Resolve<any> {
  constructor(private data:DummyCarsHotelsVenuesFlightService, private Helpers:HelpersService) {}
    
  resolve(route: ActivatedRouteSnapshot){
    
   return this.data.getHotelDetails(route.paramMap.get('id')).pipe(catchError((err)=>{
    setTimeout(() => this.Helpers.errorToast('', 'Error connecting to server, check internet connection'));
    return empty();
  }))
  }
}

