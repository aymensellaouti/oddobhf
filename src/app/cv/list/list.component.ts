import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input({ required: true }) cvs: Cv[] = [];
  //@Output() selectCv = new EventEmitter<Cv>();
  // Ki bech iesma3 click sar 3la el item
  // bech i9oul (forward) lel parent mta3ou

}
