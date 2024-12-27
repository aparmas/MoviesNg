import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListMoviesComponent } from "../list-movies/list-movies.component";
import { FilterMovies } from './FilterMovies';

@Component({
  selector: 'app-filter-movies',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListMoviesComponent],
  templateUrl: './filter-movies.component.html',
  styleUrl: './filter-movies.component.css'
})
export class FilterMoviesComponent implements OnInit{
  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
     this.filteringMovies = this.movies;
     this.searchMovies(values as FilterMovies);
    });

  }

  searchMovies(filterMovies:FilterMovies){

    if (filterMovies.title){
      this.filteringMovies = this.filteringMovies.filter(m => m.title.toLowerCase().indexOf(filterMovies.title.toLowerCase()) !== -1);
      }

    if (filterMovies.genreId !== 0){
      this.filteringMovies = this.filteringMovies.filter(m => m.genres.indexOf(filterMovies.genreId) !== -1);
      }

    if (filterMovies.nextRelease){
      this.filteringMovies = this.filteringMovies.filter(m => m.nextRelease);
      }

    if (filterMovies.onCinema){
      this.filteringMovies = this.filteringMovies.filter(m => m.onCinema);
      }
  }

  cleanFilter(){
    this.form.patchValue({title: '', genreId: 0, nextRelease: false, onCinema: false});
  }

  private FormBuilder = inject(FormBuilder);

  form = this.FormBuilder.group({
    title: '',
    genreId: 0,
    nextRelease: false,
    onCinema: false
  })

  genres = [
    {id: 1, name: 'Drama'},
    {id: 2, name: 'Action'},
    {id: 3, name: 'Comedi'},
  ];

  movies = [{
    title: 'Inside Out 2',
    releaseDate: new Date(),
    price: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    genres:[1,2,3],
    nextRelease: true,
    onCinema: false
  },
  {
    title: 'Moana 2',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    genres:[1],
    nextRelease: false,
    onCinema: true
  },
  {
    title: 'Bad Boys: Ride or Die',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    genres:[2,3],
    nextRelease: true,
    onCinema: false
  },
  {
    title: 'Deadpool & Wolverine',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    genres:[],
    nextRelease: false,
    onCinema: false
  },
  {
    title: 'Oppenheimer',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    genres:[3],
    nextRelease: false,
    onCinema: true
  },
  {
    title: 'The Flash',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    genres:[1,3],
    nextRelease: true,
    onCinema: false
  }];

  filteringMovies = this.movies;
}
