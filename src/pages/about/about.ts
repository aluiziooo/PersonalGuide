import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasPage } from '../listas/listas';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  abrirListas(){
    this.navCtrl.push(ListasPage);
  }

}
