import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Observable<any>;

  constructor(public navCtrl: NavController, movieApi: MovieApiProvider) {
    movieApi.getPopularMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
