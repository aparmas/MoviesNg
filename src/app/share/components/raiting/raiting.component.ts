import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-raiting',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './raiting.component.html',
  styleUrl: './raiting.component.css'
})
export class RaitingComponent {

  @Input({required: true, transform:( value:number ) => Array(value).fill(0)})
  maxRating!: number[];

  @Input()
  selectingRating = 0;

  clickedRating = 0;
  
  @Output()
  rated = new EventEmitter();

   handleMouseEnter(index:number){
   this.selectingRating = index + 1;
  }

   handleMouseLeave(){
    if(this.clickedRating !== 0)
      {
        this.selectingRating = this.clickedRating;
      }
      else
      {
        this.selectingRating = 0;
      }
  }

   handleMouseClick(index:number){
    this.selectingRating = index + 1;
    this.clickedRating = this.selectingRating;
    this.rated.emit(this.clickedRating);
  }

}
