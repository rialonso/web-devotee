import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-rounting.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
  ]
})
export class ChatModule { }
