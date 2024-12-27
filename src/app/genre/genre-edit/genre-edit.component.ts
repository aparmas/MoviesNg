import { Component, Input, numberAttribute } from '@angular/core';
import { GenreFormComponent } from "../genre-form/genre-form.component";
import { GenreCreateDto, GenreDto } from '../genre';

@Component({
  selector: 'app-genre-edit',
  standalone: true,
  imports: [GenreFormComponent],
  templateUrl: './genre-edit.component.html',
  styleUrl: './genre-edit.component.css'
})
export class GenreEditComponent {
  @Input({transform:numberAttribute})
  id!:number;
  genre:GenreDto = {id:1, name:'Action'};

  save(genre:GenreCreateDto){
    console.log('Editing genre',genre);

  }
}
