import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BurtChatPage } from './burt-chat';

@NgModule({
  declarations: [
    BurtChatPage,
  ],
  imports: [
    IonicPageModule.forChild(BurtChatPage),
  ],
})
export class BurtChatPageModule {}
