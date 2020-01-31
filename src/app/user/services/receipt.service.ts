import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http:HttpClient) { }

  addReceipt(data){
    let authToken= localStorage.getItem('user-token')
    return this.http.post(AppEndpoint.API_ENDPOINT+'/receipt/add', data, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
   }

   getReceipt(page, limit){
    let authToken= localStorage.getItem('user-token')
     return this.http.get(AppEndpoint.API_ENDPOINT+`/receipt/get?page=${page}&limit=${limit}`, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   deleteReceipt(id){
    let authToken= localStorage.getItem('user-token')
     return this.http.get(AppEndpoint.API_ENDPOINT+`/receipt/delete/`+id, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   getReceiptDetails(id){
     return this.http.get(AppEndpoint.API_ENDPOINT+`/receipt/get/`+id)
   }

   deleteReceiptImage(id, data){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+`/receipt/removeimage/`+id, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   EditReceipt(id, data){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+`/receipt/edit/`+id, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   AddImages(id, images){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+`/receipt/addimages/`+id, images, {
      headers: new HttpHeaders({'authorization': "bearer "+authToken}),
    })
   }

   getReceiptByDate(date){
    let authToken= localStorage.getItem('user-token')
     return this.http.get(AppEndpoint.API_ENDPOINT+`/receipt/getbydate/${date}`, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
   }

   getReceiptByLocation(location){
    let authToken= localStorage.getItem('user-token')
    return this.http.get(AppEndpoint.API_ENDPOINT+`/receipt/getbylocation/${location}`, {
     headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
   })
   }
}
