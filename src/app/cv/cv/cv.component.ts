import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HelloService } from 'src/app/service/hello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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
    private toaster: ToastrService
  ) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs
      },
      error: (e) => {
        this.toaster.error(`Les cvs sont fake. Problème au niveau du serveur, merci de contacter l'admin`)
        this.cvs = this.cvService.getFakeCvs();
      }
    });
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
