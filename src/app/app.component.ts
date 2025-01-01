import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChallengeComponent } from "./components/challenge/challenge.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DarkModeService } from './core/services/dark-mode.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Misk-Task1';

  darkModeService:DarkModeService=inject(DarkModeService)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      if (localStorage.getItem("lang")!==null) {
        
      }else{
        localStorage.setItem("lang", 'en')
      }
    }
  }

}
