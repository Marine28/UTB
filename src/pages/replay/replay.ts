import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DetailPage} from "../detail/detail";

/**
 * Generated class for the ReplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-replay',
  templateUrl: 'replay.html',
})
export class ReplayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReplayPage');
  }

  detail(){
    this.navCtrl.push(DetailPage);
  }

}
