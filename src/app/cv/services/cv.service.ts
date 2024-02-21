import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
   constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '1234', 41),
      new Cv(2, 'sellaouti', 'skander', 'teacher', '    ', '12345', 5),
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
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
