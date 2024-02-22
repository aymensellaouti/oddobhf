import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv!: Cv;
  @Input() size = 50;
  cvService: CvService =  inject(CvService);
  // Je dois créer un evenement signalant
  // que quelqu'un a cliqué sur moi
  //@Output() selectCv = new EventEmitter<Cv>();


  // Je vais emettre cet événement
  onSelectCv() {
    //this.selectCv.emit(this.cv);
    this.cvService.selectCv(this.cv);
  }
}
