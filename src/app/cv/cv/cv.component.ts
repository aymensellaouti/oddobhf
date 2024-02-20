import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      'rotating_card_profile2.png',
      '1234',
      41
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'teacher',
      'rotating_card_profile3.png',
      '12345',
      5
    ),
  ];
}
