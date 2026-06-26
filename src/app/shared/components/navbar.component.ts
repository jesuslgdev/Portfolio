import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LanguageService } from '../data/language.service';

interface LanguageOption {
  code: 'es' | 'en';
  shortLabel: 'ES' | 'EN';
  flagSrc: string;
  flagAlt: string;
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, TranslatePipe, ButtonModule, SelectButtonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly menuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly currentLanguage = this.languageService.currentLanguage;
  protected readonly menuAriaLabelKey = computed(() =>
    this.menuOpen()
      ? 'translations.navbar.close_navigation_aria'
      : 'translations.navbar.open_navigation_aria',
  );
  protected readonly languageOptions: LanguageOption[] = [
    { code: 'es', shortLabel: 'ES', flagSrc: 'assets/flags/es.svg', flagAlt: 'Español' },
    { code: 'en', shortLabel: 'EN', flagSrc: 'assets/flags/gb.svg', flagAlt: 'English' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 16);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onLanguageChange(language: 'es' | 'en'): void {
    void this.languageService.setLanguage(language);
  }
}
