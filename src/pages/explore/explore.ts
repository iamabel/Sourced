import { Component, ElementRef, ViewChild } from "@angular/core/";
import { CameraPosition, GoogleMaps, GoogleMap, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';


import { NavController } from 'ionic-angular';

@Component({
  selector: 'explore-page',
  templateUrl: 'explore.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController, private _geoLoc: Geolocation) {
  }

  ngAfterViewInit() {
    this.initMap();

    this._geoLoc.getCurrentPosition().then( position => {
      console.log(position.coords.longitude + ' ' + position.coords.latitude);
      var loc = new LatLng(position.coords.latitude, position.coords.longitude);

      this.moveCamera(loc)
    }).catch(err => {
      console.log(err);
    });
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element);
    console.log("~Map it up~");
  }

  onSearch(ev: any) {
    let val = ev.target.value;
    console.log(val);
  }

  moveCamera(loc: LatLng){
    let options: CameraPosition = {
      target: loc,
      zoom: 15,
      tilt: 10
    }
    this.map.moveCamera(options);
  }
}
