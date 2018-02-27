import { Component } from '@angular/core';
 // import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})

export class LoginPage {
  loggedIn=false;
  email: string;
  password: string;

  constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private firebase: AngularFireDatabase){
  }

  login(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(() =>{

      let currentUser = this.angularFireAuth.auth.currentUser.uid;



    this.firebase.object(`users/${currentUser}`).set({
          userId: currentUser,
          email: this.email,
          password: this.password
         });
    });

    this.angularFirestore.collection('users').add({name: "beep"}).then(data=> {
      console.log(data);
    });

  }

  fbLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    this.angularFirestore.collection('users').add({name: "beep"}).then(data=> {
      console.log(data);
    });


  }
  googleLogin(){
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.angularFirestore.collection('users').add({name: "beep"}).then(data => {
      console.log(data);
    });
    this.loggedIn = true;


  }
}


