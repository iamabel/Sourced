import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'manage-page',
  templateUrl: 'manage.html',
})
export class ManagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurtChatPage');
  }
  pushPageJohnny(){
    this.navCtrl.push('JohnnyProfilePage');
  }

  pushPageCoffee(){
    this.navCtrl.push('CoffeeProfilePage');
  }

  pushPageInn(){
    this.navCtrl.push('ColgateInnProfilePage');
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
