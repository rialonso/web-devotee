import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHeaderCardsInitialPage } from './model/header-cards.data';

@Component({
  selector: 'app-header-cards-initial-page',
  templateUrl: './header-cards-initial-page.component.html',
  styleUrls: ['./header-cards-initial-page.component.scss']
})
export class HeaderCardsInitialPageComponent implements OnInit {
  @Input() data: IHeaderCardsInitialPage;
  @Output() headerBtnClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.data);

  }
  emitClick(): void {
    this.headerBtnClick.emit(true);
  }
}
