import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreateDto, ActorDto } from '../actor';
import { ActorFormComponent } from "../actor-form/actor-form.component";

@Component({
  selector: 'app-actor-edit',
  standalone: true,
  imports: [ActorFormComponent],
  templateUrl: './actor-edit.component.html',
  styleUrl: './actor-edit.component.css'
})
export class ActorEditComponent {
  @Input({transform: numberAttribute})
  id!: number;

  actor: ActorDto = {id:1,name:'Thom Holland', birthDate: new Date('2024-10-28'), image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/220px-Tom_Holland_by_Gage_Skidmore.jpg'};

  save(actor:ActorCreateDto){
    console.log('Editing actor', actor);
  }
}
