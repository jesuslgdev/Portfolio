import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ContactService } from '../../shared/data/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, TextareaModule, ButtonModule],
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

  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  errorMessage = '';

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'sending';

    this.contactService.send(this.form.getRawValue()).subscribe({
      next: (res) => {
        if (res.success) {
          this.status = 'success';
          this.form.reset();
        } else {
          this.status = 'error';
          this.errorMessage = res.message || 'El servicio rechazó el envío. Inténtalo de nuevo.';
        }
      },
      error: (err: HttpErrorResponse) => {
        this.status = 'error';
        this.errorMessage = err.status === 0
          ? 'No se pudo conectar con el servidor. Comprueba tu conexión.'
          : 'Error al enviar el mensaje. Inténtalo de nuevo más tarde.';
      },
    });
  }

  resetForm(): void {
    this.status = 'idle';
    this.errorMessage = '';
    this.form.reset();
  }
}
