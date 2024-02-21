import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.const';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent {
  // J'affiche le cv d'id récupérer de la route
  // 1 je récupére l'id de la route
  // 2 je cherche le cv avec cet id (le cvService fait ca)
  // 21 Le cv existe on l'affiche
  // 22 Le cv n'existe pas on redirige vers la liste des cvs
  cv: Cv | null = null;

  constructor(
    // je récupére l'id de la route
    private acr: ActivatedRoute,
    // Pour récupérer le cv via son id
    private cvService: CvService,
    // Redirection
    private router: Router
  ) {
    // 1 je récupére l'id de la route
    const id = +this.acr.snapshot.params['id'];
    // 2 je cherche le cv avec cet id (le cvService fait ca)
    // 21 Le cv existe on l'affiche
    this.cv = this.cvService.findCvById(id);
    // 22 Le cv n'existe pas on redirige vers la liste des cvs
    if (!this.cv) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
