import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent} from "./head/head.component";
import { SideComponent} from "./side/side.component";
import { ContentComponent } from "./content/content.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponent, SideComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BugByte-FE';
}
