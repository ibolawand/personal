import { Component } from '@angular/core';
import {NavBar} from '../nav-bar/nav-bar';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavBar,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";
    constructor(http: HttpClient) {
    }
}
