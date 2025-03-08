import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterstudentComponent } from './components/registerstudent/registerstudent.component';
import { PlaceorderComponent } from './components/placeorder/placeorder.component';
import { AccountComponent } from './components/account/account.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { ViewstudentComponent } from './components/viewstudent/viewstudent.component';

export const routes: Routes = [
    {
        path:'',
        component: DashboardComponent
    },
    {
        path:'navbar',
        component: NavbarComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'registerstudent',
        component: RegisterstudentComponent
    },
    {
        path:'placeorder',
        component: PlaceorderComponent
    },
    {
        path:'account',
        component: AccountComponent
    },
    {
        path:'vieworder',
        component: ViewordersComponent
    },
    {
        path:'viewstudent',
        component: ViewstudentComponent
    },
];
