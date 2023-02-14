import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { HostListener } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {

  http: HttpClient | null;
  agreement: boolean;
  clicked: boolean;
  filled: boolean;
  processing: boolean;
  sent: boolean;
  error: boolean;
  errorMessage: string;

  contactForm = {
    name: '',
    email: '',
    agreement: false,
    subject: '',
    message: ''
  }

  constructor( 
    _http: HttpClient
  ) {
    this.http = _http;
    this.agreement = false;
    this.clicked = false;
    this.filled = false;
    this.processing = false;
    this.sent = false;
    this.error = false;
    this.errorMessage = '';
  }
  contactFormRef: NgForm | undefined

  sendMessage(form: NgForm) {
    this.agreement = form.value.agreement;
    this.filled = (form.value.name.length >= 5); 
    this.filled &&= (form.value.email.length >= 5); 
    this.filled &&= (form.value.subject.length >= 5); 
    this.filled &&= (form.value.message.length >= 5); 
    this.clicked = true;
    if (!this.agreement || !this.filled) {
      return;
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = "https://teczka.sarata.pl/php/contact-form.php";
    let params: HttpParams = new HttpParams()
      .appendAll(form.value);
      this.processing = true;
      var dataString = 'name=' + form.value.name;
      this.http?.post<NgForm>( url, 
        form.value,
        {
          headers: headers,
          params: params
        }
        )
        .subscribe({
          next: (project) => {
            this.sent = true; 
            this.processing = false;
          },
          error: (error) => {
            this.error = true;
            this.errorMessage = error.statusText;
            this.processing = false;
          }
        });
    }

  resetForm() {
    this.contactFormRef?.reset(
      this.contactForm
    )
  }

}
