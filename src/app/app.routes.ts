import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenreIndexComponent } from './genre/genre-index/genre-index.component';
import { GenreCreateComponent } from './genre/genre-create/genre-create.component';
import { ActorCreateComponent } from './actors/actor-create/actor-create.component';
import { CinemasIndexComponent } from './cinemas/cinemas-index/cinemas-index.component';
import { CinemasCreateComponent } from './cinemas/cinemas-create/cinemas-create.component';
import { MovieCreateComponent } from './movies/movie-create/movie-create.component';
import { GenreEditComponent } from './genre/genre-edit/genre-edit.component';
import { ActorEditComponent } from './actors/actor-edit/actor-edit.component';
import { CinemaEditComponent } from './cinemas/cinema-edit/cinema-edit.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';

export const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'genres', component: GenreIndexComponent},
  {path:'genre/create', component: GenreCreateComponent},
  {path:'genre/edit/:id', component: GenreEditComponent},
  {path:'actors', component: ActorsIndexComponent},
  {path:'actor/create', component: ActorCreateComponent},
  {path:'actor/edit/:id', component: ActorEditComponent},
  {path:'cinemas', component: CinemasIndexComponent},
  {path:'cinema/create', component: CinemasCreateComponent},
  {path:'cinema/edit/:id', component: CinemaEditComponent},
  {path:'movie/create', component: MovieCreateComponent},
  {path:'movie/edit:id', component: MovieEditComponent},
  {path:'**', redirectTo: ''}
];
