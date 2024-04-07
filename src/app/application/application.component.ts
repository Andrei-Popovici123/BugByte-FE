import { Component, Input } from '@angular/core';
import { Application } from "../application";

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss'
})
export class ApplicationComponent {

  @Input() application!: Application;


}


