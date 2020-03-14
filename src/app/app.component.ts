import { Component, OnInit } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  numOfPlayers: number = 6;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController
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
          placeholder: "Default is "+this.numOfPlayers.toString()
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
            console.log(alert.numOfPlayers);
            console.log(this.numOfPlayers);
            this.numOfPlayers = alert.numOfPlayers;
            console.log(this.numOfPlayers);
          }
        }
      ]
    }).then((alert)=> {
      alert.present();
    })

  }

  selectQList() {
    console.log("SelectQList here");
  }

  editQList() {
    console.log("EditQList here");
  }
}
