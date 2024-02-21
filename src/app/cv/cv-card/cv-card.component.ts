import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css'],
})
export class CvCardComponent {
  @Input({}) cv!: Cv;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,

  ) {}

  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success(`${this.cv.name} a été pré sélectionné avec succès :)`);
    } else {
      this.toaster.warning(
        `${this.cv.name} est déjà pré sélectionné :(`
      );
    }
  }
}
