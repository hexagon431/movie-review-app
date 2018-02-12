import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {startAutoplay} from 'ionic-angular/components/slides/swiper/swiper';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
      console.log(this.title);
  }

  startAutoplay() {

  }
}

