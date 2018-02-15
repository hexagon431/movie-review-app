import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieApiProvider } from '../../providers/movie-api/movie-api';
import { Observable } from 'rxjs/Observable';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  upImage = 'https://image.tmdb.org/t/p/w500/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg';
  // apiKey = '74cff56e7a570daac9b5d7fae1093dc0';

  // private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  title = "Movie Reviews";
  posters = [
    {
      image: 'assets/imgs/junglebook.jpg'
    },
    {
      image: 'assets/imgs/ozpic.jpg'
    },
    {
      image: 'assets/imgs/hobbit.jpg'
    }
  ];
  disney: Observable<any>;
  popular: Observable<any>;
  action: Observable<any>;
  loaded: boolean = false;

  constructor(public navCtrl: NavController,
              public movie: MovieApiProvider) { }

  ionViewDidLoad() {
      console.log(this.title);
      this.loaded = true;


      this.movie.getPopularMovies().subscribe(
        popular => this.popular = popular.results.sort(function compare(a, b) {
          if (a.vote_count > b.vote_count) {
            return -1;
          }
          if (a.vote_count < b.vote_count) {
            return 1;
          }
          return 0;
        })
      );


      this.movie.getMoviesByCompany('2', '2013').subscribe(
        disney => this.disney = disney.results);



      this.movie.getMoviesByGenre('28', '2017').subscribe(
        action => this.action = action.results
        .sort(function compare(a, b) {
          if (a.vote_average > b.vote_average) {
            return -1;
          }
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          return 0;
        })
        );
  }


}

