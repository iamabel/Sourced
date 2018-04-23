import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoffeeChatPage } from './coffee-chat';

@NgModule({
  declarations: [
    CoffeeChatPage,
  ],
  imports: [
    IonicPageModule.forChild(CoffeeChatPage),
  ],
})
export class CoffeeChatPageModule {}
