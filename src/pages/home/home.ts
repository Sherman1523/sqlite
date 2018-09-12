import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular'; 
import { HomeServiceProvider } from '../../providers/home-service/home-service';
import { DbManagersProvider } from '../../providers/db-managers/db-managers';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  database: SQLiteObject;

items = [];
items2 = [];


array:any;

  constructor(public navCtrl: NavController,
              public sqlite: SQLite,
              public modalCtrl: ModalController,
              public dbManager: DbManagersProvider,
              public homeService: HomeServiceProvider          
              ) {
               
  }

  ionViewWillEnter() {
    this.dbManager.queryHomeTable()
      .then((data) =>{
        this.items = [];
        this.items2 = [];
        if (data.rows.length>0){
          for(var i = 0; i<4; i++) {
            this.items.push(data.rows.item(i))
          }
          for(var j = 4; j<8 ; j++) {
            this.items2.push(data.rows.item(j));
          }
        } else {
          let iconArray = this.homeService.getCustomIcon();
          this.items = iconArray.slice(0,4);
          this.items2 = iconArray.slice(4,8);
          iconArray.forEach(element  => {
            this.dbManager.insetIntoHomeTable(element);
          });
        }
      }).catch(e =>
        console.log(e)
      );
  }

  ionViewDidLoad() {

  }


  iconEvent(event) {
    event.date = this.homeService.getCurrentDate();
    this.dbManager.updateHomeTable(event);
    
    setTimeout(() => {
      this.dbManager.queryHomeTable()
      .then((data) =>{
        this.items = [];
        this.items2 = [];
        if (data.rows.length>0){
          for(var i = 0; i<4; i++) {
            this.items.push(data.rows.item(i))
          }
          for(var j = 4; j<8 ; j++) {
            this.items2.push(data.rows.item(j));
          }
        } 
      }).catch(e =>
        console.log(e)
      );
    }, 500);
  }


}
