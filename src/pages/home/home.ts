import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieApiProvider} from '../../providers/movie-api/movie-api';
// import {startAutoplay} from 'ionic-angular/components/slides/swiper/swiper';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  apiKey = '74cff56e7a570daac9b5d7fae1093dc0';

  private movieCoverBaseUrl: string = 'https://image.tmdb.org/t/p/w500';
  title = "Movie Reviews";
  posters = [

    {
      image: 'assets/imgs/hobbit.jpg'
    },
    {
      image: 'assets/imgs/junglebook.jpg'
    },
    {
      image: 'assets/imgs/ozpic.jpg'
    }
  ];
  popular = [
    {
      name: 'Movie title'
    },
    {
      name: 'Movie crap'
    },
    {
      name: 'Movie junk'
    },
    {
      name: 'Movie garbage'
    },
    {
      name: 'Movie crud'
    },
    {
      name: 'Movie words'
    }
  ];

  constructor(public navCtrl: NavController, private movie: MovieApiProvider) {

  }

  ionViewDidLoad() {
      console.log(this.title);
      this.movie.getTestMovie()
  }

  startAutoplay() {

  }
}

