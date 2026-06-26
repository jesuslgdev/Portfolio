import { Injectable, signal } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';
import {
  defaultLanguage,
  persistLanguage,
  SupportedLanguage,
} from '../../lang/translation.config';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLanguage = signal<SupportedLanguage>(defaultLanguage);

  constructor(private readonly translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const nextLanguage = this.normalizeLanguage(event.lang);
      this.currentLanguage.set(nextLanguage);
      persistLanguage(nextLanguage);

      if (typeof document !== 'undefined') {
        document.documentElement.lang = nextLanguage;
      }
    });
  }

  async setLanguage(language: SupportedLanguage): Promise<void> {
    await firstValueFrom(this.translate.use(language));
  }

  async toggleLanguage(checked: boolean): Promise<void> {
    await this.setLanguage(checked ? 'en' : 'es');
  }

  private normalizeLanguage(language: string | undefined): SupportedLanguage {
    return language === 'en' ? 'en' : 'es';
  }
}
