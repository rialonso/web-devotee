import { IHeaderCardsInitialPage, textHeader, titleHeader } from 'src/app/shared/components/header-cards-initial-page/model/header-cards.data';

export class MHeaderCardsInitialPage implements IHeaderCardsInitialPage{
  title: titleHeader;
  text?: textHeader;
  constructor(title: titleHeader, text?: textHeader) {
    this.title = title;
    this.text = text;
  }
}
