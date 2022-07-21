import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class PusherAuthService {

  constructor() { }
  pusherConfig() {
    const webSocket = environment.webSocket;
    const pusherConnect = new Pusher('1hfEn3KQ0G', {
      cluster: webSocket.cluster,
      disableStats: true,
      forceTLS: false, // true quando for prod
      wsHost: webSocket.url,
      wssPort: webSocket.port,
      wsPort: webSocket.port,
    })
    return pusherConnect;
  }
}
