import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cinemas-index',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './cinemas-index.component.html',
  styleUrl: './cinemas-index.component.css'
})
export class CinemasIndexComponent {

}
