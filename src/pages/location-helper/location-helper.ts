import { Component } from '@angular/core';
import { Platform, NavController, NavParams } from 'ionic-angular';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';


/**
 * Generated class for the LocationHelperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-location-helper',
  templateUrl: 'location-helper.html',
})
export class LocationHelperPage {
  locations=[];
  result:any="";


  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation:Geolocation, public platform:Platform) {

  }

ionViewDidLoad() {
    console.log('ionViewDidLoad LocationHelperPage');
    let constants:GeolocationOptions={
      enableHighAccuracy:true,
      timeout:5000,
      maximumAge:0
    }
    this.platform.ready().then((readySource)=>{
        this.result="Platform successfully loaded";
        this.geolocation.getCurrentPosition(constants).then((resp)=>{
          this.locations.push(resp.coords.latitude,resp.coords.longitude);
        console.log(resp.coords.latitude,resp.coords.longitude);
      }).catch((err)=>{
          console.log(err);
      });
    });

                                              
  }

}
