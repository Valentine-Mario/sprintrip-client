import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  addCarRating(id, data){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+'/carreview/add/'+id, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
  }
  carReview(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/carreview/get/`+id+`?page=${page}&limit=${limit}`)
  }
  addHotelRating(id, data){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+'/hotelreview/add/'+id, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
  }
  hotelReview(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/hotelreview/get/`+id+`?page=${page}&limit=${limit}`)
  }
  addVenueRating(id, data){
    let authToken= localStorage.getItem('user-token')
     return this.http.post(AppEndpoint.API_ENDPOINT+'/venuereview/add/'+id, data, {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'authorization': "bearer "+authToken}),
    })
  }
  venueReview(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/venuereview/get/`+id+`?page=${page}&limit=${limit}`)
  }
}
