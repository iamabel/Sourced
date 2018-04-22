import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../../pages/chat/chat';
import { MapPage } from '../../pages/explore/explore';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  chatPage = ChatPage;
  mapPage = MapPage;
  constructor(public navCtrl: NavController) {

  }

}
