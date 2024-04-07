import {Component, OnInit} from '@angular/core';
import { AuthenticationService} from "../../services/authentication.service";
import { HeadComponent } from "../head/head.component";
import {RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeadComponent, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.min(3)]),
      password: new FormControl(null, [Validators.required, Validators.min(3)]),
    })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
  }

}
