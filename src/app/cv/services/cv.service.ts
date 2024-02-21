import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
   constructor() {

  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}
