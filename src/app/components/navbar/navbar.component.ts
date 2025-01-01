import { Component, inject } from '@angular/core';
import { TransService } from '../../core/trans.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DarkModeService } from '../../core/services/dark-mode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly _TransService = inject(TransService)
   readonly _TranslateService = inject(TranslateService)
  darkModeService:DarkModeService=inject(DarkModeService)

  toggleDarkMode():void{
    this.darkModeService.updateDarkMode()
  }
  Change(lang:string):void{
    this._TransService.chageLang(lang)
   }
}
