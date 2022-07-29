import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ads-cards',
  templateUrl: './ads-cards.component.html',
  styleUrls: ['./ads-cards.component.scss']
})
export class AdsCardsComponent implements AfterViewInit {
  constructor() {}
  ngAfterViewInit() {
    setTimeout(() => {
    try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error(e);
      }
    }, 2000);
  }
}
