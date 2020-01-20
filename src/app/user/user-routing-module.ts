import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './components/bookings/flights/flights.component';
import { HotelsComponent } from './components/bookings/hotels/hotels.component';
import { VenuesComponent } from './components/bookings/venues/venues.component';
import { TrainsComponent } from './components/bookings/trains/trains.component';
import { CarsComponent } from './components/bookings/cars/cars.component';
import { CruiseComponent } from './components/bookings/cruise/cruise.component';
import { AirbnbComponent } from './components/bookings/airbnb/airbnb.component';
import { OthersComponent } from './components/bookings/others/others.component';

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
            }
        ]
    }
]