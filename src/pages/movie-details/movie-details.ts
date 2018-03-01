import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ReviewType} from '../../interfaces/ReviewType';


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
  private loginState;
  reviewText = "";
  maxCharacters = 140;
  private reviewType: ReviewType;
  review: any;
  userId: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieApi: MovieApiProvider,
              private angularFireAuth: AngularFireAuth,
              private firebase: AngularFireDatabase) {



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
    this.displayReviews();
  }

  submitReview(){
    this.userId = this.angularFireAuth.auth.currentUser.uid;
    this.firebase.object(`reviews/${this.movieId}/${this.userId}`).set({
      reviewType: this.reviewType,
      review: this.reviewText

    });
    this.reviewText = '';
  }
  positive(){
    this.reviewType = ReviewType.POSITIVE;
    console.log(ReviewType.POSITIVE)
  }
  negative(){
    this.reviewType = ReviewType.NEGATIVE;
    console.log(ReviewType.NEGATIVE)

  }
  displayReviews() {
    this.firebase.object(`reivews/${this.movieId}`).valueChanges().subscribe( object => this.review = object)
  }
  addToFavorites(){
    //add crap to a personalized favorites array visible on favorites page
    console.log("Movie added to favorites");
  }

}





