import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'cv.png', '1234', 41),
  ];
}
