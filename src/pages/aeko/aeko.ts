import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { DbManagersProvider } from '../../providers/db-managers/db-managers';
import { HomeServiceProvider } from '../../providers/home-service/home-service';
/**
 * Generated class for the AekoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-aeko',
  templateUrl: 'aeko.html',
})
export class AekoPage {
  info: HomeProvider;
  constructor(public navCtrl: NavController, 
              public homeService: HomeServiceProvider,
              public dbManager: DbManagersProvider,
              public navParams: NavParams) {
    this.info = this.navParams.data.home;
  }

  ionViewWillEnter() {
    // this.info.date = this.homeService.getCurrentDate();
    // alert(this.homeService.getCurrentDate());
    // this.dbManager.updateHomeTable(this.info);
  }

  ionViewDidLoad() {
    alert(this.info.name + ' ' + this.info.date);
  }

}
