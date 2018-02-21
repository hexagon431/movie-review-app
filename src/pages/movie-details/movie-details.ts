import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {Observable} from "rxjs/Observable";
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

  private movieId;
  private selectedMovie: Observable<any>;
  private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  private movieReleaseDate: Date;
  private segmentOption: string = 'description';

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieApi: MovieApiProvider) {

    this.movieId = this.navParams.get('id');

    console.log(this.navParams.get('id'));
    this.movieApi.getMovieById(this.movieId).subscribe(data => {
      console.log(data);
      this.selectedMovie = data;
      console.log(this.selectedMovie);
      this.movieReleaseDate = new Date(this.selectedMovie.release_date);
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

}
