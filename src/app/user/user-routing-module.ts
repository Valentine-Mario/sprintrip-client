import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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


export const UserRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
        
    },
    {
        path:'user',
        children:[
            {
                path:'booking',
                children:[
                    {
                        path:'flight',
                        component:FlightsComponent
                    },
                    {
                        path:'hotel',
                        component:HotelsComponent
                    },
                    {
                        path:'venue',
                        component:VenuesComponent
                    },
                    {
                        path:'train',
                        component:TrainsComponent
                    },
                    {
                        path:'car',
                        component:CarsComponent
                    },
                    {
                        path:'cruise',
                        component:CruiseComponent
                    },
                    {
                        path:'airbnb',
                        component:AirbnbComponent
                    },
                    {
                        path:'others',
                        component:OthersComponent
                    }
                ]
            },
            {
                path:'trips',
                component:TripsComponent,
                children:[
                    {
                        path:'travellingnow',
                        component:TravellingNowComponent
                    },
                    {
                        path:'pasttrips',
                        component:PastTripsComponent
                    },
                    {
                        path:'upcomingtrips',
                        component:UpcomingTripsComponent
                    }
                ]
            },
            {
                path:'invoice',
                component:InvoiceComponent
            },
            {
                path:'reporting',
                component:ReportingComponent
            },
            {
                path:'payment',
                component:PaymentComponent
            },
            {
                path:'help',
                component:HelpComponent
            },
            {
                path:'setting',
                component:CompanySettingComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            }
        ]
    }
]