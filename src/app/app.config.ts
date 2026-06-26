import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideMissingTranslationHandler,
  provideTranslateService,
  TranslateService,
} from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { providePrimeNG } from 'primeng/config';
import { firstValueFrom } from 'rxjs';
import {
  defaultLanguage,
  MissingTranslationHandlerImpl,
  resolveInitialLanguage,
  supportedLanguages,
} from './lang/translation.config';
import { PortfolioPreset } from '../theme/portfolio.preset';

function initializeTranslations(translate: TranslateService): () => Promise<void> {
  return async () => {
    const initialLanguage = resolveInitialLanguage();
    translate.addLangs([...supportedLanguages]);

    try {
      await firstValueFrom(translate.use(initialLanguage));
    } catch (error) {
      console.error('[Translation] Failed to load language', initialLanguage, error);
      await firstValueFrom(translate.use(defaultLanguage));
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslations,
      deps: [TranslateService],
      multi: true,
    },
    ...provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/strings-',
        suffix: '.json',
      }),
      fallbackLang: defaultLanguage,
      missingTranslationHandler: provideMissingTranslationHandler(MissingTranslationHandlerImpl),
    }),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: PortfolioPreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
