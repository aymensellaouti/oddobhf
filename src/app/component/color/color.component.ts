import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  // state du composent
  defaultColor = 'red';
  color = this.defaultColor;
  constructor(private acr: ActivatedRoute) {
    console.log(this.acr.snapshot);

    this.defaultColor = this.acr.snapshot.params['defaultColor'];
    this.color = this.defaultColor;
  }
  changeColor(element: HTMLInputElement) {
    this.color = element.value;
    element.value = '';
  }
  reset() {
    this.color = this.defaultColor;
  }
}
