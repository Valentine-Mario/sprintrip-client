import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DummyCarsHotelsVenuesFlightService {

  constructor(private http:HttpClient) { }
  getCars(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/car/get?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getCarDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/car/get/'+id,  {
      observe: 'response',
    })
  }
  searchCar(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/car/search/`+id+`?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getFlights(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/flight/get?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getFlightDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/flight/get/'+id, {
      observe: 'response',
    })
  }
  searchFlight(id, id2, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/flight/search/`+id+`/`+id2+`?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getHotels(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/hotel/get?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getHotelDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/hotel/get/'+id, {
      observe: 'response',
    })
  }
  getRoomDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/room/get/'+id, {
      observe: 'response',
    })
  }
  searchHotel(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/hotel/search/`+id+`?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getVenues(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/venue/get?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
  getVenueDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/venue/get/'+id, {
      observe: 'response',
    })
  }
  searchVenue(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/venue/search/`+id+`?page=${page}&limit=${limit}`, {
      observe: 'response',
    })
  }
}
