import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListasPage } from '../listas/listas';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  abrirListas(){
    this.navCtrl.push(ListasPage);
  }

}
