import { Injectable } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

export const defaultLanguage = 'es';
export const supportedLanguages = ['es', 'en'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const LANGUAGE_STORAGE_KEY = 'portfolio.language';

@Injectable()
export class MissingTranslationHandlerImpl implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return `translation-not-found[${params.key}]`;
  }
}

export const translateHttpLoaderConfig = {
  prefix: 'assets/i18n/strings-',
  suffix: '.json',
} as const;

export function resolveInitialLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return defaultLanguage;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (storedLanguage === 'es' || storedLanguage === 'en') {
    return storedLanguage;
  }

  const browserCandidates: string[] = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter((lang): lang is string => Boolean(lang));

  for (const candidate of browserCandidates) {
    const normalized = candidate.toLowerCase();
    if (normalized.startsWith('en')) {
      return 'en';
    }
    if (normalized.startsWith('es')) {
      return 'es';
    }
  }

  return defaultLanguage;
}

export function persistLanguage(language: SupportedLanguage): void {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}
