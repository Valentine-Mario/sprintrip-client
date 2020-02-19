import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutes} from './user-routing-module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FlightsComponent } from './components/bookings/flights/flights.component';
import { HotelsComponent } from './components/bookings/hotels/hotels.component';
import { VenuesComponent } from './components/bookings/venues/venues.component';
import { TrainsComponent } from './components/bookings/trains/trains.component';
import { CarsComponent } from './components/bookings/cars/cars.component';
import { CruiseComponent } from './components/bookings/cruise/cruise.component';
import { AirbnbComponent } from './components/bookings/airbnb/airbnb.component';
import { OthersComponent } from './components/bookings/others/others.component';
import {CompanySettingComponent} from './components/company-setting/company-setting/company-setting.component'
import {HelpComponent} from './components/help/help/help.component'
import {InvoiceComponent} from './components/invoices/invoice/invoice.component'
import {PaymentComponent} from './components/payment/payment/payment.component'
import {ProfileComponent} from './components/profile/profile/profile.component'
import {ReportingComponent} from './components/reporting/reporting/reporting.component'
import {PastTripsComponent} from './components/trips/past-trips/past-trips.component'
import {TravellingNowComponent} from './components/trips/travelling-now/travelling-now.component'
import {TripsComponent} from './components/trips/trips/trips.component'
import {UpcomingTripsComponent} from './components/trips/upcoming-trips/upcoming-trips.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavigationComponent } from './components/bookings/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GetUser} from './resolvers/user.resolvers';
import { AboutComponent } from './components/about/about.component';
import {AuthGuard} from './auth/auth.guard'
import {GetInviteUser, GetAllInviteUser} from './resolvers/invite.resolvers'
import {GetReceipt} from './resolvers/receipt.resolvers'
import {GetUpcomingTrips, GetCurrentTrips, GetPastTrips, GetPendingTrips} from './resolvers/trips.resolvers';
import { ApprovalComponent } from './components/approval/approval.component';
import {GetCards} from './resolvers/card.resolvers';
import { SupervisorComponent } from './components/company-setting/supervisor/supervisor.component';
import { GroupsComponent } from './components/company-setting/groups/groups.component'
import {GetGroups} from './resolvers/groups.resolvers';
import { AirbnbListComponent } from './components/bookings/airbnb-list/airbnb-list.component';
import { CarsListComponent } from './components/bookings/cars-list/cars-list.component';
import { CruiseListComponent } from './components/bookings/cruise-list/cruise-list.component';
import { FlightsListComponent } from './components/bookings/flights-list/flights-list.component';
import { HotelsListComponent } from './components/bookings/hotels-list/hotels-list.component';
import { VenuesListComponent } from './components/bookings/venues-list/venues-list.component';
import { TrainsListComponent } from './components/bookings/trains-list/trains-list.component';
import {GetHotel, GetHotelId} from './resolvers/hotels.resolvers';
import {GetCars, GetCarId} from './resolvers/cars.resolvers';
import {getFlights, GetFlightId} from './resolvers/flight.resolvers'
import {GetVenueId, GetVenues} from './resolvers/venue.resolvers';
import { FlightDetailComponent } from './components/bookings/flight-detail/flight-detail.component';
import { HotelDetailComponent } from './components/bookings/hotel-detail/hotel-detail.component';
import { VenueDetailComponent } from './components/bookings/venue-detail/venue-detail.component';
import { CarDetailComponent } from './components/bookings/car-detail/car-detail.component';
import { CruiseDetailComponent } from './components/bookings/cruise-detail/cruise-detail.component';
import { AirbnbDetailComponent } from './components/bookings/airbnb-detail/airbnb-detail.component';
import { TrainDetailComponent } from './components/bookings/train-detail/train-detail.component'

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, FlightsComponent,
     HotelsComponent, VenuesComponent, TrainsComponent, CarsComponent, CruiseComponent,
      AirbnbComponent, OthersComponent, CompanySettingComponent, HelpComponent, InvoiceComponent,
      PaymentComponent, ProfileComponent, ReportingComponent, PastTripsComponent, TravellingNowComponent,
      TripsComponent, UpcomingTripsComponent, NavigationComponent, AboutComponent, ApprovalComponent, SupervisorComponent, 
      GroupsComponent, AirbnbListComponent, CarsListComponent, CruiseListComponent, FlightsListComponent, HotelsListComponent, VenuesListComponent, TrainsListComponent, FlightDetailComponent, HotelDetailComponent, VenueDetailComponent, CarDetailComponent, CruiseDetailComponent, AirbnbDetailComponent, TrainDetailComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetUser, AuthGuard, GetInviteUser, GetReceipt, GetUpcomingTrips, GetAllInviteUser,
     GetCurrentTrips, GetPastTrips, GetPendingTrips, GetCards, GetGroups, GetHotel, GetHotelId,
    GetCars, GetCarId, getFlights, GetFlightId, GetVenueId, GetVenues],
})
export class UserModule { }
