import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http:HttpClient) { }

  addGroup(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/employee/add`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  editGroup(data, id){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/employee/edit/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  deleteGroup(id){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/employee/delete/${id}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getGroups(page, limit){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/employee/get?page=${page}&limit=${limit}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getOneGroup(id){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/employee/getone/${id}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  deleteNameFromGroup(id, data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/employee/deletename/${id}`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
