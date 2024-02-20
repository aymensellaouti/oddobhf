import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv!: Cv;

  // Je dois créer un evenement signalant
  // que quelqu'un a cliqué sur moi
  @Output() selectCv = new EventEmitter<Cv>();


  // Je vais emettre cet événement
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
