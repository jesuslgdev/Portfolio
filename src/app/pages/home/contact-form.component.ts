import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ContactService } from '../../shared/data/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule, TranslatePipe, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

  readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  readonly errorMessage = signal('');
  readonly errorMessageKey = signal('');

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.errorMessage.set('');
    this.errorMessageKey.set('');

    this.contactService.send(this.form.getRawValue()).subscribe({
      next: (res) => {
        if (res.success) {
          this.status.set('success');
          this.form.reset();
        } else {
          this.status.set('error');
          this.errorMessage.set(res.message || '');
          this.errorMessageKey.set(
            res.message ? '' : 'translations.contact.form.error.service_rejected',
          );
        }
      },
      error: (err: HttpErrorResponse) => {
        this.status.set('error');
        this.errorMessage.set('');
        this.errorMessageKey.set(
          err.status === 0
            ? 'translations.contact.form.error.network'
            : 'translations.contact.form.error.generic',
        );
      },
    });
  }

  resetForm(): void {
    this.status.set('idle');
    this.errorMessage.set('');
    this.errorMessageKey.set('');
    this.form.reset();
  }

  resetErrorState(): void {
    this.status.set('idle');
  }
}
