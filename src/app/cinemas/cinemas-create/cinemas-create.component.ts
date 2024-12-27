import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CinemaCreateDto } from '../cinemas';
import { CinemasFormComponent } from "../cinemas-form/cinemas-form.component";

@Component({
  selector: 'app-cinemas-create',
  standalone: true,
  imports: [MatButtonModule, CinemasFormComponent],
  templateUrl: './cinemas-create.component.html',
  styleUrl: './cinemas-create.component.css'
})
export class CinemasCreateComponent {

  router = inject(Router);

  save(cinema:CinemaCreateDto){
    //this.router.navigate(['/cinemas'])
    console.log('Creating cinema:', cinema);
  }

}
