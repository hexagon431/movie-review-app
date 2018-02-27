import {Injectable} from "@angular/core";
import {User} from "../../interfaces/User";
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class UserDetailsProvider {



  constructor(public angularFireAuth: AngularFireAuth){}

  setUserObject(){

    //this.angularFireAuth.auth().UserInfo;

    // let userObject: User = {
    //   uId:
    // }
  }
}
