import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransService {
  private readonly _TranslateService = inject(TranslateService)
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  langAr:BehaviorSubject<boolean>=new BehaviorSubject(false)

  constructor() {

  }
  chageLang(lang: string): void {
    this._TranslateService.use(lang)
  }
}
