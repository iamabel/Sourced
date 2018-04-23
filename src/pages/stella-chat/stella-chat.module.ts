import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StellaChatPage } from './stella-chat';

@NgModule({
  declarations: [
    StellaChatPage,
  ],
  imports: [
    IonicPageModule.forChild(StellaChatPage),
  ],
})
export class StellaChatPageModule {}
