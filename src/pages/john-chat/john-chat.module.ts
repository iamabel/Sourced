import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JohnChatPage } from './john-chat';

@NgModule({
  declarations: [
    JohnChatPage,
  ],
  imports: [
    IonicPageModule.forChild(JohnChatPage),
  ],
})
export class JohnChatPageModule {}
