import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @Input() dataChat;
  userId: number;
  constructor() { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
  }

}
