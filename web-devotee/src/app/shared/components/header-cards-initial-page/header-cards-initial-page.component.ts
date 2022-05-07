import { Component, Input, OnInit } from '@angular/core';
import { IHeaderCardsInitialPage } from './model/header-cards.data';

@Component({
  selector: 'app-header-cards-initial-page',
  templateUrl: './header-cards-initial-page.component.html',
  styleUrls: ['./header-cards-initial-page.component.scss']
})
export class HeaderCardsInitialPageComponent implements OnInit {
  @Input() data: IHeaderCardsInitialPage;
  constructor() { }

  ngOnInit() {
    console.log(this.data);

  }
  navigateTo(): void {

  }
}
