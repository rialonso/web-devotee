import { Component, Input, OnInit } from '@angular/core';
import { IUserData } from 'src/app/state-management/user-data/user-data.state';
import { TransformAgeService } from '../../functions/transform-age/transform-age.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @Input() dataChat;
  @Input() userData;

  userId: number;
  constructor(
    private transformAgeService: TransformAgeService,
  ) { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
  }
  transformAge(birthdate) {
    return this.transformAgeService.transformAge(birthdate);
  }
}
