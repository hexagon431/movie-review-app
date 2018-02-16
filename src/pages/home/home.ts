import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {Observable} from "rxjs/Observable";
import {Nav} from "ionic-angular";
import {MovieDetailsPage} from "../movie-details/movie-details";

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

  buttonClicked(movieId: number){
    this.navCtrl.push(MovieDetailsPage, {id: movieId} );
  }

}
