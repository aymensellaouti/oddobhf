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

  /**
   * Find the cv by id
   *
   * @param id
   * @returns Cv | null : if cv is not found return null else return cv
   */
  findCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   * Retourne true si l'élément est supprimé, false sinon
   *
   * @param cv: Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
}
