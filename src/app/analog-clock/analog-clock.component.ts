import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild} from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements AfterViewInit, OnDestroy {


  @Input() currentTime: number;
  @ViewChild('hourHand') hourHand: ElementRef;
  @ViewChild('minHand') minHand: ElementRef;
  @ViewChild('secondHand') secondHand: ElementRef;
  private intervalId;

  constructor() {
  }

  ngAfterViewInit() {
    this.currentTime = Date.now();
    this.intervalId = setInterval(() => this.refreshClock(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private refreshClock(): void {
    this.currentTime += 1000;
    const date = new Date(this.currentTime);
    const hDeg = date.getHours() * 30 + date.getMinutes() * (360 / 720);
    const mDeg = date.getMinutes() * 6 + date.getSeconds() * (360 / 3600);
    const sDeg = date.getSeconds() * 6;
    console.log(sDeg);
    this.hourHand.nativeElement.setAttribute('style', 'transform: rotate(' + hDeg + 'deg\')');
    this.minHand.nativeElement.setAttribute('style', 'transform: rotate(' + mDeg + 'deg\')');
    this.secondHand.nativeElement.setAttribute('style', 'transform: rotate(' + sDeg + 'deg\')');
  }

}
