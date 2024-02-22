import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from 'src/app/config/api.const';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private http = inject(HttpClient);
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
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
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  getCvByIdApi(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  deleteCvByIdApi(id: number): Observable<{count: number}> {

    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }
  addCvApi(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(APP_API.cv, cv);
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

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
