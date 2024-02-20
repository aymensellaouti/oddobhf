import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow]',
})
export class RainbowDirective {
  // Chneya les attributs que je veux manipuler
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = '';
  constructor() {
    console.log('new instance of Rainbow');

  }
  // chneya nhab na3mel ou wa9tech
  // a chaque caractére écrit on veut change color et bc
  @HostListener('keyup') onKeyUp() {
    this.color = this.bc = this.getRandomColor();
  }

  private getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
