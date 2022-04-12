import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  openMobileSignIn = true;
  constructor() { }

  ngOnInit(): void {
  }
  clickopenMobileSignIn(): void {
    this.openMobileSignIn = !this.openMobileSignIn;
  }

}
