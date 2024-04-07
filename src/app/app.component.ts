import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent} from "./components/head/head.component";
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BugByte-FE';



}
