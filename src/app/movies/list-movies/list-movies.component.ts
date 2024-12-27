import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BaseListComponent } from "../../share/components/base-list/base-list.component";
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, BaseListComponent, MatButtonModule, MatIconModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {
  @Input({required : true})
  movies !: any[];

 
}
