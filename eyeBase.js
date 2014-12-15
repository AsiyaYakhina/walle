

function createEyeBase(side) { // 1 is right side, -1 is left

  var eyeBase = new THREE.Object3D();

 var eye = new THREE.Shape();
  eye.moveTo(-6, 6);
  eye.bezierCurveTo(-6,3, -6,1,-2,0);
  eye.bezierCurveTo(2,0, 2,1,1.5,4);
  eye.bezierCurveTo(1,4.5,-0.4,5,-6,6);


    
    var eyeGeom = new THREE.ExtrudeGeometry(eye, {amount: 5,
    bevelEnabled: false,
    curveSegments: 12});
   
    var texturedEye = new THREE.SceneUtils.createMultiMaterialObject(eyeGeom, [eyeMaterial]);
    if (side == -1) {
      texturedEye.rotation.y = Math.PI;
    }
    eyeBase.add(texturedEye);
   
// main eye added

    
  var backEye = new THREE.Shape();
  backEye.moveTo(5,5);
  backEye.lineTo(8,5);
  backEye.lineTo(8,4.8);
  backEye.bezierCurveTo(10, 4.5,10, 4.5, 8, 3.8);
  backEye.bezierCurveTo(8,1, 3,1.8,  5,1.8);
  backEye.bezierCurveTo(4,1, 3,4,  5,5);



   var backEyeGeom = new THREE.ExtrudeGeometry(backEye, {amount: 5,
    bevelEnabled: false,
    curveSegments: 12});  
   var backEye = new THREE.SceneUtils.createMultiMaterialObject(backEyeGeom, [eyeCoverMaterial]);
    if (side == -1) {
      console.log("SIDE-1");
  backEye.rotation.y= Math.PI;
   backEye.position.set(10,2,-3);
}

if (side ==1) {
  console.log("SIDE 1");
  backEye.position.set(-9.7,2,-3);
}
   backEye.scale.x = 1.3;
   backEye.rotation.z = Math.PI*2 - Math.PI/15;
 
  eyeBase.add(backEye);
//backSide added


   var surfPoints1 = [ [ [-6.1,6.1,0],  [-6.1,3,0], [-5.9,0.8,0], [-2,-0.2,0] ],
  [ [-6.1,6.1,2], [-6.1,3,2],  [-5.9,0.8,2], [-2,-0.2,2] ],
  [ [-6.1,6.1,4], [-6.1,3,4],  [-5.9,0.8,4],  [-2,-0.2,4] ],
  [ [-6.1,6.1,6],  [-6.1,3,6],  [-5.9,0.8,6],  [-2,-0.2,6] ] ];


  var surfPoints2 = [ [ [-2,-0.2,0],  [0,-0.2,0], [2.7,0,0], [1.7,4,0] ],
  [ [-2,-0.2,2], [0,-0.2,2],  [2.7,0,2], [1.7,4,2] ],
  [ [-2,-0.2,4], [0,-0.2,4],  [2.7,0,4],  [1.7,4,4] ],
  [ [-2,-0.2,6],  [0,-0.2,6],  [2.7,0,6],  [1.7,4,6] ] ];

  var surfPoints3 = [ [ [1.7,4,0],  [0.5,5,0], [-3,5.4,0], [-6.1,6.1,0] ],
  [ [1.7,4,2], [0.5,5,2],  [-3,5.4,2], [-6.1,6.1,2] ],
  [ [1.7,4,4], [0.5,5,4],  [-3,5.4,4],  [-6.1,6.1,4] ],
  [ [1.7,4,6],  [0.5,5,6],  [-3,5.4,6],  [-6.1,6.1,6] ] ];


//   var surfGeom1 = new THREE.BezierSurfaceGeometry( surfPoints1.reverse(), 60, 60 );
//   var surfGeom2 = new THREE.BezierSurfaceGeometry(surfPoints2.reverse(), 60,60);
//   var surfGeom3 = new THREE.BezierSurfaceGeometry(surfPoints3.reverse(), 60,60);

//   var eyeCov1 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom1, [eyeCoverMaterial]);

//   var eyeCov2 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom2, [eyeCoverMaterial]);

//   var eyeCov3 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom3, [eyeCoverMaterial]);

// if (side == -1) {
//   eyeCov1.rotation.y= Math.PI;
//   eyeCov2.rotation.y= Math.PI;
//   eyeCov3.rotation.y= Math.PI;
//    eyeCov1.position.z= 1;
//   eyeCov2.position.z= 1;
//   eyeCov3.position.z= 1;

//   console.log("SIDE -1");
//  }
// eyeBase.add(eyeCov1);
// eyeBase.add(eyeCov2);
// eyeBase.add(eyeCov3);


 return eyeBase;
  }