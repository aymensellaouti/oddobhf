import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  // state du composent
  defaultColor = 'red';
  color = this.defaultColor;
  changeColor(element: HTMLInputElement) {
    this.color = element.value;
    element.value = '';
  }
  reset() {
    this.color = this.defaultColor;
  }
}
