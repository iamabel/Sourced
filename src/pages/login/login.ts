import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../../pages/chat/chat';
import { MapPage } from '../../pages/explore/explore';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }

  navChat(){
    this.navCtrl.setRoot(ChatPage);
  }
  navMap(){
    this.navCtrl.setRoot(MapPage);
  }
}
