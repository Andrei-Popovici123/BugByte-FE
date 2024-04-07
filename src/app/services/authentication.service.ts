import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthenticationService {
  authenticated$ = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  public authenticate(){
    this.authenticated$.next(true);
  }

  public deauthenticate(){
    this.authenticated$.next(false);
  }


}
