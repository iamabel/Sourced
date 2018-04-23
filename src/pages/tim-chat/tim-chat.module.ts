import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimChatPage } from './tim-chat';

@NgModule({
  declarations: [
    TimChatPage,
  ],
  imports: [
    IonicPageModule.forChild(TimChatPage),
  ],
})
export class TimChatPageModule {}
