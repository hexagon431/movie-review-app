import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {MovieApiProvider} from "../../providers/movie-api/movie-api";

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  private selectedMovie: Movie;
  private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  private movieReleaseDate

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieApi: MovieApiProvider) {
    this.selectedMovie = movieApi.getTestMovie();
    console.log(this.selectedMovie.poster_path);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
