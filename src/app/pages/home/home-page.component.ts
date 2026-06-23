import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { FooterComponent } from '../../shared/components/footer.component';
import { NavbarComponent } from '../../shared/components/navbar.component';
import { SectionHeadingComponent } from '../../shared/components/section-heading.component';
import { ContactFormComponent } from './contact-form.component';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ButtonModule, CardModule, ChipModule, DividerModule, TagModule, SectionHeadingComponent, NavbarComponent, FooterComponent, ContactFormComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
