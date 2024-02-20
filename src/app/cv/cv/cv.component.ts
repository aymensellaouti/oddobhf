import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
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
    new Cv(
      3,
      'bouthaina',
      'bouthaina',
      'teacher',
      'rotating_card_profile.png',
      '12345',
      20
    ),
  ];

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
