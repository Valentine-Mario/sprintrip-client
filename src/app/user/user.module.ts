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


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, FlightsComponent,
     HotelsComponent, VenuesComponent, TrainsComponent, CarsComponent, CruiseComponent,
      AirbnbComponent, OthersComponent, CompanySettingComponent, HelpComponent, InvoiceComponent,
      PaymentComponent, ProfileComponent, ReportingComponent, PastTripsComponent, TravellingNowComponent,
      TripsComponent, UpcomingTripsComponent, NavigationComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    NgbModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
