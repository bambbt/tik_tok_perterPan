import {Component, Input, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit, OnDestroy {

  @Input() currentTime: number;
  private intervalId;

  constructor() {

  }

  ngOnInit() {
    this.currentTime = Date.now();
    this.intervalId = setInterval(() => this.refreshClock(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private refreshClock() {
    this.currentTime += 1000;
  }
}
