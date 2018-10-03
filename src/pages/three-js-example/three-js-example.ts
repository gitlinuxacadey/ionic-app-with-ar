import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Thumbnail } from 'ionic-angular';
import * as THREE from 'three';

/**
 * Generated class for the ThreeJsExamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-three-js-example',
  templateUrl: 'three-js-example.html',
})
export class ThreeJsExamplePage {

  @ViewChild('domObj') canvasEl:ElementRef;

  private _element:any;
  private _scene;
  private _camera;
  public _renderer;
  private _geometry;
  public _material;
  public _cube;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreeJsExamplePage');
    this.initialiseWebGLObjectAndEnvironment();
    this.renderAnimation();
  }
  initialiseWebGLObjectAndEnvironment() : void
  {

     // Reference the DOM element that the WebGL generated object
     // will be assigned to
     this._element 			= this.canvasEl.nativeElement;


     // Define a new ThreeJS scene
     this._scene 				= new THREE.Scene();


     // Define a new ThreeJS camera from the following types:
     /*
        1. CubeCamera				(Creates 6 cameras - one for each face of a cube)
        2. OrthographicCamera		(Creates a camera using orthographic projection - object size stays constant
                      regardless of distance from the camera)
        3. PerspectiveCamera		(Creates a camera using perspective projection - most common projection type
                      for 3D rendering [designed to mimic the way the human eye sees])
        4. StereoCamera			(Dual PerspectiveCameras - used for 3D effects such as parallax barrier)
     */
      this._camera 				= new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


      // Define an object to manage display of ThreeJS scene
      this._renderer 			= new THREE.WebGLRenderer();


      // Resizes the output canvas to match the supplied width/height parameters
      this._renderer.setSize( window.innerWidth, window.innerHeight );


      // Attach the canvas, where the renderer draws the scene, to the specified DOM element
      this._element.appendChild( this._renderer.domElement );


      // BoxGeometry class allows us to create a cube (with width, height and depth dimensions supplied as
      // parameters - default is 1 for these values)
     this._geometry 			= new THREE.BoxGeometry( 1, 1, 1 );


     // Define the material (and its appearance) for drawing the geometry to the scene
     this._material 			= new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe : true } );


     // Use the Mesh class to define a polygon mesh based object with the supplied geometry and material objects
     this._cube 				= new THREE.Mesh( this._geometry, this._material );


     // Add the object to the scene
     this._scene.add(this._cube);


     // Define the depth position of the camera
     this._camera.position.z 	= 5;
  }




  /**
   * Define the animation properties for the WebGL object rendered in the DOM element, using the requestAnimationFrame
   * method to animate the object
   *
   * @private
   * @method animate
   * @return {none}
   */
  private _animate () : void
  {
      requestAnimationFrame(() =>
      {
         this._animate();
      });


     // Define rotation speeds on x and y axes - lower values means lower speeds
      this._cube.rotation.x += 0.015;
      this._cube.rotation.y += 0.015;


     // Render the scene (will be called using the requestAnimationFrame method to ensure the cube is constantly animated)
      this._renderer.render(this._scene, this._camera);
  };




  /**
   * Render the animation
   *
   * @public
   * @method _renderAnimation
   * @return {none}
   */
  renderAnimation() : void
  {
     //if (Detector.webgl)
     //{
        this._animate();
     /*}
     else {
        var warning = Detector.getWebGLErrorMessage();
        console.log(warning);
     }*/
  }


}


