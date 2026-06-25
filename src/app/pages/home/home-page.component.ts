import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  alt: string;
}

type BookHealthPlatform = 'web' | 'android';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ButtonModule, CardModule, ChipModule, DividerModule, GalleriaModule, TagModule, SectionHeadingComponent, NavbarComponent, FooterComponent, ContactFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  protected erpActiveIndex = 0;
  protected bookHealthPlatform: BookHealthPlatform = 'web';
  protected bookHealthActiveIndex = 0;

  protected readonly erpImages: GalleryImage[] = [
    { itemImageSrc: 'projects/erp/login_erp.png', thumbnailImageSrc: 'projects/erp/login_erp.png', alt: 'Pantalla de login del ERP' },
    { itemImageSrc: 'projects/erp/dashboard_erp.png', thumbnailImageSrc: 'projects/erp/dashboard_erp.png', alt: 'Dashboard principal del ERP' },
    { itemImageSrc: 'projects/erp/clientes_erp.png', thumbnailImageSrc: 'projects/erp/clientes_erp.png', alt: 'Modulo de clientes' },
    { itemImageSrc: 'projects/erp/productos_erp.png', thumbnailImageSrc: 'projects/erp/productos_erp.png', alt: 'Modulo de productos' },
    { itemImageSrc: 'projects/erp/ventas_erp.png', thumbnailImageSrc: 'projects/erp/ventas_erp.png', alt: 'Modulo de ventas' },
    { itemImageSrc: 'projects/erp/usuarios_erp.png', thumbnailImageSrc: 'projects/erp/usuarios_erp.png', alt: 'Modulo de usuarios' },
  ];

  protected readonly bookHealthWebImages: GalleryImage[] = [
    { itemImageSrc: 'projects/bookhealth/web/home_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/home_bookhealth_web.png', alt: 'Home de BookHealth web' },
    { itemImageSrc: 'projects/bookhealth/web/lista_profesionales_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/lista_profesionales_bookhealth_web.png', alt: 'Listado de profesionales en BookHealth web' },
    { itemImageSrc: 'projects/bookhealth/web/detalle_profesional_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/detalle_profesional_bookhealth_web.png', alt: 'Detalle de profesional en BookHealth web' },
    { itemImageSrc: 'projects/bookhealth/web/citas_cliente_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/citas_cliente_bookhealth_web.png', alt: 'Citas del cliente en BookHealth web' },
    { itemImageSrc: 'projects/bookhealth/web/dashboard_profesionales_bookhealth_web.png', thumbnailImageSrc: 'projects/bookhealth/web/dashboard_profesionales_bookhealth_web.png', alt: 'Dashboard de profesionales en BookHealth web' },
  ];

  protected readonly bookHealthAndroidImages: GalleryImage[] = [
    { itemImageSrc: 'projects/bookhealth/android/home_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/home_android.jpg', alt: 'Home de BookHealth Android' },
    { itemImageSrc: 'projects/bookhealth/android/lista_profesionales_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/lista_profesionales_android.jpg', alt: 'Listado de profesionales en BookHealth Android' },
    { itemImageSrc: 'projects/bookhealth/android/detalle_profesional_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/detalle_profesional_android.jpg', alt: 'Detalle de profesional en BookHealth Android' },
    { itemImageSrc: 'projects/bookhealth/android/mapa_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/mapa_android.jpg', alt: 'Mapa de profesionales en BookHealth Android' },
    { itemImageSrc: 'projects/bookhealth/android/mis_citas_android.jpg', thumbnailImageSrc: 'projects/bookhealth/android/mis_citas_android.jpg', alt: 'Mis citas en BookHealth Android' },
  ];

  protected readonly galleryResponsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 2 },
  ];

  protected readonly bookHealthWebStack = ['Angular', 'Bootstrap', 'Firebase', 'Leaflet', 'Google Maps'];
  protected readonly bookHealthAndroidStack = ['Java', 'Android Studio', 'Firebase', 'Realtime Database', 'Storage'];

  protected get currentBookHealthImages(): GalleryImage[] {
    return this.bookHealthPlatform === 'web' ? this.bookHealthWebImages : this.bookHealthAndroidImages;
  }

  protected get currentBookHealthStack(): string[] {
    return this.bookHealthPlatform === 'web' ? this.bookHealthWebStack : this.bookHealthAndroidStack;
  }

  protected get bookHealthHasImages(): boolean {
    return this.currentBookHealthImages.length > 0;
  }

  protected get currentBookHealthGalleryClass(): string {
    return this.bookHealthPlatform === 'web' ? 'bg-slate-900 px-4 py-4 sm:px-6' : 'bg-slate-950 px-4 py-6';
  }

  protected get currentBookHealthImageClass(): string {
    return this.bookHealthPlatform === 'web'
      ? 'block max-h-full w-full rounded-xl border border-white/10 bg-white object-contain shadow-app-lg'
      : 'block h-full max-h-[32rem] w-auto max-w-full rounded-[1.75rem] border border-white/10 bg-white object-contain shadow-app-lg';
  }

  protected get currentBookHealthThumbnailClass(): string {
    return this.bookHealthPlatform === 'web'
      ? 'block h-[4.25rem] w-full rounded-xl border border-app-border bg-slate-900 p-1 object-contain'
      : 'mx-auto block h-[5.5rem] w-auto rounded-[1.1rem] border border-app-border bg-slate-950 p-1 object-contain';
  }

  protected get currentBookHealthViewportClass(): string {
    return this.bookHealthPlatform === 'web' ? 'aspect-[16/9]' : 'aspect-[9/16]';
  }

  protected get currentBookHealthNumVisible(): number {
    return this.bookHealthPlatform === 'web' ? 5 : 4;
  }

  protected handleErpGalleryIndexChange(index: number): void {
    this.erpActiveIndex = index;
  }

  protected setBookHealthPlatform(platform: BookHealthPlatform): void {
    if (this.bookHealthPlatform === platform) {
      return;
    }

    this.bookHealthPlatform = platform;
    this.bookHealthActiveIndex = 0;
  }

  protected handleBookHealthGalleryIndexChange(index: number): void {
    this.bookHealthActiveIndex = index;
  }
}
