import { takeUntil } from 'rxjs/operators';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { SendMessageService } from 'src/app/core/services/send-message/send-message.service';
import { EnumParamsChat } from 'src/app/pages/chat/enum/params-chat.enum';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { TransformAgeService } from '../../functions/transform-age/transform-age.service';
import { environment } from 'src/environments/environment';
import { DialogsService } from '../../functions/dialogs/dialogs.service';
import { UserProfileService } from 'src/app/core/services/user-profile/user-profile.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @ViewChild('chat') private myScrollContainer: ElementRef;

  @Output() closeChatMobile = new EventEmitter();
  @Output() openingProfile = new EventEmitter();

  @Input() dataChat;
  @Input() userData: IUserData.IData;
  @Input() matchId;
  @Input() showChatSkeleton;
  @Input() showChatLoadingAll;

  loading = false;
  userId: number;

  urlImages = environment.urlImages;


  formGroup: FormGroup;

  destroy$ = new ReplaySubject();
  constructor(
    private transformAgeService: TransformAgeService,
    private sendMessagesService: SendMessageService,
    private formBuilder: FormBuilder,
    private dialogsService: DialogsService,
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
    this.initForm();

  }
  initForm () {
    this.formGroup = this.formBuilder.group({
      match_id: [
        '',
        [

        ]
      ],
      content: [
        '',
        [

        ]
      ],
      type: [
        'text',
        [

        ]
      ]
    })
  }
  transformAge(birthdate) {
    return this.transformAgeService.transformAge(birthdate);
  }
  async sendMessage() {
    const params = {
      [EnumParamsChat.MATCH_ID]: this.matchId
    }
    this.formGroup.get('match_id').setValue(this.matchId);
    this.sendMessagesService
      .post(this.formGroup.value, false, params)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        responseSendMessage => {
          this.formGroup.get('content').setValue('');

        },
        erroSendMessage => {
        }
      );

  }
  closeProfile() {
    this.closeChatMobile.emit(true);
  }
  async openProfile() {
    this.openingProfile.emit(true);
    this.loading = true;
    const userData = await this.userProfileService.get(this.userData.id).toPromise();
    this.loading = false;
    this.dialogsService.openProfile(userData.data);
  }
}
