import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MovieDetailsPage} from "../pages/movie-details/movie-details";
import {HttpClientModule} from "@angular/common/http";
import {MovieApiProvider} from "../providers/movie-api/movie-api";
import {MovieSearchPage} from "../pages/movie-search/movie-search";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailsPage,
    MovieSearchPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailsPage,
    MovieSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
