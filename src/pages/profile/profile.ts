import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ManagePage } from '../../pages/manage/manage';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }
  // navManage(){
  //   this.navCtrl.setRoot(ManagePage);
  // }
  pushPageManage(){
    this.navCtrl.push('ManagePage');
  }
}
