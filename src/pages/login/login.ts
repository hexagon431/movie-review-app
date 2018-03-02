import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import {HomePage} from "../home/home";
import {AngularFireDatabase} from "angularfire2/database";
import {UserDetailsProvider} from "../../providers/user-details/user-details";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})

export class LoginPage {
  email: string;
  password: string;
  username: string;
  loginMode: boolean = true;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private navCtrl: NavController,
    private firebase: AngularFireDatabase,
    private userDetails: UserDetailsProvider){
  }

  login(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    this.angularFirestore.collection('users').add({name: name}).then(data=> {
      console.log(data);
      this.navCtrl.setRoot(HomePage);
      let currentUser = this.angularFireAuth.auth.currentUser.uid;
      console.log(this.angularFireAuth.auth.currentUser);

      this.firebase.object(`users/${currentUser}`).set({
        userId: currentUser,
        email: this.email,
        password: this.password
      });

      this.userDetails.setCurrentUser(this.angularFireAuth.auth.currentUser);
    });
    this.loggedIn = true;
  }

  fbLogin(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());

    this.angularFirestore.collection('users').add({name: "User"}).then(data=> {
      console.log(data);
    });
    this.loggedIn = true;
  }
  googleLogin(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

    this.angularFirestore.collection('users').add({name: "user"}).then(data => {
      console.log(data);
    });
  }

  toggleLoginMode() {
    this.loginMode = !this.loginMode;

  }

 signUp(){
   this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
   this.angularFirestore.collection('users').add({name: this.username}).then(data => {
     console.log(data);
     });
   this.navCtrl.setRoot(HomePage);

  }

}


