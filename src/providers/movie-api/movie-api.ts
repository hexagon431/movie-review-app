import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../interfaces/Movie";
import 'rxjs';

@Injectable()
export class MovieApiProvider {


  movieSearchBaseUrl: string = 'https://api.themoviedb.org/3/movie/';
  discoverMoviesBaseUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  moviePosterBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  apiKey = "?api_key=74cff56e7a570daac9b5d7fae1093dc0";
  movies: any = {};

  testMovie: Movie = {
    "adult": false,
    "backdrop_path": "/owByaQiAlauEZy6hLd6dwsY4QHf.jpg",
    "belongs_to_collection": null,
    "budget": 175000000,
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 12,
        "name": "Adventure"
      }
    ],
    "homepage": "http://disney.go.com/disneypictures/up/",
    "id": 14160,
    "imdb_id": "tt1049413",
    "original_language": "en",
    "original_title": "Up",
    "overview": "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    "popularity": 33.890809,
    "poster_path": "/nk11pvocdb5zbFhX5oq5YiLPYMo.jpg",
    "production_companies": [
      {
        "name": "Pixar Animation Studios",
        "id": 3
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2009-05-13",
    "revenue": 735099082,
    "runtime": 96,
    "spoken_languages": [
      {
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Up",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 8327
  };

  constructor(private http: HttpClient){ }

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.movieSearchBaseUrl}popular${this.apiKey}`)
    .map((response: Response) => {
      this.movies = response;
      console.log(this.movies);
      return this.movies;
    });
  }

  getMoviesByCompany(companyId: string): Observable<any>{
    return this.http.get(`${this.discoverMoviesBaseUrl}${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${companyId}`)
      .map((response: Response) => {
      this.movies = response;
      return this.movies;
      })
  }

  getMoviesBySearch(search: string): Observable<any> {
    return this.http.get(`${this.movieSearchBaseUrl}${this.apiKey}&language=en-US&query=${search}&page=1&include_adult=false`)
      .map((response: Response) => {
      this.movies = response;
      return this.movies;
      })
  }

  getMoviesByGenre(genreId: string){
    return this.http.get(`${this.discoverMoviesBaseUrl}${this.apiKey}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
      .map((response: Response) => {
      this.movies = response;
      return this.movies;
      })
  }

  getTestMovie(): Movie{
    return this.testMovie;
  }
}
