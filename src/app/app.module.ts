import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TabsPage} from "../pages/tabs/tabs";
import {ClassementPage} from "../pages/classement/classement";
import {ReglesPage} from "../pages/regles/regles";
import {MapPage} from "../pages/map/map";
import {ProfilPage} from "../pages/profil/profil";
import {ReplayPage} from "../pages/replay/replay";
import {CalendrierPage} from "../pages/calendrier/calendrier";
import {ConnexionPage} from "../pages/connexion/connexion";
import {InscriptionPage} from "../pages/inscription/inscription";
import {CalendarModule} from "ion2-calendar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ClassementPage,
    ReglesPage,
    MapPage,
    ProfilPage,
    ReplayPage,
    CalendrierPage,
    ConnexionPage,
    InscriptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ClassementPage,
    ReglesPage,
    MapPage,
    ProfilPage,
    ReplayPage,
    CalendrierPage,
    ConnexionPage,
    InscriptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
