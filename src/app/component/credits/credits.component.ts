import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnMainPage(): void {
    this.router.navigate(['/home']);
  }
}
