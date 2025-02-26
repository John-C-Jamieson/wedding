import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { DressComponent } from './dress/dress.component';
import { MenuComponent } from './menu/menu.component';
import { RegistryComponent } from './registry/registry.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'dress', component: DressComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'schedule', component: ScheduleComponent },
  // Redirect empty path to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Optionally, handle unknown routes
  { path: '**', redirectTo: '/home' }
];
