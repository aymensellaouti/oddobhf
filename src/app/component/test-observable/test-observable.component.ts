import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, distinctUntilChanged, filter, map } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  observable: Observable<number>;

  constructor(private toaster: ToastrService) {
    // 1 2 3 4 5
    this.observable = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.subscribe((val) => {
      console.log(val);
    });

    this.observable
    // 1 2 3 4 5
    .pipe(
      map(val => val * 3),
      // 3 6 9 12 15
      filter(val => val % 2 == 0),
      // 6 12
      distinctUntilChanged()
      )
    .subscribe({
      next: (value) => {
        this.toaster.info('' + value)
      },
      complete: () => {this.toaster.warning('BOOOM!!!!');},
      error: (err) => {this.toaster.error('something went wrong');}
    })
  }
}
