import { Component, ViewChild } from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MovieDetailsPage} from "../pages/movie-details/movie-details";
import {MovieSearchPage} from "../pages/movie-search/movie-search";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  authStatus: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public angularFireAuth: AngularFireAuth) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage }
      //{ title: 'Search', component: MovieSearchPage}
      //{ title: 'Login', component: LoginPage }
    ];

    this.angularFireAuth.authState.subscribe(state => {
      this.authStatus = state;
    })

  }

  initializeApp() {
    // this.splashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  openLogin(){
    this.nav.setRoot(LoginPage);
  }


}
