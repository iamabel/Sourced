import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';
import { MapPage } from '../pages/explore/explore';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {GoogleMaps} from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SettingsPage,
    ChatPage,
    ProfilePage,
    MapPage
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
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
