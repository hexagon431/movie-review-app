

import {Injectable} from "@angular/core";

@Injectable()
export class UserDetailsProvider {

  currentUser={};

  constructor(){}

  setCurrentUser(user){
    this.currentUser = {
      email: user.email,
      userId: user.uid,
      name: user.displayName,


    }
  }

  getUserDetails(){
    return this.currentUser;
  }

  clearUserData(){
    this.currentUser = {};
  }

  getUserFavorites(){

  }

}
