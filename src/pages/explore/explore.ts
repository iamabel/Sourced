import { Component, ElementRef, ViewChild } from "@angular/core/";
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import {BottomDrawer} from '../../components/bottom-drawer/bottom-drawer';
import {AutoDropdown} from '../../components/auto-dropdown/auto-dropdown';

import { NavController, ModalController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'explore-page',
  templateUrl: 'explore.html'
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('drawer') drawer: BottomDrawer;
  map: any;
  places: Array<{name: string, photo: any}> = [];
  service: any;
  city: any = {
    name: '',
    place: null,
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              private _geoLoc: Geolocation) {
  }

  ngAfterViewInit() {
    this.initMap();
    this._geoLoc.getCurrentPosition().then( position => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
        zoom: 15
      });

      this.service = new google.maps.places.PlacesService(this.map);
      this.service.nearbySearch({
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

  changed_city(place: any) {
    this.drawer.onSearched();
    this.places = [];
    this.service.getDetails(place, (loc, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.map.setCenter(loc.geometry.location);
        console.log(loc.geometry.location.lat)
        this.map.setZoom(15);

        this.service.nearbySearch({
          location: loc.geometry.location,
          radius: 1000,
          type: ['restaurant']
        }, (results,status2) => {
          if (status2 === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              console.log(results[i].name);
              this.createMarker(results[i]);
            }
          }
        });
      }
    });
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element);
  }

  createMarker(place: any) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc,
    });
    this.places.push({name: place.name, photo: "photo if I could get it"});
    var infowindow = new google.maps.InfoWindow();
    var request = { reference: place.reference };
    this.service.getDetails(request, function(details, status) {
      if (details) {
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent("<strong>" + details.name + "</strong> <br />" + details.formatted_address +
                                "<br /><strong>" + details.rating + "</strong> stars <br />" +
                                details.formatted_phone_number);
          infowindow.open(this.map, this);
        });
      }
    });

  }

  showModal() {
        // show modal
        let modal = this.modalCtrl.create(AutoDropdown);
        modal.onDidDismiss(data => {
            console.log('page > modal dismissed > data > ', data);
            if(data){
              this.city.name = data.name;
              // get details
              var request = {
                  placeId: data.place_id
              };
              this.changed_city(request);
            }
        })
        modal.present();
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
