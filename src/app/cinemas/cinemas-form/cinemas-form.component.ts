import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CinemaCreateDto } from '../cinemas';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MapComponent } from "../../share/components/map/map.component";
import { Coordinate } from '../../share/components/map/coordinate';

@Component({
  selector: 'app-cinemas-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink, MapComponent],
  templateUrl: './cinemas-form.component.html',
  styleUrl: './cinemas-form.component.css'
})
export class CinemasFormComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initCoordinates.push({latitude: this.model.latitude, length: this.model.length})
      }
  }

  @Input()
  model?:CinemaCreateDto;

  initCoordinates: Coordinate[]=[];
  @Output()
  senderForm = new EventEmitter<CinemaCreateDto>();

  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    name: ['',{validators:[Validators.required]}],
    latitude: new FormControl<number | null>(null,[Validators.required]),
    length: new FormControl<number | null>(null,[Validators.required])
  })

  getErrorFieldName(){
    let name = this.form.controls.name;

    if(name.hasError('required')){
      return 'This field is required';
    }
    return '';
  }

  selectedCoordinate(coordinate:Coordinate){
    this.form.patchValue(coordinate);
  }

  save(){
    if(!this.form.valid){
      return;
    }

    const cinema = this.form.value as CinemaCreateDto;
    this.senderForm.emit(cinema);
  }



}
