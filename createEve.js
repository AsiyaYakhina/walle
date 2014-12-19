function createEve() {


var eveMat = new THREE.MeshPhongMaterial({ 
      color: 0xEF0F0FB,
      ambient: 0xF0F0FB,
      specular:0xFFFFFF,
      shininess: 0,
      side: THREE.DoubleSide
     
 });

var faceTexture = new THREE.ImageUtils.loadTexture("eveFace.jpg", 
    new THREE.UVMapping(),
    function () {
      console.log("eyeTexture is loaded.");
      imageLoaded = true;
      TW.render();
    });

  var faceMat = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: faceTexture,
      side: THREE.BackSide
  
    });



var evePoints = [ [ [4.5,14,0],  [3.4,7,0], [3,0.5,0], [0,1,0] ],                
                [ [2.5,14,4.5], [1.5,7,3.4],  [2,0.5,3.2], [0,1,0] ],
                [ [-2.5,14,4.5], [-1.5,7,3.4],  [-2,0.5,3.2],  [0,1,0] ],
                [ [-4.5,14,0],  [-3.4,7,0],  [-3,0.5,0],  [0,1,0] ] ];


var headPoints = [ [ [4.5,15,0],  [4.3,16,0], [3.5,20,0], [0,20,0] ],                
                [ [3,15,4.5], [1,16,4],  [0.4,20,3], [0,20,0] ],
                [ [-3,15,4.5], [-1,16,4],  [-0.4,20,3],  [0,20,0] ],
                [ [-4.5,15,0],  [-4.3,16,0],  [-3.5,20,0],  [0,20,0] ] ];


var bodyCapPoints = [ [ [4.5,14,0],  [4.4,15,0], [3.5,15.5,0], [0,16,0] ],                
                    [ [2.5,14,4.5], [1.5,15,4.4],  [2,15.5,3.5], [0,16,0] ],
                    [ [-2.5,14,4.5], [-1.5,15,4.4],  [-2,15.5,3.5],  [0,16,0] ],
                    [ [-4.5,14,0],  [-4.4,15,0],  [-3.5,15.5,0],  [0,16,0] ] ];



var eveHalfGeom = new THREE.BezierSurfaceGeometry( evePoints.reverse(), 30, 30 );


var halfEve = new THREE.Mesh(eveHalfGeom, eveMat);
var halfEve2 = halfEve.clone();
halfEve2.rotation.y= Math.PI;
var eveBody = new THREE.Object3D();

eveBody.add(halfEve);
eveBody.add(halfEve2);



var halfHeadGeom = new THREE.BezierSurfaceGeometry( headPoints.reverse(), 100, 100 );

var halfHead = new THREE.Mesh(halfHeadGeom, faceMat);
var half2Head = new THREE.Mesh(halfHeadGeom, eveMat);
half2Head.rotation.y= Math.PI;





var bodyCapGeom = new THREE.BezierSurfaceGeometry(bodyCapPoints.reverse(), 30, 30 );
var bodyCap1 = new THREE.Mesh(bodyCapGeom, eveMat);

var bodyCap2 = bodyCap1.clone();
bodyCap2.rotation.y = Math.PI;
var bodyCap = new THREE.Object3D();
bodyCap.add(bodyCap1);
bodyCap.add(bodyCap2);

//bodyCap.position.set(0,11,0);
eveBody.add(bodyCap);

var hand1 = eveBody.clone();

hand1.scale.set(0.2,0.7, 0.2);
hand1.position.set(5,3,0);
hand1.rotation.y = Math.PI/2;
var hand2 = hand1.clone();
hand2.position.set(-5,3,0);
var eve = new THREE.Object3D();
eve.add(halfHead);
eve.add(half2Head);

eve.add(eveBody);
eve.add(hand1);
eve.add(hand2);

return eve;

}
