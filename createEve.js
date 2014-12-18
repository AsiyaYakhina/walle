function createEve() {
var eveMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });

var faceTexture = new THREE.ImageUtils.loadTexture("eveFace.jpg", 
    new THREE.UVMapping(),
    function () {
      console.log("eyeTexture is loaded.");
      imageLoaded = true;
      TW.render();
    });

  //textureEyeCover.wrapS = textureEyeCover.wrapT = THREE.MirroredRepeatWrapping;
 //  faceTexture.repeat.set( 1 / 5, 1 / 5 );
 // faceTexture.offset.set( 0.8, 0.9 );


  var faceMat = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: faceTexture,
      side: THREE.DoubleSide,
  
    });



var evePoints = [ [ [4.5,14,0],  [2.8,7,0], [2.1,4,0], [0,1,0] ],                
                [ [2.5,14,4.5], [1.5,7,3],  [2,4,3.2], [0,1,0] ],
                [ [-2.5,14,4.5], [-1.5,7,3],  [-2,4,3.2],  [0,1,0] ],
                [ [-4.5,14,0],  [-2.8,7,0],  [-2.1,4,0],  [0,1,0] ] ];



var headPoints = [ [ [4.5,15,0],  [4.3,16,0], [3.5,20,0], [0,20,0] ],                
                [ [3,15,4.5], [1,16,4],  [0.4,20,3], [0,20,0] ],
                [ [-3,15,4.5], [-1,16,4],  [-0.4,20,3],  [0,20,0] ],
                [ [-4.5,15,0],  [-4.3,16,0],  [-3.5,20,0],  [0,20,0] ] ];


var eveHalfGeom = new THREE.BezierSurfaceGeometry( evePoints.reverse(), 30, 30 );


var halfEve = new THREE.Mesh(eveHalfGeom, eveMat);
var halfEve2 = halfEve.clone();
halfEve2.rotation.y= Math.PI;

var halfHeadGeom = new THREE.BezierSurfaceGeometry( headPoints.reverse(), 80, 80 );

var halfHead = new THREE.Mesh(halfHeadGeom, faceMat);
var half2Head = halfHead.clone();
half2Head.rotation.y= Math.PI;

var eve = new THREE.Object3D();
eve.add(halfEve);
eve.add(halfEve2);
eve.add(halfHead);
eve.add(half2Head);
return eve;
}
