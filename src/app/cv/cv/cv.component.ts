import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HelloService } from 'src/app/service/hello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
  now = new Date();
  cvs: Cv[] = [];
  constructor(
    private helloService: HelloService,
    private todoService: TodoService,
    private cvService: CvService,
  ) {
    this.cvs = this.cvService.getCvs();
    this.helloService.sayHello('Je suis cvComponent');
    this.cvService.selectCv$
    .pipe(distinctUntilChanged())
    .subscribe(
      (cv) => {
        console.log(cv);

        this.selectedCv = cv;
      }
    )
  }

}
