import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArCameraViewPage } from '../ar-camera-view/ar-camera-view';
import { PathNavigationPage } from '../path-navigation/path-navigation';
import { ThreeJsExamplePage } from '../three-js-example/three-js-example';
import { LocationHelperPage } from '../location-helper/location-helper';
import {LocationTrackerProvider} from '../../providers/location-tracker/location-tracker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public locationTracker:LocationTrackerProvider) {

  }

  ionViewDidLoad(){
    this.locationTracker.WSG84toECEF();
  }

 openArCameraView(){
    console.log("Starting the Camera");
    this.navCtrl.push(ArCameraViewPage);
  }

  openPathNavPage(){
    console.log("Starting Navigation");
    this.navCtrl.push(PathNavigationPage);
  }

  openThreeJsPage(){
    console.log("Starting ThreeJS Animations");
    this.navCtrl.push(ThreeJsExamplePage);
  }

  openGeolocationPage(){
    this.navCtrl.push(LocationHelperPage);
  }

}
