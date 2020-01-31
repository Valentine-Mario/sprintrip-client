import { Injectable } from '@angular/core';
import {AppEndpoint} from '../endpoint'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DummyCarsHotelsVenuesFlightService {

  constructor(private http:HttpClient) { }
  getCars(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/car/get?page=${page}&limit=${limit}`)
  }
  getCarDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/car/get/'+id)
  }
  searchCar(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/car/search/`+id+`?page=${page}&limit=${limit}`)
  }
  getFlights(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/flight/get?page=${page}&limit=${limit}`)
  }
  getFlightDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/flight/get/'+id)
  }
  searchFlight(id, id2, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/flight/search/`+id+`/`+id2+`?page=${page}&limit=${limit}`)
  }
  getHotels(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/hotel/get?page=${page}&limit=${limit}`)
  }
  getHotelDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/hotel/get/'+id)
  }
  getRoomDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/room/get/'+id)
  }
  searchHotel(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/hotel/search/`+id+`?page=${page}&limit=${limit}`)
  }
  getVenues(page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/venue/get?page=${page}&limit=${limit}`)
  }
  getVenueDetails(id){
    return this.http.get(AppEndpoint.API_ENDPOINT+'/venue/get/'+id)
  }
  searchVenue(id, page, limit){
    return this.http.get(AppEndpoint.API_ENDPOINT+`/venue/search/`+id+`?page=${page}&limit=${limit}`)
  }
}
