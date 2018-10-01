import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArCameraViewPage } from '../ar-camera-view/ar-camera-view';
import { PathNavigationPage } from '../path-navigation/path-navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 openArCameraView(){
    console.log("Starting the Camera");
    this.navCtrl.push(ArCameraViewPage);
  }

  openPathNavPage(){
    console.log("Starting Navigation");
    this.navCtrl.push(PathNavigationPage);
  }

}
