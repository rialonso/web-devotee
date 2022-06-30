import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';
import { GetChatService } from 'src/app/core/services/get-chat/get-chat.service';
import { GetMatchesService } from 'src/app/core/services/get-matches/get-matches.service';
import { TranslateService } from 'src/app/core/services/translate/translate.service';
import { TransformAgeService } from 'src/app/shared/functions/transform-age/transform-age.service';
import { ModelGetMatchesResponse } from 'src/app/shared/model/response/get-matches/get-matches.response';
import { IAppState } from 'src/app/state-management/app.model';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { environment } from 'src/environments/environment';
import { EnumParamsChat } from './enum/params-chat.enum';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  dataTexts;
  dataMatches: ModelGetMatchesResponse.RootObject | any = {
    data: [
      {loading: true},
      {loading: true},
      {loading: true},
      {loading: true}
    ]
  };
  dataChat: any;

  urlImages = environment.urlImages;

  showChatMobile = false;
  showChatLoadingAll = false;

  matchId: number;
  userId: number;

  intervalChat;
  intervalMatches;

  userMatchData: IUserData.RootObject;
  constructor(
    protected state: State<IAppState>,
    private translateService: TranslateService,
    private getMatchesService: GetMatchesService,
    private getChatService: GetChatService,
    private transformAgeService: TransformAgeService,
  ) { }

  ngOnInit(): void {
    this.dataTexts = this.translateService?.textTranslate;
    this.getMacthes();

    this.intervalMatches = setInterval(() => {
      this.getMacthes();
    }, 10000);
  }
  private async getMacthes() {
    const dataMatches = await this.getMatchesService.get().toPromise();
    this.dataMatches = dataMatches;
    this.userId = this.state.getValue().userData.data?.id;
  }
  private async getChat(matchId: number, pageNumber?: number) {
    let params;
    if (matchId && pageNumber) {
      params = {
        [EnumParamsChat.MATCH_ID]: matchId,
        [EnumParamsChat.PAGE_NUMBER]: pageNumber
      };
    }
    params = {
      [EnumParamsChat.MATCH_ID]: matchId,
    };

    const dataChatOpened = await this.getChatService.get(false, params).toPromise();
    if (!this.dataChat || (this.dataChat?.data[0]?.id !== dataChatOpened?.data[0]?.id)) {
      this.dataChat = dataChatOpened;
      this.showChatLoadingAll = false;
    }

  }
  showChat(match) {
    clearInterval(this.intervalChat);
    this.showChatLoadingAll = true;
    this.showChatMobile = true;
    this.dataChat = false;
    this.matchId = match.match_id;
    this.userMatchData = match.target_user;
    // this.intervalChat = setInterval(() => {
      this.getChat(this.matchId);
    // }, 1000);
  }
  clearInterval(event) {
    if (event) {
      clearInterval(this.intervalChat);
    }
  }
  closeChatMobile(event) {
    if (event) {
      clearInterval(this.intervalChat);
      this.showChatMobile = !event;
    }
  }
}
