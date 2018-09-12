import { Injectable } from '@angular/core';
import { HomeProvider } from '../../providers/home/home';
import { DbManagersProvider } from '../../providers/db-managers/db-managers';

import {SQLiteObject, SQLite} from "@ionic-native/sqlite";


/*
  Generated class for the HomeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export const EBV_TASK: string = "EBVTask";
export const AEKO_SEARCH: string = "AEKOSearch";
export const EBV_SEARCH: string = "EBVSearch";
export const TEST_TASK: string = "TestTask";
export const NEW_SEARCH: string = "NewSearch";
export const SKD_SEARCH: string = "SKDSearch";

var icon1 = new HomeProvider();
var icon2 = new HomeProvider();
var icon3 = new HomeProvider();
var icon4 = new HomeProvider();
var icon5 = new HomeProvider();
var icon6 = new HomeProvider();
var icon7 = new HomeProvider();
var icon8 = new HomeProvider();

@Injectable()
export class HomeServiceProvider {

  items = [];

  database: SQLiteObject;

  constructor(
              public sqlite: SQLite,
              public dbManagers: DbManagersProvider
             ) {
               

  }
  getCustomIcon() : any {
    icon1.image = "assets/imgs/logo-1.png";
    icon1.name = 'EBVTask';
    icon1.event = EBV_TASK;
    icon1.date = 9;
    icon1.power = "";

    icon2.image = "assets/imgs/logo-2.png";
    icon2.name = 'AEKOSearch';
    icon2.event = AEKO_SEARCH;
    icon2.date = 10;
    icon2.power = "";

    icon3.image = "assets/imgs/logo-3.png";
    icon3.name =  'EBVSearch';
    icon3.event = EBV_SEARCH;
    icon3.date = 8;
    icon3.power = "";

    icon4.image = "assets/imgs/logo-4.png";
    icon4.name = 'TestSearch';
    icon4.event = TEST_TASK;
    icon4.date = 7;
    icon4.power = "";
    
    icon5.image = "assets/imgs/logo-5.png";
    icon5.name = 'NewSearch';
    icon5.event = NEW_SEARCH;
    icon5.date = 6;
    icon5.power = "";

    icon6.image = "assets/imgs/logo-6.png";
    icon6.name = 'SKDSearch';
    icon6.event = SKD_SEARCH;
    icon6.date = 5;
    icon6.power = "";
    
    this.items.push(icon1);
    this.items.push(icon2);
    this.items.push(icon3);
    this.items.push(icon4);
    this.items.push(icon5);
    this.items.push(icon6);
    this.items.push(icon7);
    this.items.push(icon8);
    return this.items;
  }


  getCurrentDate() {
    let d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    var hours = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    let seconds = d.getSeconds().toString();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    return parseInt(year + month + day + hours + minutes + seconds);
  }
}
