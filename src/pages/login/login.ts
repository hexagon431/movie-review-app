import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
 import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
// import { AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})

export class LoginPage {
  loggedIn=false;
  email: string;
  password: string;
  username: string;
  loginMode: boolean = true;

  constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore){
  // add 'private navCtrl: NavController'
  }

  login(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password);
    this.angularFirestore.collection('users').add({name: name}).then(data=> {
      console.log(data);
      //this.navCtrl.pop(LoginPage);
    });
  }

  fbLogin(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    this.angularFirestore.collection('users').add({name: "User"}).then(data=> {
      console.log(data);
      // this.navCtrl.pop(LoginPage);
    });
  }
  googleLogin(){
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.angularFirestore.collection('users').add({name: "user"}).then(data => {
      console.log(data);
      // this.navCtrl.pop(LoginPage);
    });
    this.loggedIn = true;
  }

  toggleLoginMode() {
    this.loginMode = !this.loginMode;

  }

 signUp(){
   this.angularFireAuth.auth.createUserWithEmailAndPassword(this.email, this.password);
   this.angularFirestore.collection('users').add({name: this.username})

  }

}


