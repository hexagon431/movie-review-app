import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {AngularFireAuth} from "angularfire2/auth";

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
  private selectedMovie: Movie;
  private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  private movieReleaseDate: Date;
  private segmentOption: string = 'description';
<<<<<<< HEAD
  writeReview = false;
=======
  private loginState;
>>>>>>> b1f56f8843dc17cbcd87ccc79a6022011a69a906

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieApi: MovieApiProvider, private angularFireAuth: AngularFireAuth) {



    this.movieId = this.navParams.get('id');

    console.log(this.navParams.get('id'));
    this.movieApi.getMovieById(this.movieId).subscribe(data => {
      console.log(data);
      this.selectedMovie = data;
      this.movieReleaseDate = new Date(this.selectedMovie.release_date);
    });

    this.angularFireAuth.authState.subscribe(state => {
      this.loginState = state;
      console.log(state);
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');
  }

  createReview(){
    this.writeReview = true;
  }

}
