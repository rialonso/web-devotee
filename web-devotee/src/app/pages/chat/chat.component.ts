import { Component, OnInit } from '@angular/core';
import { GetMatchesService } from 'src/app/core/services/get-matches/get-matches.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  dataTexts;
  dataMatches: ModelGetMatchesResponse.RootObject | any;
  constructor(
    private translateService: TranslateService,
    private getMatchesService: GetMatchesService,
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.getMacthes();
  }
  private async getMacthes() {
    this.dataMatches = {
      data: [
        {loading: true},{loading: true},{loading: true},{loading: true}
      ]
    };

    console.log(this.dataMatches);

    const dataMatches = await this.getMatchesService.get().toPromise();
    this.dataMatches = dataMatches;
  }
}
