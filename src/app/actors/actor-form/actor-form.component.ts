import { ActorCreateDto, ActorDto } from './../actor';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import moment from 'moment';
import { dateNotFuture } from '../../share/functions/validations';
import { ImageInputComponent } from "../../share/components/image-input/image-input.component";

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, RouterLink, ReactiveFormsModule, MatInputModule, MatDatepickerModule, ImageInputComponent],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent implements OnInit {
  ngOnInit(): void {
   if(this.model!==undefined)
    {
      this.form.patchValue(this.model);
    }
  }
  @Input()
  model?:ActorDto;

  @Output()
  senderForm = new EventEmitter<ActorCreateDto>;

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name:['',{validators:[Validators.required]}],
    birthDate: new FormControl<Date|null>(null,{validators: [Validators.required, dateNotFuture()]}),
    image: new FormControl<File|string|null>(null)
  })

  getErrorFieldName(){
    let field = this.form.controls.name;
    if(field.hasError('required')){
      return 'This field is required';
    }
    return "";
  }

  getErrorFieldBirthDate(){
    let field = this.form.controls.birthDate;
    if(field.hasError('future')){
      return  field.getError('future').message;
    }

    if(field.hasError('required')){
      return 'This field is required';
    }
    return "";
  }

  selectedFile(file:File){
    this.form.controls.image.setValue(file);

  }
  save(){
    if(!this.form.valid)
      {
        return;
      }
      const actor =this.form.value as ActorCreateDto;
      actor.birthDate = moment(actor.birthDate).toDate();
      if(typeof actor.image === "string"){
        actor.image = undefined;
      }
      this.senderForm.emit(actor);

  }


}
