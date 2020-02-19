import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
import {GetUser} from './resolvers/user.resolvers'
import {HeaderComponent} from './shared/header/header.component'
import {AuthGuard} from './auth/auth.guard'
import { AboutComponent } from './components/about/about.component';
import {GetInviteUser, GetAllInviteUser} from './resolvers/invite.resolvers'
import {GetReceipt} from './resolvers/receipt.resolvers'
import {GetUpcomingTrips, GetCurrentTrips, GetPastTrips, GetPendingTrips} from './resolvers/trips.resolvers'
import { ApprovalComponent } from './components/approval/approval.component'
import {GetCards} from './resolvers/card.resolvers'
import { SupervisorComponent } from './components/company-setting/supervisor/supervisor.component';
import { GroupsComponent } from './components/company-setting/groups/groups.component'
import {GetGroups} from './resolvers/groups.resolvers'
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
import {GetVenueId, GetVenues} from './resolvers/venue.resolvers'
import { FlightDetailComponent } from './components/bookings/flight-detail/flight-detail.component';
import { HotelDetailComponent } from './components/bookings/hotel-detail/hotel-detail.component';
import { VenueDetailComponent } from './components/bookings/venue-detail/venue-detail.component';
import { CarDetailComponent } from './components/bookings/car-detail/car-detail.component';
import { CruiseDetailComponent } from './components/bookings/cruise-detail/cruise-detail.component';
import { AirbnbDetailComponent } from './components/bookings/airbnb-detail/airbnb-detail.component';
import { TrainDetailComponent } from './components/bookings/train-detail/train-detail.component'

export const UserRoutes: Routes = [
    {
        path:'',
        component:HomeComponent,
        resolve:{user:GetUser}
    },
    {
        path:'head',
        component:HeaderComponent,
        resolve:{user:GetUser}
    },
    {
        path:'user',
        children:[
            {
                path:'booking',
                children:[
                    {
                        path:'flight',
                        component:FlightsComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:'flight-list',
                        component:FlightsListComponent,
                        resolve:{user:GetUser, flight:getFlights}
                    },
                    {
                        path:'flight/:id',
                        component:FlightDetailComponent,
                        resolve:{user:GetUser, flight:GetFlightId, group:GetGroups}
                    },
                    {
                        path:'hotel',
                        component:HotelsComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:'hotel-list',
                        component:HotelsListComponent,
                        resolve:{user:GetUser, hotel:GetHotel}
                    },
                    {
                        path:'hotel/:id',
                        component:HotelDetailComponent,
                        resolve:{user:GetUser, hotel:GetHotelId, group:GetGroups}
                    },
                    {
                        path:'venue',
                        component:VenuesComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:'venue-list',
                        component:VenuesListComponent,
                        resolve:{user:GetUser, venue:GetVenues}
                    },
                    {
                        path:'venue/:id',
                        component:VenueDetailComponent,
                        resolve:{user:GetUser, venue:GetVenueId, group:GetGroups}
                    },
                    {
                        path:'train',
                        component:TrainsComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:'train-list',
                        component:TrainsListComponent,
                        resolve:{user:GetUser, flight:getFlights}
                    },
                    {
                        path:'train/:id',
                        component:TrainDetailComponent,
                        resolve:{user:GetUser, group:GetGroups}
                    },
                    {
                        path:'car',
                        component:CarsComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:'car-list',
                        component:CarsListComponent,
                        resolve:{user:GetUser, car:GetCars}
                    },
                    {
                        path:'car/:id',
                        component:CarDetailComponent,
                        resolve:{user:GetUser, car:GetCarId, group:GetGroups}
                    },
                    {
                        path:'cruise',
                        component:CruiseComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:"cruise-list",
                        component:CruiseListComponent,
                        resolve:{user:GetUser, venue:GetVenues}
                    },
                    {
                        path:'cruise/:id',
                        component:CruiseDetailComponent,
                        resolve:{user:GetUser, group:GetGroups}
                    },
                    {
                        path:'airbnb',
                        component:AirbnbComponent,
                        resolve:{user:GetUser}
                    },
                    {
                        path:"airbnb-list",
                        component:AirbnbListComponent,
                        resolve:{user:GetUser, venue:GetVenues}
                    },
                    {
                        path:'airbnb/:id',
                        component:AirbnbDetailComponent,
                        resolve:{user:GetUser, group:GetGroups}
                    },
                    {
                        path:'others',
                        component:OthersComponent,
                        resolve:{user:GetUser}
                    }
                ]
            },
            {
                path:'about',
                component:AboutComponent,
                resolve:{user:GetUser}
            },
            {
                path:'trips',
                component:TripsComponent,
                resolve:{user:GetUser},
                canActivate:[AuthGuard],
                children:[
                    {
                        path:'travellingnow',
                        component:TravellingNowComponent,
                        resolve:{user:GetUser, trip:GetCurrentTrips},
                        canActivate:[AuthGuard],
                    },
                    {
                        path:'pasttrips',
                        component:PastTripsComponent,
                        resolve:{user:GetUser, trip:GetPastTrips},
                        canActivate:[AuthGuard],
                    },
                    {
                        path:'upcomingtrips',
                        component:UpcomingTripsComponent,
                        resolve:{user:GetUser, trip:GetUpcomingTrips},
                        canActivate:[AuthGuard],
                    }
                ]
            },
            {
                path:'approval',
                component:ApprovalComponent,
                resolve:{user:GetUser, invite:GetInviteUser, pending_trips:GetPendingTrips},
                canActivate:[AuthGuard]
            },
            {
                path:'invoice',
                component:InvoiceComponent,
                resolve:{user:GetUser, receipt:GetReceipt},
                canActivate:[AuthGuard],
            },
            {
                path:'reporting',
                component:ReportingComponent,
                resolve:{user:GetUser},
                canActivate:[AuthGuard],
            },
            {
                path:'payment',
                component:PaymentComponent,
                resolve:{user:GetUser, card:GetCards},
                canActivate:[AuthGuard],
            },
            {
                path:'help',
                component:HelpComponent,
                resolve:{user:GetUser},
                
            },
            {
                path:'setting',
                component:CompanySettingComponent,
                resolve:{user:GetUser},
                children:[
                    {
                        path:'group',
                        component:GroupsComponent,
                        resolve:{group:GetGroups}
                    },
                    {
                        path:'supervisor',
                        component:SupervisorComponent,
                        resolve:{invited_user:GetAllInviteUser}
                    }
                ],
                canActivate:[AuthGuard],
            },
            {
                path:'profile',
                component:ProfileComponent,
                resolve:{user:GetUser, invite:GetInviteUser},
                canActivate:[AuthGuard],
            }
        ]
    }
]