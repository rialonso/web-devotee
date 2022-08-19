import { Component, Input, OnInit } from '@angular/core';
import { ModelCardImgTitleText } from '../../model/card-img-title-text/card-img-title-text.model';

@Component({
  selector: 'app-card-img-title-text',
  templateUrl: './card-img-title-text.component.html',
  styleUrls: ['./card-img-title-text.component.scss']
})
export class CardImgTitleTextComponent implements OnInit {
  @Input() data: ModelCardImgTitleText;
  constructor() { }

  ngOnInit() {
  }

}
