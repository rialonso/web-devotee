import { Injectable } from '@angular/core';
import Pusher from 'pusher-js';
import { environment } from 'src/environments/environment';
import { PusherAuthService } from '../pusher/pusher-auth/pusher-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatConnectorService {
  constructor(
    private pusherAuthService: PusherAuthService,

  ) { }
  connectWebSocketChatMessages(id) {
    const pusherConnect = this.pusherAuthService.pusherConfig()
    const pusherBind = pusherConnect.subscribe( `${environment.webSocket.channels.chat}${id}`);
    pusherConnect.allChannels().forEach(channel => console.log(channel.name));
    return pusherBind;
  }
}
