import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PusherAuthService } from '../pusher/pusher-auth/pusher-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesConnectorService {
  constructor(
    private pusherAuthService: PusherAuthService,

  ) { }
  connectWebSocketChatMessages(userId) {
    const pusherConnect = this.pusherAuthService.pusherConfig()
    const pusherBind = pusherConnect.subscribe( `${environment.webSocket.channels.matches}${userId}`);
    pusherConnect.allChannels().forEach(channel => console.log(channel.name));
    return pusherBind;
  }
}
