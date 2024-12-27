import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListMoviesComponent } from "./movies/list-movies/list-movies.component";
import { MenuComponent } from "./share/components/menu/menu.component";
import { RaitingComponent } from "./share/components/raiting/raiting.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListMoviesComponent, MenuComponent, RaitingComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
