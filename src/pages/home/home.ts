import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ClassementPage} from "../classement/classement";
import {ProfilPage} from "../profil/profil";
import {MapPage} from "../map/map";
import {ReplayPage} from "../replay/replay";
import {ReglesPage} from "../regles/regles";
import {CalendrierPage} from "../calendrier/calendrier";
import {ConnexionPage} from "../connexion/connexion";
import {InscriptionPage} from "../inscription/inscription";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = ConnexionPage;
  tab2Root = InscriptionPage;


  constructor(public navCtrl: NavController) {

  }

}
