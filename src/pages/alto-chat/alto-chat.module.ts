import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltoChatPage } from './alto-chat';

@NgModule({
  declarations: [
    AltoChatPage,
  ],
  imports: [
    IonicPageModule.forChild(AltoChatPage),
  ],
})
export class AltoChatPageModule {}
