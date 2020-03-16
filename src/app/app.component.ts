import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SqlService } from './services/sql.service';
import { Setting } from './interfaces/setting';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  // numOfPlayers: number = 6;
  setting: Setting = {
    id: 0,
    num_of_players: 0,
    truth_list: 0,
    dare_list: 0
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private sql: SqlService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.sql.getDBState().subscribe(ready => {
      if(ready){
        console.log("DB Ready");
        this.getSetting();
      }
    })
  }

  getSetting() {
    this.sql.settings.subscribe(setting => {
      this.setting.id = setting[0].id;
      this.setting.num_of_players = setting[0].num_of_players;
      this.setting.truth_list = setting[0].truth_list;
      this.setting.dare_list = setting[0].dare_list;
    });
  }

  setPlayers() {
    console.log("SetPlayers here");
    this.alertCtrl.create({
      header: "Set Players",
      message: "How many players we have?",
      inputs: [
        {
          name: 'numOfPlayers',
          type: 'number',
          placeholder: "Default is "+this.setting.num_of_players.toString()
        }
      ],
      buttons:[
        {
          text: "Cancel",
          role: "cancel"
        },
        {
          text: "Confirm",
          handler: (alert) => {
            this.setting.num_of_players = alert.numOfPlayers;
            this.sql.updateSetting(this.setting);
          }
        }
      ]
    }).then((alert)=> {
      alert.present();
    })

  }

  selectQList() {
    console.log("SelectQList here");
    this.router.navigateByUrl('list/select');
  }

  editQList() {
    console.log("EditQList here");
  }
}
