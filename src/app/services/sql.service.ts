import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Truth } from '../interfaces/truth';

@Injectable({
  providedIn: 'root'
})
export class SqlService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  truths = new BehaviorSubject([]);
  dares = new BehaviorSubject([]);
  questions = new BehaviorSubject([]);
  challenges = new BehaviorSubject([]);
  settings = new BehaviorSubject([]);

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter, private platform: Platform, private http:HttpClient) { 
    this.platform.ready().then(() => {
      this.sqlite.create({
        name:'truthodare.db',
        location: 'default'
      })
      .then((db:SQLiteObject) => {
        this.database = db;
        this.seedDB();
      })
    })
  }

  seedDB() {
    this.http.get('assets/truthodare.sql', { responseType: 'text' })
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(_ => {
        //load
        this.dbReady.next(true);
      })
      .catch(e => console.error(e));
    });
  }

  getDBState() {
    return this.dbReady.asObservable();
  }

  getTruths() {
    return this.truths.asObservable();
  }

  getDares() {
    return this.dares.asObservable();
  }

  getQuestions() {
    return this.questions.asObservable();
  }

  getChallenges() {
    return this.challenges.asObservable();
  }

  getSettings() {
    return this.settings.asObservable();
  }

  loadTruths(){
    return this.database.executeSql('SELECT * FROM truths', [])
    .then(data => {
      let truth: Truth[] = [];

      if(data.rows.length > 0){
        for(let i=0; i<data.rows.length; i++ ) {
          truth.push({
            id: parseInt(data.rows.item(i).id),
            title: data.rows.item(i).title
          });
        }
      }
      this.truths.next(truth);
    });
  }

  addTruths(title) {
    let data  = [title];
    return this.database.executeSql('INSERT INTO truths (title) VALUES (?)', data)
    .then(data => {
      this.loadTruths();
    });
  }

  getTruth(id) {
    return this.database.executeSql('SELECT * FROM truths WHERE id = ?', [id])
    .then(data => {
      return {
        id: data.rows.item[0].id,
        title: data.rows.item[0].title
      }
    });
  }

  deleteTruth(id) {
    return  this.database.executeSql('DELETE FROM truth WHERE id = ?', [id])
    .then(_ => {
      this.loadTruths();
    });
  }

  updateTruth(truth:Truth) {
    return this.database.executeSql('UPDATE truths SET title = ? WHERE id=?',[truth.title, truth.id])
    .then(dtaa => {
      this.loadTruths();
    });
  }
}
