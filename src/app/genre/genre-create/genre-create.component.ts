import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { firstLetterUperCase } from '../../share/functions/validations';
import { GenreFormComponent } from "../genre-form/genre-form.component";
import { GenreCreateDto } from '../genre';

@Component({
  selector: 'app-genre-create',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenreFormComponent],
  templateUrl: './genre-create.component.html',
  styleUrl: './genre-create.component.css'
})
export class GenreCreateComponent {

  private router = inject(Router);

  save(genre:GenreCreateDto){
    //this.router.navigate(['/genres']);

    console.log(genre);
  }

}
