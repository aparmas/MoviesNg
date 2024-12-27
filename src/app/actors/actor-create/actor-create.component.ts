import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { ActorFormComponent } from "../actor-form/actor-form.component";
import { ActorCreateDto } from '../actor';

@Component({
  selector: 'app-actor-create',
  standalone: true,
  imports: [MatButtonModule, ActorFormComponent],
  templateUrl: './actor-create.component.html',
  styleUrl: './actor-create.component.css'
})
export class ActorCreateComponent {

  router = inject(Router);

  save(actor:ActorCreateDto){
   // this.router.navigate(['/actors'])
   console.log('Create actor', actor);
  }

}
