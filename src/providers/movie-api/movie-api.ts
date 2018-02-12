import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../interfaces/Movie";

@Injectable()
export class MovieApiProvider {


  baseUrl: string = '';

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

  getMovies(): Observable<any> {
    return //this.http.get()
  }

  getTestMovie(): Movie{
    return this.testMovie;
  }
}
