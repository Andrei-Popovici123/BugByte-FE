import { Component} from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthenticationService} from "../../services/authentication.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss',
  providers: [AuthenticationService]
})
export class HeadComponent {

  authenticated$ = new BehaviorSubject<boolean>(false);


  constructor(public authenticationService: AuthenticationService) {
  }


}
