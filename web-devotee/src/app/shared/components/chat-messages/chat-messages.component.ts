import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SendMessageService } from 'src/app/core/services/send-message/send-message.service';
import { EnumParamsChat } from 'src/app/pages/chat/enum/params-chat.enum';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { TransformAgeService } from '../../functions/transform-age/transform-age.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @ViewChild('chat') private myScrollContainer: ElementRef;

  @Output() closeChatMobile = new EventEmitter();
  @Input() dataChat;
  @Input() userData;
  @Input() matchId;

  userId: number;

  formGroup: FormGroup;
  constructor(
    private transformAgeService: TransformAgeService,
    private sendMessagesService: SendMessageService,
    private formBuilder: FormBuilder,
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
    this.formGroup.get('match_id').setValue(this.matchId)
    const menssageSend = await this.sendMessagesService.post(this.formGroup.value, false, params).toPromise();
  }
  closeProfile() {
    this.closeChatMobile.emit(true);
  }
}
