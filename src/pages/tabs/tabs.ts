import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReglesPage} from "../regles/regles";
import {ClassementPage} from "../classement/classement";
import {MapPage} from "../map/map";
import {ReplayPage} from "../replay/replay";
import {ProfilPage} from "../profil/profil";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = ReglesPage;
  tab2Root = ClassementPage ;
  tab3Root = MapPage ;
  tab4Root = ReplayPage ;
  tab5Root = ProfilPage ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
