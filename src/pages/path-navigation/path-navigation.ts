import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPreview,CameraPreviewOptions } from '@ionic-native/camera-preview';


/**
 * Generated class for the PathNavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-path-navigation',
  templateUrl: 'path-navigation.html',
})
export class PathNavigationPage {
  cameraPreivewOpts:CameraPreviewOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cameraPreview:CameraPreview) {
    this.cameraPreview.switchCamera();
    this.cameraPreivewOpts={
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PathNavigationPage');
    this.cameraPreview.startCamera(this.cameraPreivewOpts).then((res)=>{
      console.log(res);
  },(err)=>{
      console.log(err);
  });
  }

}
