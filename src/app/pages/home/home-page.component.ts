import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ButtonModule, CardModule, ChipModule, DividerModule, GalleriaModule, TagModule, SectionHeadingComponent, NavbarComponent, FooterComponent, ContactFormComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  protected erpActiveIndex = 0;

  protected readonly erpImages: GalleryImage[] = [
    { itemImageSrc: '/projects/erp/login_erp.png', thumbnailImageSrc: '/projects/erp/login_erp.png', alt: 'Pantalla de login del ERP' },
    { itemImageSrc: '/projects/erp/dashboard_erp.png', thumbnailImageSrc: '/projects/erp/dashboard_erp.png', alt: 'Dashboard principal del ERP' },
    { itemImageSrc: '/projects/erp/clientes_erp.png', thumbnailImageSrc: '/projects/erp/clientes_erp.png', alt: 'Modulo de clientes' },
    { itemImageSrc: '/projects/erp/productos_erp.png', thumbnailImageSrc: '/projects/erp/productos_erp.png', alt: 'Modulo de productos' },
    { itemImageSrc: '/projects/erp/ventas_erp.png', thumbnailImageSrc: '/projects/erp/ventas_erp.png', alt: 'Modulo de ventas' },
    { itemImageSrc: '/projects/erp/usuarios_erp.png', thumbnailImageSrc: '/projects/erp/usuarios_erp.png', alt: 'Modulo de usuarios' },
  ];

  protected readonly galleryResponsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 2 },
  ];

  protected handleErpGalleryIndexChange(index: number): void {
    this.erpActiveIndex = index;
    this.changeDetectorRef.markForCheck();
  }
}
