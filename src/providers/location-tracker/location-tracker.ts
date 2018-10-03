import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {

  private WGS84_A:any=6378137.0;
  private WGS84_E2:any=0.00669437999014;
  lat:any=12.927526942392536;
  lng:any=77.58609169388774;
  alt:any=10;
  constructor() {
    console.log('Hello LocationTrackerProvider Provider');
  }

 WSG84toECEF(/*lat:any,lng:any,alt:any*/) {
    let radLat = this.convertToRadians(this.lat);
    let radLng = this.convertToRadians(this.lng); 
    console.log(radLat,radLng);
    let clat = Math.cos(radLat);
    let slat = Math.sin(radLat);
    let clon = Math.cos(radLng);
    let slon = Math.sin(radLng);
    
    let N = (this.WGS84_A/Math.sqrt(1.0-this.WGS84_E2*slat*slat));

    let x = ((N + this.alt)*clat * clon);
    let y = ((N + this.alt)*clat * slon);
    let z = ((N*(1.0-this.WGS84_E2)+this.alt)*slat);
    let array=[];
    

  }

  convertToRadians(coordinate:any){
    let pi=Math.PI;
    return coordinate*(pi/180);
  }

}
