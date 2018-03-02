

import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase/app';

@Injectable()
export class UserDetailsProvider {

  currentUser={};

  public userAuthState: Observable<any>;
  public logs: boolean;

  constructor(public angularFireAuth: AngularFireAuth){



    this.userAuthState = this.angularFireAuth.authState;

    this.userAuthState.subscribe( res => {
      if (res && res.uid) {
        this.logs = true;
        console.log('user is logged in');
      } else {
        this.logs = false;
        console.log('user not logged in')
      }
    });

  }

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
