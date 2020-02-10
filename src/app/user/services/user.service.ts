import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { HelpersService } from './helpers.service'
import { Location } from '@angular/common';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private helper:HelpersService, private location:Location,
    private router:Router) { }

  google_register(){
    window.open(AppEndpoint.API_ENDPOINT+'/user/googleadd',"mywindow","location=1,status=1,scrollbars=1, width=800,height=800")
    let listener = window.addEventListener('message', (message) => {
      if(message.data['code']=="00"){
        localStorage.setItem("user-token", message.data['user'])
       // this.location.back()
       this.router.navigate(['/user/booking/flight'])
        this.helper.successToast('Login successful', '')
      }
    });
   }

   create_user(data){
     return this.http.post(AppEndpoint.API_ENDPOINT+'/user/add', data, {
      observe: 'response',
     })
   }
   login_user(data){
     return this.http.post(AppEndpoint.API_ENDPOINT+'/user/login', data, {
      observe: 'response',
     })
   }
   getProfile(){
    let authToken= localStorage.getItem('user-token')
     return this.http.get(AppEndpoint.API_ENDPOINT+'/user/getprofile', {
      observe: 'response',
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   editUser(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/edit', data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }

   changePassword(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/changepassword', data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }

   deleteAccount(){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/delete', {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }

   requestBooking(){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/request', {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }

   requestBookingByInvitedUser(){
    let authToken= localStorage.getItem('invite-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/user/requestinviteduser', {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }


   changeAccountType(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/changeacctype', data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }

   updatePics(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/user/updatepics', data, {
      observe:'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
   }

}
