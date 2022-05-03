import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ChatComponentComponent } from './component/chat-component/chat-component.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFu6jeght-0DKzShzlvoLhlDNyofuS7_s",
  authDomain: "fir-bot-870ad.firebaseapp.com",
  projectId: "fir-bot-870ad",
  storageBucket: "fir-bot-870ad.appspot.com",
  messagingSenderId: "735965424491",
  appId: "1:735965424491:web:80e19c9135faeab2c5ba2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    ChatComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
