import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JohnnyProfilePage } from './johnny-profile';

@NgModule({
  declarations: [
    JohnnyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(JohnnyProfilePage),
  ],
})
export class JohnnyProfilePageModule {}
