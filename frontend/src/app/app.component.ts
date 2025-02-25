import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  weddingTitle: string = "John & Jane's Wedding";
  weddingDate: string = "Saturday, June 15, 2025";
  weddingLocation: string = "The Grand Venue, City, Country";
  description: string = "We are thrilled to invite you to our wedding celebration! Join us as we exchange vows and celebrate love with family and friends.";
}
