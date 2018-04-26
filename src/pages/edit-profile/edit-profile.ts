import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  selectedItem: any;
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedItem = navParams.get('item');
    this.items = [];
    this.items.push({
      title: 'Edit Name'
    });

    this.items.push({
      title: 'Edit Bio'
    });

    this.items.push({
      title: 'Edit Location'
    });

    this.items.push({
      title: 'Edit Availability'
    });

    this.items.push({
      title: 'Manage Photos'
    });

  }

  itemTapped(event, item) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
