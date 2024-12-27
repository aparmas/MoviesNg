import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstLetterUperCase } from '../../share/functions/validations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GenreCreateDto, GenreDto } from '../genre';

@Component({
  selector: 'app-genre-form',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './genre-form.component.html',
  styleUrl: './genre-form.component.css'
})
export class GenreFormComponent implements OnInit{
  ngOnInit(): void {
    if(this.model!==undefined)
      {
        this.form.patchValue(this.model);
      }
  }
  @Input()
  model?: GenreDto;

  @Output()
  senderForm = new EventEmitter<GenreCreateDto>;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['',{validators:[Validators.required, firstLetterUperCase()]}]
  })

  getErrorsFieldName():string{
    let name = this.form.controls.name;

    if(name.hasError('required'))
      {
        return "This field is required";
      }
    if(name.hasError('firstLetterUperCase'))
      {
        return name.getError('firstLetterUperCase').message;
      }
      return "";
  }

  save(){
    if(!this.form.valid)
      {
        return;
      }

      const genre = this.form.value as GenreCreateDto;
      this.senderForm.emit(genre);
  }
}
