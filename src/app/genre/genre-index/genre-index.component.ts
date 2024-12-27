import { Component, Input, numberAttribute } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genre-index',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './genre-index.component.html',
  styleUrl: './genre-index.component.css'
})
export class GenreIndexComponent {


}
