import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tik Tok Tik Tok ...';

  selectedTime: number;

  updateTime(time: number): void {
    this.selectedTime = time;
  }
}
