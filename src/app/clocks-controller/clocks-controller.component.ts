import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clocks-controller',
  templateUrl: './clocks-controller.component.html',
  styleUrls: ['./clocks-controller.component.css']
})
export class ClocksControllerComponent implements OnInit, OnDestroy {


  @Output() selectedTime: EventEmitter<number>;


  clockForm = new FormGroup({
    hours: new FormControl('', [
      Validators.required,
      Validators.max(12),
      Validators.min(0)
    ]),
    minutes: new FormControl('', [
      Validators.required,
      Validators.max(60),
      Validators.min(0)
    ]),
    seconds: new FormControl('', [
      Validators.required,
      Validators.max(60),
      Validators.min(0)
    ]),
  });

  constructor() {
    this.selectedTime = new EventEmitter<number>();
  }

  get hours() {
    return this.clockForm.get('hours');
  }

  get minutes() {
    return this.clockForm.get('minutes');
  }

  get seconds() {
    return this.clockForm.get('seconds');
  }

  ngOnInit() {
    const now = new Date();
    this.seconds.setValue(now.getSeconds());
    this.minutes.setValue(now.getMinutes());
    this.hours.setValue(now.getHours());
  }

  ngOnDestroy() {
    this.selectedTime.unsubscribe();
  }

  synchronize() {
    const selectedDate = new Date();
    selectedDate.setSeconds(this.seconds.value);
    selectedDate.setMinutes(this.minutes.value);
    selectedDate.setHours(this.hours.value);
    this.selectedTime.emit(selectedDate.getTime());
    this.clockForm.reset();
  }
}
