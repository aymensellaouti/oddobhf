import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'aymen';
  message = '';
  isHidden = true;
  constructor() {
    // setInterval(() => {
    //   this.isHidden = ! this.isHidden;
    // }, 1500);
  }

  interupteur() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(message: string) {
    this.message = message;
  }
}
