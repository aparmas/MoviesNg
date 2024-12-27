import { Component, Input, numberAttribute } from '@angular/core';
import { CinemaDto, CinemaCreateDto } from '../cinemas';
import { CinemasFormComponent } from "../cinemas-form/cinemas-form.component";

@Component({
  selector: 'app-cinema-edit',
  standalone: true,
  imports: [CinemasFormComponent],
  templateUrl: './cinema-edit.component.html',
  styleUrl: './cinema-edit.component.css'
})
export class CinemaEditComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cinema:CinemaDto = {id:1, name:'Fandango',latitude:25.8428881773123, length:-80.33897547128615}

  save(cinema:CinemaCreateDto){
    console.log('Editing:',cinema)

  }
}

