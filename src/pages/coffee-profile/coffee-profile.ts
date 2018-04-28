import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoffeeProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coffee-profile',
  templateUrl: 'coffee-profile.html',
})
export class CoffeeProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeeProfilePage');
  }

  pushPageCoffee(){
    this.navCtrl.push('CoffeeChatPage');
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
