import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { HomeProvider } from '../../providers/home/home';

/*
  Generated class for the DbManagersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbManagersProvider {

  constructor(private sqlite: SQLite) {

  }


  shareInstance() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('CREATE TABLE IF NOT EXISTS home(event TEXT PRIMARY KEY, name TEXT, image TEXT, date INT, power TEXT);', [])
      .then(() => 
        console.log('init database successfully')
    ).catch(e =>
        console.log(e)
    );
     return database;
    })
  }


  insetIntoHomeTable(home:HomeProvider) {
       this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((database: SQLiteObject) => {
    
        database.executeSql('INSERT INTO home VALUES (?, ?, ?, ?, ?);', [home.event,home.name,home.image,home.date,home.power]).then(() => console.log('insert into users table successfully')).catch(e => console.log(e));
      })
  }

  queryHomeTable(): Promise<any>{
     return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      return   database.executeSql('SELECT * FROM home ORDER BY date DESC;', []);
    })
  }

  /* 更新home表数据 */
  updateHomeTable(home: HomeProvider) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((database: SQLiteObject) => {
      database.executeSql('UPDATE home SET name=?, image=?, date=?, power=? WHERE event=?;', [home.name, home.image, home.date, home.power, home.event])
      .then((data) => {
      }).catch(e => {
      });
    })
  }
}
