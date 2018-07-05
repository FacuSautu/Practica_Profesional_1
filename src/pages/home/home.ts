import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Pagina2Page } from '../pagina2/pagina2';
import { PageActShtPage } from '../page-act-sht/page-act-sht';
import { AlertPage } from '../alert/alert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Followers = 0;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }

  goPagina2():void {
    this.navCtrl.push('pagina2', {param: 'Hola Mundo!', adios: 'Hasta luego!!!'});
  }

  navegarActSht():void {
    this.navCtrl.push(PageActShtPage);
  }

  navegarAlert():void {
    this.navCtrl.push(AlertPage);
  }

  sumFolow():void {
    this.Followers ++;
  }

  OpenAlert():void {
    const alert = this.alertCtrl.create({
      title: 'New Folower!',
      subTitle: 'Congratulations, you have a new follower!',
      buttons: ['OK']
    });
    alert.present();
  }

}
