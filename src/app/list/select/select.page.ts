import { Component, OnInit, Renderer } from '@angular/core';
import { SqlService } from 'src/app/services/sql.service';
import { Question } from 'src/app/interfaces/question';
import { Truth } from 'src/app/interfaces/truth';
import { Challenge } from 'src/app/interfaces/challenge';
import { Setting } from 'src/app/interfaces/setting';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  setting: Setting = {
    id: 0,
    num_of_players: 0,
    truth_list: 0,
    dare_list: 0
  };
  truthslist: Truth[] = [];
  dareslist: Truth[] = [];
  questionlistView: any;
  challengelistView: any;
  truthView: any;
  dareView: any;
  questionsView: any;
  questionslist: Question[];
  challengeslist: Challenge[];
  qbtn: any;
  cbtn: any;

  constructor(private sql: SqlService, private renderer: Renderer) {
  }

  ngOnInit() {
    this.truthView = document.querySelector('#truth');
    this.dareView = document.querySelector('#dare');
    this.questionsView = document.querySelector('#questions');
    this.questionlistView = document.querySelector("#question_list");
    this.challengelistView = document.querySelector("#challenge_list");
    this.qbtn = document.querySelector("#q_btn");
    this.cbtn = document.querySelector("#c_btn");

    this.sql.getDBState().subscribe(ready => {
      if(ready){
        console.log("DB Ready");
        this.getSetting();
        console.log(this.setting);
        this.truthView.value = this.setting.truth_list;
        this.dareView.value = this.dareslist;
        this.displayChallenge();
        this.displayQuestion();
      }
    });

    this.sql.truths.subscribe(t => {
      this.truthslist = t;
      console.log('Get Truth List', this.truthslist);
    });
    this.sql.dares.subscribe(d => {
      this.dareslist = d;
      console.log('Get Dare List', this.dareslist);
    });
    this.questions();
  }

  questions() {
    this.renderer.setElementStyle(this.qbtn, 'color', 'blue');
    this.renderer.setElementStyle(this.cbtn, 'color', 'initial');
    this.renderer.setElementStyle(this.questionlistView, 'display', 'block');
    this.renderer.setElementStyle(this.challengelistView, 'display', 'none');
    console.log('Select Questions here');
  }

  displayQuestion() {
    this.questionslist = [];
    let id = this.truthView.value;
    this.sql.questions.subscribe(qs => {
      console.log(qs);
      qs.forEach(q => {
        if(q.truth_id == id) {
          this.questionslist.push(q);
        }
      })
    });
    console.log('Get Questions:: ',this.questionslist);
  }

  challenges() {
    this.renderer.setElementStyle(this.cbtn, 'color', 'blue');
    this.renderer.setElementStyle(this.qbtn, 'color', 'initial');
    this.renderer.setElementStyle(this.challengelistView, 'display', 'block');
    this.renderer.setElementStyle(this.questionlistView, 'display', 'none');
    console.log('Select Challenges here');
  }
  
  displayChallenge() {
    this.challengeslist = [];
    let id = this.dareView.value;
    this.sql.challenges.subscribe(cs => {
      console.log(cs);
      cs.forEach(c => {
        if(c.dare_id == id) {
          this.challengeslist.push(c);
        }
      })
    });
    console.log('Get Questions:: ',this.questionslist);
  }

  getSetting() {
    this.sql.settings.subscribe(setting => {
      this.setting.id = setting[0].id;
      this.setting.num_of_players = setting[0].num_of_players;
      this.setting.truth_list = setting[0].truth_list;
      this.setting.dare_list = setting[0].dare_list;
    });
  }

  save() {
    this.setting.truth_list = this.truthView.value;
    this.setting.dare_list = this.dareView.value;
    this.sql.updateSetting(this.setting);
    console.log('Saved');
  }
}
