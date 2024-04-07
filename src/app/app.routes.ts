import { Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OverviewComponent } from "./components/overview/overview.component";
import {ErrorComponent} from "./components/error/error.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";


export const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Overview', component: OverviewComponent},
  {path: 'Home', component: DashboardComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: '**', component: ErrorComponent},
];
