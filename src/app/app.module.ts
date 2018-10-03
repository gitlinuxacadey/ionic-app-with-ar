import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArCameraViewPage } from '../pages/ar-camera-view/ar-camera-view';
import { PathNavigationPage } from '../pages/path-navigation/path-navigation';
import { ThreeJsExamplePage } from '../pages/three-js-example/three-js-example';
import { LocationHelperPage } from '../pages/location-helper/location-helper';

//native plugins
import { CameraPreview } from '@ionic-native/camera-preview';
import { Geolocation } from '@ionic-native/geolocation';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArCameraViewPage,
    PathNavigationPage,
    ThreeJsExamplePage,
    LocationHelperPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArCameraViewPage,
    PathNavigationPage,
    ThreeJsExamplePage,
    LocationHelperPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ArCameraViewPage,
    CameraPreview,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundGeolocation,
    LocationTrackerProvider
  ]
})
export class AppModule {}
