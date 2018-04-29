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
  pushPageJohnProf(){
    this.navCtrl.push('JohnnyProfilePage');
  }
  pushPageCoffee(){
    this.navCtrl.push('CoffeeChatPage');
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
  pushPageInn(){
    this.navCtrl.push('StellaChatPage');
  }
  pushPageInnProf() {
    this.navCtrl.push('ColgateInnProfilePage');
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
