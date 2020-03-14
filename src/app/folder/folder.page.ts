import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

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

  setOne(){
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
  }

  setTwo(){
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
  }
  
  setThree(){
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
  }
  
  setFour(){
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
  }
  
  setFive(){
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
  }
  
  setSix(){
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
