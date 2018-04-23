import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenChatPage } from './ten-chat';

@NgModule({
  declarations: [
    TenChatPage,
  ],
  imports: [
    IonicPageModule.forChild(TenChatPage),
  ],
})
export class TenChatPageModule {}
