import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HelloService } from 'src/app/service/hello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
  now = new Date();
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      '',
      '1234',
      41
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'teacher',
      '    ',
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
  constructor(private helloService: HelloService) {
    this.helloService.sayHello('Je suis cvComponent');
  }
  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
