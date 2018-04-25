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

  action(){
    document.getElementById("unfollowbutton").innerHTML = "Follow";
    document.getElementById("unfollowbutton").style.color = "green";
  }
}
