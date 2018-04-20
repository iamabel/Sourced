import { Component, ElementRef, ViewChild } from "@angular/core/";
import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import {BottomDrawer} from '../../components/bottom-drawer/bottom-drawer';

import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'explore-page',
  templateUrl: 'explore.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('drawer') drawer: BottomDrawer;
  map: GoogleMap;
  places: Array<{name: string, photo: any}> = [];

  constructor(public navCtrl: NavController, private _geoLoc: Geolocation) {
  }

  ngAfterViewInit() {
    this.initMap();

    this._geoLoc.getCurrentPosition().then( position => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 15
      });

      var service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch({
        location: {lat: position.coords.latitude, lng: position.coords.longitude},
        radius: 1000,
        type: ['restaurant']
      }, (results,status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }).catch(err => {
      console.log(err.toString());
    });
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element);
  }

  onSearch(ev: any) {
    let val = ev.target.value;
    console.log(val);
  }

  createMarker(place: any) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
    });
    this.places.push({name: place.name, photo: place.photos[0]});
  }

  // RANDOM, NAIVE DISTANCE COMPUTATION!
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
}
