import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { DressComponent } from './dress/dress.component';
import { MenuComponent } from './menu/menu.component';
import { RegistryComponent } from './registry/registry.component';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet,
      FooterComponent,
      NavbarComponent,
      HomeComponent,
      LocationComponent,
      DressComponent,
      MenuComponent,
      RegistryComponent,
      ScheduleComponent,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
