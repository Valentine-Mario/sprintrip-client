import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  addCard(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+`/card/add`, data, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  getCards(){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/card/get`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }

  deleteCards(id){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/card/delete/${id}`, {  
      observe: 'response',
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
  }
}
