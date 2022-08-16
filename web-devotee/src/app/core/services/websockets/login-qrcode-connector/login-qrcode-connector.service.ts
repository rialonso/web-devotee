import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// import { pusher } from '../pusher/pusher-auth/pusher-auth.service';
import Pusher from 'pusher-js';
import { PusherAuthService } from '../pusher/pusher-auth/pusher-auth.service';
import { StateManagementFuncService } from 'src/app/shared/functions/state-management/state-management-func.service';
import { RouteService } from 'src/app/shared/functions/routes/route.service';
import { EnumRoutesApplication } from 'src/app/shared/enum/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginQrcodeConnectorService {

  constructor(
    private pusherAuthService: PusherAuthService,
  ) { }
  connectWebSOcket(hash: string) {
      const pusherConnect = this.pusherAuthService.pusherConfig()
      const pusherBind = pusherConnect.subscribe( `${environment.webSocket.channels.loginQrCode}${hash}`);
      pusherConnect.allChannels().forEach(channel => console.log(channel.name));
      return pusherBind;
  }
}
