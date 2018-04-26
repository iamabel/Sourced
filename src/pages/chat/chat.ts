import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';



@Component({
  selector: 'chat-page',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

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


  onSearch(){
    let alert = this.alertCtrl.create({
      title: 'Function not available',
      subTitle: 'Please do not use this',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
