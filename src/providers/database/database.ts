import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DatabaseProvider{

  databaseUrl: string = "https://moviereviewapp-20b47.firebaseio.com/";


  constructor(private http: HttpClient){}

  getExistingUsers(){
    this.http.get(`${this.databaseUrl}`)
  }
}
