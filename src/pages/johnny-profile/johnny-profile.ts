import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JohnnyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-johnny-profile',
  templateUrl: 'johnny-profile.html',
})
export class JohnnyProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JohnnyProfilePage');
  }

  pushPageJohn(){
    this.navCtrl.push('JohnChatPage');
  }

  action(number){
    if(document.getElementById("unfollowbutton"+number).innerHTML == "Follow"){
      document.getElementById("unfollowbutton"+number).innerHTML = "Unfollow";
      document.getElementById("unfollowbutton"+number).style.backgroundColor = "#6e6969";
    }
    else{
      document.getElementById("unfollowbutton"+number).innerHTML = "Follow";
      document.getElementById("unfollowbutton"+number).style.backgroundColor = "#6aa365";
    }
  }

}
