import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoffeeProfilePage } from './coffee-profile';

@NgModule({
  declarations: [
    CoffeeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CoffeeProfilePage),
  ],
})
export class CoffeeProfilePageModule {}
