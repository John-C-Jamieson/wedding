import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  countdown: string = '';
  private intervalId: any;
  private targetDate: Date = new Date('2025-08-16T18:00:00');

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.updateCountdown(); // Initial call to display immediately
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const now = new Date().getTime();
    const target = this.targetDate.getTime();
    const distance = target - now;

    if (distance < 0) {
      // Clear the timer and show message when the countdown is finished
      this.countdown = 'The event has started!';
      clearInterval(this.intervalId);
      return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
