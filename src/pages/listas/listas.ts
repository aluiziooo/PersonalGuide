import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 pet:string = "pet";

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListasPage');
  }

}
