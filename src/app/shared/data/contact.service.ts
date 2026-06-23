import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://api.web3forms.com/submit';

  send(data: ContactFormData): Observable<Web3FormsResponse> {
    return this.http.post<Web3FormsResponse>(this.apiUrl, {
      access_key: environment.web3formsKey,
      ...data,
    });
  }
}
