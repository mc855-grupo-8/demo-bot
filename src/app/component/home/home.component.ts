import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  startChatbot(): void {
    this.router.navigate(['/chatbot']);
  }

  credits(): void {
    this.router.navigate(['/project-credits']);
  }

  sendFeedback(): void {
    this.document.location.href = 'https://forms.gle/69b6t9anNfGVEjLs9';
  }
}
