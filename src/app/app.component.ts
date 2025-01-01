import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChallengeComponent } from "./components/challenge/challenge.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DarkModeService } from './core/services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChallengeComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Misk-Task1';

  darkModeService:DarkModeService=inject(DarkModeService)
}
