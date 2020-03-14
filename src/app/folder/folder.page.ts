import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { resolve } from 'url';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  dot1: any;
  dot2: any;
  dot3: any;
  dot4: any;
  dot5: any;
  dot6: any;
  diceMode: any;
  bottleMode: any;
  mode: any;
  bottle: any;
  deg: number = 0;
  rand: number;
  public show: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute, 
    // private screenOrientation: ScreenOrientation, 
    private renderer: Renderer) { }

  ngOnInit() {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.dot1 = document.querySelector('#dot1');
    this.dot2 = document.querySelector('#dot2');
    this.dot3 = document.querySelector('#dot3');
    this.dot4 = document.querySelector('#dot4');
    this.dot5 = document.querySelector('#dot5');
    this.dot6 = document.querySelector('#dot6');
    this.mode = document.querySelector("#mode");
    this.diceMode = document.querySelector("#diceMode");
    this.bottleMode = document.querySelector("#bottleMode");
    this.bottle = document.querySelector("#bottle");

    this.changeMode();
    this.setTransitions();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  setTransitions() {
    this.renderer.setElementStyle(this.dot1, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.dot2, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.dot3, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.dot4, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.dot5, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.dot6, 'transition', '0.1s linear');
    this.renderer.setElementStyle(this.bottle, 'transition', '5s cubic-bezier(0.05, 0.95, 0.31, 0.95)');
  }

  async setOne(){
    console.log("SetOne start");
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');
    
    this.renderer.setElementStyle(this.dot1, 'opacity', '1');
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1.5) translate(-180, 58)');
    this.renderer.setElementStyle(this.dot2, 'opacity', '0');
    this.renderer.setElementStyle(this.dot3, 'opacity', '0');
    this.renderer.setElementStyle(this.dot4, 'opacity', '0');
    this.renderer.setElementStyle(this.dot5, 'opacity', '0');
    this.renderer.setElementStyle(this.dot6, 'opacity', '0');
    console.log('SetOne end');
    setTimeout(()=>resolve('setOne'),300);
      
    });
  }

  async setTwo(){
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1.2) translate(-55, 25)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1.2) translate(-25, 186)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');
    
    this.renderer.setElementStyle(this.dot2, 'opacity', '1');
    this.renderer.setElementStyle(this.dot3, 'opacity', '0');
    this.renderer.setElementStyle(this.dot4, 'opacity', '0');
    this.renderer.setElementStyle(this.dot5, 'opacity', '0');
    this.renderer.setElementStyle(this.dot6, 'opacity', '0');
    setTimeout(()=>resolve('setTwo'),350);
    });
  }
  
  async setThree(){
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1.1) translate(-20, 10)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1.1) translate(-30, 226)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1.1) translate(-120, -24)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');
    
    this.renderer.setElementStyle(this.dot1, 'opacity', '1');
    this.renderer.setElementStyle(this.dot2, 'opacity', '1');
    this.renderer.setElementStyle(this.dot3, 'opacity', '1');
    this.renderer.setElementStyle(this.dot4, 'opacity', '0');
    this.renderer.setElementStyle(this.dot5, 'opacity', '0');
    this.renderer.setElementStyle(this.dot6, 'opacity', '0');
    setTimeout(()=>resolve('setThree'),380);
    });
  }
  
  async setFour(){
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1) translate(1, 50)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1) translate(1, 50)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1) translate(1, 90)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(1, 90)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');
    
    this.renderer.setElementStyle(this.dot1, 'opacity', '1');
    this.renderer.setElementStyle(this.dot2, 'opacity', '1');
    this.renderer.setElementStyle(this.dot3, 'opacity', '1');
    this.renderer.setElementStyle(this.dot4, 'opacity', '1');
    this.renderer.setElementStyle(this.dot5, 'opacity', '0');
    this.renderer.setElementStyle(this.dot6, 'opacity', '0');
    setTimeout(()=>resolve('setFour'),350);
    });
  }
  
  async setFive(){
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1) translate(16, 35)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1) translate(-14, 35)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1) translate(16, 105)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(-14, 105)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(-95, -142)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');

    this.renderer.setElementStyle(this.dot1, 'opacity', '1');
    this.renderer.setElementStyle(this.dot2, 'opacity', '1');
    this.renderer.setElementStyle(this.dot3, 'opacity', '1');
    this.renderer.setElementStyle(this.dot4, 'opacity', '1');
    this.renderer.setElementStyle(this.dot5, 'opacity', '1');
    this.renderer.setElementStyle(this.dot6, 'opacity', '0');
    setTimeout(()=>resolve('setFive'),380);
    });
  }
  
  async setSix(){
    return new Promise((resolve) => {
    this.renderer.setElementAttribute(this.dot1, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot2, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot3, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot4, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot5, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementAttribute(this.dot6, 'transform','scale(1) translate(1, 1)');
    this.renderer.setElementStyle(this.dot1, 'opacity', '1');
    this.renderer.setElementStyle(this.dot1, 'tranform', 'translate(1,1)');
    this.renderer.setElementStyle(this.dot2, 'opacity', '1');
    this.renderer.setElementStyle(this.dot3, 'opacity', '1');
    this.renderer.setElementStyle(this.dot4, 'opacity', '1');
    this.renderer.setElementStyle(this.dot5, 'opacity', '1');
    this.renderer.setElementStyle(this.dot6, 'opacity', '1');
    setTimeout(()=>resolve('setSix'),300);
    });
  }

  async rollDice() {
    console.log('roll');
    this.rand = Math.ceil(Math.random()*6);
    console.log('Rand : ', this.rand.toString());
    this.setTwo()
    .then(()=> this.setSix())
    .then(()=> this.setSix())
    .then(()=> this.setThree())
    .then(()=> this.setOne())
    .then(()=> this.setTwo())
    .then(()=> this.setThree())
    .then(()=> this.setSix())
    .then(()=> this.setFive())
    .then(()=> this.setFour())
    .then(()=> {
      switch(this.rand){
        case 1:
          this.setOne();
          break;
        case 2:
          this.setTwo();
          break;
        case 3:
          this.setThree();
          break;
        case 4:
          this.setFour();
          break;
        case 5:
          this.setFive();
          break;
        case 6:
          this.setSix();
          break;
      }
    });
    // console.log('roll 1');
    // await this.setTwo();
    // await this.setThree();
    // await this.setFour();
    // await this.setFive();
    // await this.setSix();
  }

  changeMode() {
    let bool = this.mode.checked;
    if (bool) {
      this.renderer.setElementStyle(this.diceMode, 'display', 'block');
      this.renderer.setElementStyle(this.bottleMode, 'display', 'none');
    }
    else {
      this.renderer.setElementStyle(this.diceMode, 'display', 'none');
      this.renderer.setElementStyle(this.bottleMode, 'display', 'block');
    }
  }

  rotate() {
    this.deg += Math.random()*360+3600;
    console.log('Deg:: ',this.deg);
    this.renderer.setElementStyle(this.bottle, 'transform', 'rotate(0deg)');
    this.renderer.setElementStyle(this.bottle, 'transform', 'rotate('+this.deg.toString()+'deg)');
  }
}
