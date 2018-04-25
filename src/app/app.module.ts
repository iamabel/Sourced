import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/explore/explore';
//import { ManagePage } from '../pages/manage/manage';

import { BottomDrawer } from '../components/bottom-drawer/bottom-drawer';
import {AutoDropdown} from '../components/auto-dropdown/auto-dropdown';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {GoogleMaps} from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SettingsPage,
    ChatPage,
    ProfilePage,
    MapPage,
    BottomDrawer,
    AutoDropdown
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SettingsPage,
    ChatPage,
    ProfilePage,
    MapPage,
    AutoDropdown
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
