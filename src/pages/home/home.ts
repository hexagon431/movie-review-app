import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieApiProvider} from "../../providers/movie-api/movie-api";
import {Observable} from "rxjs/Observable";
import {Nav} from "ionic-angular";
import {MovieDetailsPage} from "../movie-details/movie-details";
import {MovieSearchPage} from "../movie-search/movie-search";





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Observable<any>;

  upImage = 'https://image.tmdb.org/t/p/w500/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg';

  // private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  title = "Flash Flix";
  posters = [
    {
      title: "Rogue One: A Star Wars Story",
      id: '330459',
      poster_path: "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
      backdrop_path: "/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg"
    },
    {
      title: "The Hobbit: An Unexpected Journey",
      id: '49051',
      poster_path: "/ysX7vDmSh5O19vFjAi56WL7l4nk.jpg",
      backdrop_path: "/jjAq3tCezdlQduusgtMhpY2XzW0.jpg"
    },
    {
      title: 'The Jungle Book',
      id: '278927',
      poster_path: "/vOipe2myi26UDwP978hsYOrnUWC.jpg",
      backdrop_path: "/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg",
    },
    {
      title: "Jumanji: Welcome to the Jungle",
      id: '353486',
      poster_path: "/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
      backdrop_path: "/cpz070zEKbPGXzCWuQsNt42PqXY.jpg"
    }
  ];
  disney: Observable<any>;
  popular: Observable<any>;
  action: Observable<any>;
  comedy: Observable<any>;
  loaded: boolean = false;

  constructor(public navCtrl: NavController,
              public movie: MovieApiProvider) { }

  ionViewDidLoad() {
      console.log(this.title);

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

      this.movie.getMoviesByGenre('35').subscribe(
        comedy => this.comedy = comedy.results);

    this.loaded = true;
  }

  getDetails(id: string) {
    console.log(id);
    this.navCtrl.push(MovieDetailsPage, {id: id});
  }
  searchDB(){
    this.navCtrl.push(MovieSearchPage);
  }


}

