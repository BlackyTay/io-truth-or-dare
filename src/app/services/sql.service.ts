// Source ************************************ */
// https://devdactic.com/ionic-4-sqlite-queries/
// ********************************** Source */
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Truth } from '../interfaces/truth';
import { Dare } from '../interfaces/dare';
import { Question } from '../interfaces/question';
import { Challenge } from '../interfaces/challenge';
import { Setting } from '../interfaces/setting';

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

  addTruth(title) {
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
    return  this.database.executeSql('DELETE FROM truths WHERE id = ?', [id])
    .then(_ => {
      this.loadTruths();
    });
  }

  updateTruth(truth:Truth) {
    return this.database.executeSql('UPDATE truths SET title = ? WHERE id=?',[truth.title, truth.id])
    .then(data => {
      this.loadTruths();
    });
  }

  loadDares(){
    return this.database.executeSql('SELECT * FROM dares', [])
    .then(data => {
      let dare: Dare[] = [];

      if(data.rows.length > 0){
        for(let i=0; i<data.rows.length; i++ ) {
          dare.push({
            id: parseInt(data.rows.item(i).id),
            title: data.rows.item(i).title
          });
        }
      }
      this.dares.next(dare);
    });
  }

  addDare(title) {
    let data  = [title];
    return this.database.executeSql('INSERT INTO dares (title) VALUES (?)', data)
    .then(data => {
      this.loadDares();
    });
  }

  getDare(id) {
    return this.database.executeSql('SELECT * FROM dares WHERE id = ?', [id])
    .then(data => {
      return {
        id: data.rows.item[0].id,
        title: data.rows.item[0].title
      }
    });
  }

  deleteDare(id) {
    return  this.database.executeSql('DELETE FROM dares WHERE id = ?', [id])
    .then(_ => {
      this.loadDares();
    });
  }

  updateDare(dare:Dare) {
    return this.database.executeSql('UPDATE dares SET title = ? WHERE id=?',[dare.title, dare.id])
    .then(data => {
      this.loadDares();
    });
  }

  loadQuestions(){
    return this.database.executeSql('SELECT * FROM questions', [])
    .then(data => {
      let question: Question[] = [];

      if(data.rows.length > 0){
        for(let i=0; i<data.rows.length; i++ ) {
          question.push({
            id: parseInt(data.rows.item(i).id),
            question: data.rows.item(i).question,
            truth_id: data.rows.item(i).truth_id
          });
        }
      }
      this.questions.next(question);
    });
  }

  addQuestion(questions, truth_id) {
    let data  = [questions, truth_id];
    return this.database.executeSql('INSERT INTO questions (questions, truth_id) VALUES (?, ?)', data)
    .then(data => {
      this.loadQuestions();
    });
  }

  getQuestion(id) {
    return this.database.executeSql('SELECT * FROM questions WHERE id = ?', [id])
    .then(data => {
      return {
        id: data.rows.item[0].id,
        question: data.rows.item(0).question,
        truth_id: data.rows.item(0).truth_id
      }
    });
  }

  deleteQuestion(id) {
    return  this.database.executeSql('DELETE FROM questions WHERE id = ?', [id])
    .then(_ => {
      this.loadQuestions();
    });
  }

  updateQuestion(question:Question) {
    return this.database.executeSql('UPDATE questions SET question = ?, truth_id = ? WHERE id=?',[question.question, question.truth_id, question.id])
    .then(data => {
      this.loadQuestions();
    });
  }

  loadChallenges(){
    return this.database.executeSql('SELECT * FROM challenges', [])
    .then(data => {
      let challenge: Challenge[] = [];

      if(data.rows.length > 0){
        for(let i=0; i<data.rows.length; i++ ) {
          challenge.push({
            id: parseInt(data.rows.item(i).id),
            challenge: data.rows.item(i).challenge,
            dare_id: data.rows.item(i).dare_id
          });
        }
      }
      this.challenges.next(challenge);
    });
  }

  addChallenge(challenges, dare_id) {
    let data  = [challenges, dare_id];
    return this.database.executeSql('INSERT INTO challenges (challenges, dare_id) VALUES (?, ?)', data)
    .then(data => {
      this.loadChallenges();
    });
  }

  getChallenge(id) {
    return this.database.executeSql('SELECT * FROM challenges WHERE id = ?', [id])
    .then(data => {
      return {
        id: data.rows.item[0].id,
        challenge: data.rows.item(0).challenge,
        dare_id: data.rows.item(0).dare_id
      }
    });
  }

  deleteChallenge(id) {
    return  this.database.executeSql('DELETE FROM challenges WHERE id = ?', [id])
    .then(_ => {
      this.loadChallenges();
    });
  }

  updateChallenge(challenge:Challenge) {
    return this.database.executeSql('UPDATE challenges SET challenge = ?, dare_id = ? WHERE id=?',[challenge.challenge, challenge.dare_id, challenge.id])
    .then(data => {
      this.loadChallenges();
    });
  }

  loadSettings(){
    return this.database.executeSql('SELECT * FROM settings', [])
    .then(data => {
      let setting: Setting[] = [];

      if(data.rows.length > 0){
          setting.push({
            id: parseInt(data.rows.item(0).id),
            num_of_players: data.rows.item(0).num_of_players,
            truth_list: data.rows.item(0).truth_list,
            dare_list: data.rows.item(0).dare_list
          });
      }
      this.settings.next(setting);
    });
  }

  // addSetting(num_of_players, truth_list, dare_list) {
  //   let data  = [num_of_players, truth_list, dare_list];
  //   return this.database.executeSql('INSERT INTO settings (num_of_players, truth_list, dare_list) VALUES (?, ?)', data)
  //   .then(data => {
  //     this.loadSettings();
  //   });
  // }

  getSetting() {
    return this.database.executeSql('SELECT * FROM settings WHERE id = 0')
    .then(data => {
      return {
        id: data.rows.item[0].id,
        num_of_players: data.rows.item(0).num_of_players,
        truth_list: data.rows.item(0).truth_list,
        dare_list: data.rows.item(0).dare_list
      }
    });
  }

  // deleteSetting(id) {
  //   return  this.database.executeSql('DELETE FROM settings WHERE id = ?', [id])
  //   .then(_ => {
  //     this.loadSettings();
  //   });
  // }

  updateSetting(setting:Setting) {
    return this.database.executeSql('UPDATE challenges SET num_of_players = ?, truth_list = ?, dare_list = ? WHERE id=1',[setting.num_of_players, setting.truth_list, setting.dare_list])
    .then(data => {
      this.loadSettings();
    });
  }
}
