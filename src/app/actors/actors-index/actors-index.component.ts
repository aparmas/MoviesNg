import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-actors-index',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './actors-index.component.html',
  styleUrl: './actors-index.component.css'
})
export class ActorsIndexComponent {

}
