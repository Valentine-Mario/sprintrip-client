import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  addHotelBookingUser(id, data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addhoteluser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addHotelBookingNonUser(id, data){
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addhotelnonuser/${id}`, data, {
      observe:'response'
    })
  }

  addHotelBookingInvitedUser(id, data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addhotelinviteduser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addCarBookingUser(id, data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addcaruser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addCarBookingNonUser(id, data){
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addcarnonuser/${id}`, data, {
      observe:'response'
    })
  }

  addCarBookingInvitedUser(id, data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addcarinviteduser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addVenueBookingUser(id, data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addvenueuser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addVenueBookingNonUser(id, data){
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addvenuenonuser/${id}`, data, {
      observe:'response'
    })
  }

  addVenueBookingInvitedUser(id, data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addvenueinviteduser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addFlightBookingUser(id, data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addflightuser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  addFlightBookingNonUser(id, data){
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addflightnonuser/${id}`, data, {
      observe:'response'
    })
  }

  addFlightInvitedUser(id, data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/booking/addflightinviteduser/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getUpComingTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getupcoming?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getPastTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getpasttrips?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getCurrentTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getcurrenttrips?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getPendingTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getpendingtrips?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getDeclinedTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getdeclinedtrips?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getApprovedTrips(page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/getapprovedtrips?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getBookingType(value, page, limit){
    let authToken=localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/booking/gettriptype/${value}?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
