import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'aymen';
  constructor() {
    setInterval(() => this.name === 'aymen' ? this.name= 'boutheina' : this.name = 'aymen', 3000);

  }
}
