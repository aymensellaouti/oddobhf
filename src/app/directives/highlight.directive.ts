import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective implements OnInit {

  @Input() in = 'yellow';
  @Input() out = 'red';
  // Chneya les attributs que je veux manipuler
  @HostBinding('style.backgroundColor') bgc = this.out;
  constructor() {
    console.log("Je suis la highlight directive");
  }
  ngOnInit(): void {
    this.bgc = this.out;
  }

  // chneya nhab na3mel ou wa9tech
  // 1 Ki nodkhel lel host nbadel couleur el background
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  // 2 Ki tokhrej lel host nbadel couleur el background
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }

}
