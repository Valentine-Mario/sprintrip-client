import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InviteService {

  constructor(private http:HttpClient) { }

  deleteInvitedUser(id){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/invite/delete/'+id, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }

  getAllInvitedUsers(){
    let authToken= localStorage.getItem('invite-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+'/invite/get', {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }

  InvitedUserEdit(data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/invite/edit', data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }

  InvitedUserEditPassword(data){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/invite/changepassword', data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }

  editInvitedUserccess(data, id){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/invite/editsetting/'+id, data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }

  getInvitedUserById(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/invite/getone/'+id, {
      observe:'response'
    })
  }

  ApproveOrDeclineBooking(data, id){
    let authToken= localStorage.getItem('invite-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/approval/approvedisapprove/'+id, data, {
     observe: 'response',
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
  }
}
