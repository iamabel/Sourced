import { Component, ElementRef, ViewChild } from "@angular/core/";
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'explore-page',
  templateUrl: 'explore.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element);
    console.log("Map it up~");
  }

  onSearch(ev: any) {
    let val = ev.target.value;
    console.log(val);
  }
}
