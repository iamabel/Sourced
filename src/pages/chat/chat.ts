import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'chat-page',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {

  }
  pushPageJohn(){
    this.navCtrl.push('JohnChatPage');
  }
  pushPageCoffee(){
    this.navCtrl.push('CoffeeChatPage');
  }
  pushPageStella(){
    this.navCtrl.push('StellaChatPage');
  }
  pushPageTim(){
    this.navCtrl.push('TimChatPage');
  }
  pushPageBurt(){
    this.navCtrl.push('BurtChatPage');
  }
  pushPageAlto(){
    this.navCtrl.push('AltoChatPage');
  }
  pushPageTen(){
    this.navCtrl.push('TenChatPage');
  }

}
