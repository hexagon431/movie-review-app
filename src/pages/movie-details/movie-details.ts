import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {ReviewType} from '../../interfaces/ReviewType';
import _ from 'lodash';
import {Review} from "../../interfaces/Review";
import {UserDetailsProvider} from '../../providers/user-details/user-details';

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
  private reviewType: string;
  private reviews = [];
  userId: string;
  favorite = false;
  pos = false;
  neg = false;
  private trailers = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieApi: MovieApiProvider,
              private angularFireAuth: AngularFireAuth,
              private firebase: AngularFireDatabase,
              private logIn: UserDetailsProvider) {



    this.movieId = this.navParams.get('id');

    console.log(this.navParams.get('id'));
    this.movieApi.getMovieById(this.movieId).subscribe(data => {
      console.log(data);
      this.selectedMovie = data;
      this.movieReleaseDate = new Date(this.selectedMovie.release_date);
    });

    this.movieApi.getMovieTrailers(this.movieId).subscribe(data => {
      this.trailers = data.results;
    });

    this.angularFireAuth.authState.subscribe(state => {
      this.loginState = state;
      console.log(state);
    });

    this.displayReviews();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieDetailsPage');

  }

  submitReview(){
    if(this.logIn.logs == true) {
      if(this.reviewType != '' && this.reviewText != '') {
        this.userId = this.angularFireAuth.auth.currentUser.uid;
        this.firebase.object(`reviews/${this.movieId}/${this.userId}`).set({
          reviewType: this.reviewType,
          review: this.reviewText
        });
        this.reviewText = '';
        this.reviewType = '';
        this.neg = false;
        this.pos = false;
      }
      else {
        alert("Please write a review and select the thumbs up or down");
      }
    }
    else {
      alert("YOU NO LOG")
    }
  }
  positive(){
    this.reviewType = "Positive";
    console.log(this.reviewType);
    this.pos = true;
    this.neg = false;
  }
  negative(){
    this.reviewType = "Negative";
    console.log(this.reviewType);
    this.neg = true;
    this.pos = false;
  }
  noReview(){
    if(this.neg == true){
      this.neg = false;
    }
    if(this.pos == true){
      this.pos = false;
    }
  }
  displayReviews() {
    let array = [];
    this.firebase.object(`reviews/${this.movieId}`).valueChanges().subscribe( object => {
      console.log(object);
      array = [];
      _.forIn(object, function(value, key) {
        array.push({
          userId: key,
          review: object[key].review,
          reviewType: object[key].reviewType
        })
      });
      this.reviews = array;

    });
  }
  // addToFavorites(mId){
  //   let favorites = this.firebase.database.ref(`users/${this.angularFireAuth.auth.currentUser.uid}/favorites`);
  //   console.log(favorites);
  //   favorites.push(mId);
  //   //this.firebase.object(`users/${this.angularFireAuth.auth.currentUser.uid}/favorites`)
  //   console.log("Movie added to favorites");
  addToFavorites(){
    if(this.logIn.logs == true) {
      //add crap to a personalized favorites array visible on favorites page

      console.log("Movie added to favorites");
      this.favorite = true;
    }
    else{
      alert("YOU NO LOG");
    }
  }
  removeFavorite(){
    console.log('Movie removed from favorites');
    this.favorite = false;
  }

}





