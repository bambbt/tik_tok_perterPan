import {AfterViewInit, Component, Input, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements AfterViewInit, OnDestroy {


  @Input() currentTime: number;
  @ViewChild('hourHand') hourHand: HTMLElement;
  @ViewChild('minHand') minHand: HTMLElement;
  @ViewChild('secondHand') secondHand: HTMLElement;
  private intervalId;

  constructor() {
    this.currentTime = Date.now();
  }

  ngAfterViewInit() {
    this.updateClockFace();
    this.intervalId = setInterval(() => this.updateClockFace(), 100);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateClockFace(): void {
    const date = new Date(this.currentTime);
    const hDeg = date.getHours() * 30 + date.getMinutes() * (360 / 720);
    const mDeg = date.getMinutes() * 6 + date.getSeconds() * (360 / 3600);
    const sDeg = date.getSeconds() * 6;
    this.hourHand.setAttribute('style', 'transform: rotate(' + hDeg + 'deg\')');
    this.minHand.setAttribute('style', 'transform: rotate(' + mDeg + 'deg\')');
    this.secondHand.setAttribute('style', 'transform: rotate(' + sDeg + 'deg\')');
  }

}
