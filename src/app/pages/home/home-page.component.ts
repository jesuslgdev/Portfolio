import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { GalleriaModule } from 'primeng/galleria';
import { TagModule } from 'primeng/tag';
import { FooterComponent } from '../../shared/components/footer.component';
import { NavbarComponent } from '../../shared/components/navbar.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading.component';
import { ContactFormComponent } from './contact-form.component';

interface GalleryImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  altKey: string;
}

type BookHealthPlatform = 'web' | 'android';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    TranslatePipe,
    ButtonModule,
    CardModule,
    ChipModule,
    DividerModule,
    GalleriaModule,
    TagModule,
    SectionHeadingComponent,
    NavbarComponent,
    FooterComponent,
    ContactFormComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  protected readonly erpActiveIndex = signal(0);
  protected readonly erpFullscreenVisible = signal(false);
  protected readonly bookHealthPlatform = signal<BookHealthPlatform>('web');
  protected readonly bookHealthActiveIndex = signal(0);
  protected readonly bookHealthFullscreenVisible = signal(false);

  protected readonly erpImages: GalleryImage[] = [
    { itemImageSrc: 'projects/erp/login_erp.png', thumbnailImageSrc: 'projects/erp/login_erp.png', altKey: 'translations.projects.erp.gallery.login' },
    { itemImageSrc: 'projects/erp/dashboard_erp.png', thumbnailImageSrc: 'projects/erp/dashboard_erp.png', altKey: 'translations.projects.erp.gallery.dashboard' },
    { itemImageSrc: 'projects/erp/clientes_erp.png', thumbnailImageSrc: 'projects/erp/clientes_erp.png', altKey: 'translations.projects.erp.gallery.clients' },
    { itemImageSrc: 'projects/erp/productos_erp.png', thumbnailImageSrc: 'projects/erp/productos_erp.png', altKey: 'translations.projects.erp.gallery.products' },
    { itemImageSrc: 'projects/erp/ventas_erp.png', thumbnailImageSrc: 'projects/erp/ventas_erp.png', altKey: 'translations.projects.erp.gallery.sales' },
    { itemImageSrc: 'projects/erp/usuarios_erp.png', thumbnailImageSrc: 'projects/erp/usuarios_erp.png', altKey: 'translations.projects.erp.gallery.users' },
  ];

  protected readonly bookHealthWebImages: GalleryImage[] = [
    { itemImageSrc: 'projects/bookhealth/web/home_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/home_bookhealth_web.png', altKey: 'translations.projects.bookhealth.gallery.web_home' },
    { itemImageSrc: 'projects/bookhealth/web/lista_profesionales_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/lista_profesionales_bookhealth_web.png', altKey: 'translations.projects.bookhealth.gallery.web_professionals' },
    { itemImageSrc: 'projects/bookhealth/web/detalle_profesional_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/detalle_profesional_bookhealth_web.png', altKey: 'translations.projects.bookhealth.gallery.web_detail' },
    { itemImageSrc: 'projects/bookhealth/web/citas_cliente_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/citas_cliente_bookhealth_web.png', altKey: 'translations.projects.bookhealth.gallery.web_appointments' },
    { itemImageSrc: 'projects/bookhealth/web/dashboard_profesionales_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/dashboard_profesionales_bookhealth_web.png', altKey: 'translations.projects.bookhealth.gallery.web_dashboard' },
  ];

  protected readonly bookHealthAndroidImages: GalleryImage[] = [
    { itemImageSrc: 'projects/bookhealth/android/home_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/home_android.jpg', altKey: 'translations.projects.bookhealth.gallery.android_home' },
    { itemImageSrc: 'projects/bookhealth/android/lista_profesionales_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/lista_profesionales_android.jpg', altKey: 'translations.projects.bookhealth.gallery.android_professionals' },
    { itemImageSrc: 'projects/bookhealth/android/detalle_profesional_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/detalle_profesional_android.jpg', altKey: 'translations.projects.bookhealth.gallery.android_detail' },
    { itemImageSrc: 'projects/bookhealth/android/mapa_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/mapa_android.jpg', altKey: 'translations.projects.bookhealth.gallery.android_map' },
    { itemImageSrc: 'projects/bookhealth/android/mis_citas_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/mis_citas_android.jpg', altKey: 'translations.projects.bookhealth.gallery.android_appointments' },
  ];

  protected readonly galleryResponsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 2 },
  ];

  protected readonly bookHealthWebStack = ['Angular', 'Bootstrap', 'Firebase', 'Leaflet', 'Google Maps'];
  protected readonly bookHealthAndroidStack = ['Java', 'Android Studio', 'Firebase', 'Realtime Database', 'Storage'];
  protected readonly softSkillKeys = [
    'translations.education.soft_skills.teamwork',
    'translations.education.soft_skills.resilience',
    'translations.education.soft_skills.fast_learning',
    'translations.education.soft_skills.organization',
    'translations.education.soft_skills.responsibility',
    'translations.education.soft_skills.communication',
    'translations.education.soft_skills.adaptability',
    'translations.education.soft_skills.work_under_pressure',
  ];

  protected readonly currentBookHealthImages = computed(() =>
    this.bookHealthPlatform() === 'web' ? this.bookHealthWebImages : this.bookHealthAndroidImages,
  );

  protected readonly currentBookHealthStack = computed(() =>
    this.bookHealthPlatform() === 'web' ? this.bookHealthWebStack : this.bookHealthAndroidStack,
  );

  protected readonly bookHealthHasImages = computed(() => this.currentBookHealthImages().length > 0);

  protected readonly currentBookHealthGalleryClass = computed(() =>
    this.bookHealthPlatform() === 'web' ? 'bg-slate-900 px-4 py-4 sm:px-6' : 'bg-slate-950 px-4 py-6',
  );

  protected readonly currentBookHealthImageClass = computed(() =>
    this.bookHealthPlatform() === 'web'
      ? 'block max-h-full w-full rounded-xl border border-white/10 bg-white object-contain shadow-app-lg'
      : 'block h-full max-h-[32rem] w-auto max-w-full rounded-[1.75rem] border border-white/10 bg-white object-contain shadow-app-lg',
  );

  protected readonly currentBookHealthThumbnailClass = computed(() =>
    this.bookHealthPlatform() === 'web'
      ? 'block h-[4.25rem] w-full rounded-xl border border-app-border bg-slate-900 p-1 object-contain'
      : 'mx-auto block h-[5.5rem] w-auto rounded-[1.1rem] border border-app-border bg-slate-950 p-1 object-contain',
  );

  protected readonly currentBookHealthViewportClass = computed(() =>
    this.bookHealthPlatform() === 'web'
      ? 'aspect-[16/9]'
      : 'mx-auto aspect-[9/16] w-full max-w-[20rem]',
  );

  protected readonly currentBookHealthNumVisible = computed(() =>
    this.bookHealthPlatform() === 'web' ? 5 : 4,
  );

  protected readonly currentBookHealthPlatformStatusKey = computed(() =>
    this.bookHealthPlatform() === 'web'
      ? 'translations.projects.bookhealth.web_active'
      : 'translations.projects.bookhealth.android_active',
  );

  protected handleErpGalleryIndexChange(index: number): void {
    this.erpActiveIndex.set(index);
  }

  protected openErpFullscreen(): void {
    this.erpFullscreenVisible.set(true);
  }

  protected setBookHealthPlatform(platform: BookHealthPlatform): void {
    if (this.bookHealthPlatform() === platform) {
      return;
    }

    this.bookHealthPlatform.set(platform);
    this.bookHealthActiveIndex.set(0);
    this.bookHealthFullscreenVisible.set(false);
  }

  protected handleBookHealthGalleryIndexChange(index: number): void {
    this.bookHealthActiveIndex.set(index);
  }

  protected openBookHealthFullscreen(): void {
    if (!this.bookHealthHasImages()) {
      return;
    }

    this.bookHealthFullscreenVisible.set(true);
  }
}
