

  function createEyeFront(glassEye, glassCam) {
    var eyeFront = new THREE.Object3D();
    glassEye.scale.z = 0.7;

    var eyeBigCircGeom = new THREE.TorusGeometry( 1.9, 0.1, 16, 100 ); 
    var eyeBigCirc = new THREE.Mesh( eyeBigCircGeom,steelMaterial );
    eyeBigCirc.position.set(-2.5, 0.8,5 );

    var eyeBorderGeom = new THREE.TorusGeometry(1, 0.1, 16, 100);
    var eyeBorder = new THREE.Mesh(eyeBorderGeom, steelMaterial);
    eyeBorder.position.set(-2.5,1,5.1);


    var eyeLightPartGeom = new THREE.CircleGeometry(1,100);
    eyeLightPart = new THREE.Mesh(eyeLightPartGeom, eyeLightMaterial);
    eyeLightPart.position.set(-2.5,1,5.1);
  // scene.add(eyeLightPart);


  var eyeDarkPartGeom = new THREE.CircleGeometry(1.9,100);
  var eyeDarkPart = new THREE.Mesh(eyeDarkPartGeom, eyeDarkMaterial);
  eyeDarkPart.position.set(-2.5, 0.8,5);
  // scene.add(eyeDarkPart);

  var pupilGeom = new THREE.CircleGeometry(0.7, 100);
  var pupil = new THREE.Mesh(pupilGeom, eyeDarkMaterial);
  pupil.position.set(-2.5, 1,5.2);
  // scene.add(pupil);

  eyeFront.add(eyeBigCirc);
  eyeFront.add(glassEye);
  eyeFront.add(eyeBorder);
  eyeFront.add(eyeLightPart);
  eyeFront.add(eyeDarkPart);
  eyeFront.add(pupil);



  glassEye.position.set(-2.5, 0.8,5);
  glassCam.position.set(-2.5,0.8,5);

  return eyeFront;

}



function createHead() {
  var head = new THREE.Object3D();

  headGeom = new THREE.BoxGeometry(4,2.5,3);
  addTextureCoords(headGeom, 3, 3);
  var texturedHeadBox = new THREE.Mesh(headGeom, eyeCoverMaterial);
  texturedHeadBox.position.set(0.8,1.2,1);

  var eyeBaseR = createEyeBase(1);
  eyeBaseR.position.set(7,-1,-2);
  head.add(eyeBaseR);

  var eyeBaseL = createEyeBase(-1);
  eyeBaseL.position.set(-5,-1,3);
  head.add(eyeBaseL);

  var eyeFrontL = createEyeFront(glassEyeL, glassEyeCamL);
  eyeFrontL.position.set(1,1.4,-1.9)
  head.add(eyeFrontL);

  var eyeFrontR = createEyeFront(glassEyeR, glassEyeCamR);
  eyeFrontR.position.set(6,1.4,-1.9);
  head.add(eyeFrontR);
  head.add(texturedHeadBox);


  return head;
}


function createNeck() {

  var wholeNeck = new THREE.Object3D();  

  var neck = new THREE.Shape();
  neck.moveTo(0,0);
  neck.lineTo(2,-1)
  neck.lineTo(2,-4);
  neck.lineTo(1,-6);
  neck.lineTo(0.5,-5);
  neck.lineTo(0.5, -3);
  neck.lineTo(0,-2);
  neck.moveTo(0,0);  

  var neckGeom = new THREE.ExtrudeGeometry(neck, { amount: 2,
    bevelThickness: 0,
    bevelSize: 0,
    bevelSegments: 3,
    bevelEnabled: false,
    curveSegments: 12,
    steps: 1});
  // var neckDetail = new THREE.SceneUtils.createMultiMaterialObject(neckGeom, [yellowMaterial]);
  var neckDetail = new THREE.Mesh(neckGeom, yellowMaterial);
  neckDetail.rotation.y = 2*Math.PI-Math.PI/2;
  neckDetail.rotation.x =2*Math.PI- Math.PI/6;
  neckDetail.position.set(2,-1.5,0.5);
  wholeNeck.add(neckDetail);

  var bodyCylGeom = new THREE.CylinderGeometry(1, 1, 2.5, 32 );
  var bodyCyl = new THREE.Mesh(bodyCylGeom, yellowMaterialForCyl );

  var bodyDiscGeom = new THREE.CylinderGeometry(1, 1, 0.4, 32 );
  var bodyDisc = new THREE.Mesh(bodyDiscGeom, yellowMaterialForCyl);

  var neckBaseGeom = new THREE.CylinderGeometry(1,1.6, 4, 32, true);
  var neckBase = new THREE.Mesh(neckBaseGeom, yellowNeckMat);


  var neckHolderGeom = new THREE.CylinderGeometry(1, 1, 0.4, 32);
  var neckHolder1 = new THREE.Mesh(neckHolderGeom, eyeCoverMaterial);

  var neckHolder2 = new THREE.Mesh(neckHolderGeom, eyeCoverMaterial);

  bodyCyl.rotation.z=Math.PI/2;
  bodyCyl.position.set(1,-5,3);
  bodyDisc.rotation.x = Math.PI/6;
  bodyDisc.position.set(1,-6,2.4);

  neckBase.position.set(1,-8,1.3);
  neckBase.rotation.x = Math.PI/6
  neckHolder1.scale.x = 1.5;
  neckHolder2.scale.x=1.5;
  neckHolder1.rotation.z = Math.PI/2;
  neckHolder2.rotation.z=Math.PI/2;
  neckHolder1.position.set(-0.6,-9.2,1);
  neckHolder2.position.set(2.5, -9.2,1);




  var textureYellowDetail = new THREE.ImageUtils.loadTexture("yellowDetail.jpg", 
    new THREE.UVMapping(),
    function () {
      console.log("yellowDetail is loaded.");
      imageLoaded = true;
      TW.render();
    });



  textureYellowDetail.wrapS = textureYellowDetail.wrapT = THREE.MirroredRepeatWrapping;
  // textureYellowDetail.repeat.set( 1 / 10, 1 / 10 );
  // textureYellowDetail.offset.set( 0.8, 0.9 );


  var yellowDetailMat = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: textureYellowDetail,
      castShadow: true
    });



  topBoxGeom = new THREE.BoxGeometry(1.4,2.2,0.3);
  addTextureCoords(headGeom, 3, 3);
  topBox = new THREE.Mesh (topBoxGeom, yellowDetailMat);
  topBox.rotation.x = 2*Math.PI-Math.PI/6;
  topBox.position.set(1,-2.8,3.6);

  wholeNeck.add(bodyCyl);
  wholeNeck.add(bodyDisc);
  wholeNeck.add(neckBase);
  wholeNeck.add(neckHolder1);
  wholeNeck.add(neckHolder2);
  wholeNeck.add(topBox);

  return wholeNeck;
}

// wholeNeck = createNeck();
// wholeNeck.position.set(0,0.7,-1);
//scene.add(wholeNeck);

var textureWheel = new THREE.ImageUtils.loadTexture("wheel.jpg", 
  new THREE.UVMapping(),
  function () {
    console.log("eyeTexture is loaded.");
    imageLoaded = true;
    TW.render();
  });



textureWheel.wrapS = textureWheel.wrapT = THREE.MirroredRepeatWrapping;
textureWheel.repeat.set( 3, 1);
  // textureWheel.offset.set( 0.8, 0.9 );


  var wheelMaterial = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: textureWheel,
      side: THREE.DoubleSide,
      castShadow: true
    });


  function createWheel () {

    var wheel = new THREE.Object3D();
    var surfPoints1 = [[ [ -2,7,0],  [-2,7,2], [-2,4,6], [-2,2,6] ],
    [ [-1,7,0], [-1,7,2],  [-1,4,6], [-1,2,6] ],
    [ [0,7,0], [0,7,2],  [0,4,6],  [0,2,6] ],
    [ [2,7,0],  [2,7,2],  [2,4,6],  [2,2,6] ] ];



    var surfPoints2 = [ [ [-2,2,6],  [-2,0,6], [-2,0,-6], [-2,2,-6] ],
    [ [-1,2,6], [-1,0,6],  [-1,0,-6], [-1,2,-6] ],
    [ [0,2,6], [0,0,6],  [0,0,-6],  [0,2,-6] ],
    [ [2,2,6],  [2,0,6],  [2,0,-6],  [2,2,-6] ] ];



    var surfGeom1 = new THREE.BezierSurfaceGeometry( surfPoints1.reverse(), 60, 60 );
    var surfGeom2 = new THREE.BezierSurfaceGeometry(surfPoints2.reverse(), 60,60);

    var eyeCov1 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom1, [wheelMaterial]);

    var eyeCov2 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom2, [wheelMaterial]);

    var curve3 = eyeCov1.clone();
    curve3.rotation.y= Math.PI;
    wheel.add(eyeCov1);
    wheel.add(eyeCov2);
    wheel.add(curve3);

    return wheel;
  }

// var wheelL = createWheel();
// wheelL.position.set(-7,-22,0)
// wheelR = createWheel();
// wheelR.position.set(9,-22,0)
// scene.add(wheelL);
// scene.add(wheelR);


function addTextureCoords(boxGeom, maxT, maxS) {

  var UVs = [];
  function faceCoords(as,at, bs,bt, cs,ct) {
    UVs.push( [ new THREE.Vector2(as,at),
      new THREE.Vector2(bs,bt),
      new THREE.Vector2(cs,ct)] );
  }
      // front
      faceCoords(0,0, maxS,0, maxS,maxT);
      faceCoords(0,0, maxS,maxT, 0,maxT);
      
      faceCoords(maxS,0, 0,maxT, 0,0);
      faceCoords(maxS,0, maxS,maxT, 0,maxT);
         // sides
         faceCoords(maxS,0, 0,maxT, 0,0);
         faceCoords(maxS,maxT, 0,maxT, maxS,0);
         faceCoords(maxS,0, maxS,maxT, 0,0);
         faceCoords(maxS,maxT, 0,maxT, 0,0);
      // floor
      faceCoords(0,0, maxS,0, 0,maxT);
      faceCoords(maxS,0, maxS,maxT, 0,maxT);
      // Finally, attach this to the geometry
      boxGeom.faceVertexUvs = [ UVs ];

    }

    function updateQuadTextureParams(quad, sMin, sMax, tMin, tMax) {
    var elt = quad.faceVertexUvs[0]; // dunno why they have this 1-elt array
    var face0 = elt[0];
    face0[0] = new THREE.Vector2(sMin,tMax);
    face0[1] = new THREE.Vector2(sMin,tMin);
    face0[2] = new THREE.Vector2(sMax,tMax);
    var face1 = elt[1];
    face1[0] = new THREE.Vector2(sMin,tMin);
    face1[1] = new THREE.Vector2(sMax,tMin);
    face1[2] = new THREE.Vector2(sMax,tMax);
   // printTextureParams(quad);
   quad.uvsNeedUpdate = true;
 }


 var arm = new THREE.Shape();
 arm.moveTo(1.4,-0.31);
 arm.lineTo(3,-2);
 arm.lineTo(3, -4);
 arm.lineTo(2.5, -4);
 arm.lineTo(2.5,-2);
 arm.lineTo(1,-1.9);



 var neckPoints = [];
 neckPoints.push(new THREE.Vector3(0,0.5,0));
 neckPoints.push(new THREE.Vector3(1, -0.8, 0));
 neckPoints.push(new THREE.Vector3(0.8, -1.75,0));
 neckPoints.push(new THREE.Vector3(0, -2,0));

 var neckPoints2 = [];
 neckPoints2.push(new THREE.Vector3(0,0.5,0));
 neckPoints2.push(new THREE.Vector3(-1, -0.8, 0));
 neckPoints2.push(new THREE.Vector3(-0.8, -1.75,0));
 neckPoints2.push(new THREE.Vector3(0, -2,0));


 var options = {
  amount: 5,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 3,
  bevelEnabled: false,
  curveSegments: 12,
  steps: 1
};

var options2 = {
  amount: 2,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 3,
  bevelEnabled: false,
  curveSegments: 12,
  steps: 1
};
var options3 = {
  amount: 14,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 0,
  bevelEnabled: false,
  curveSegments: 0,
  steps: 1
};

var options4 = {
  amount: 1.4,
  bevelThickness: 0,
  bevelSize: 0,
  bevelSegments: 0,
  bevelEnabled: false,
  curveSegments: 0,
  steps: 1
};


var mats = new THREE.MeshFaceMaterial(

  [ yellowMaterial,
  handMaterial]);

function createTexturedHand (handGeom) {
    //setting material indexes for the faces

    //putting the brick texture on the front and the back of the barn
    for (i = 0; i<6; i++) {
      handGeom.faces[i].materialIndex = 0;
    }


     // putting the brick texture on the side wall faces and floor face
     for (i = 6; i<8; i++) {
      handGeom.faces[i].materialIndex = 1;
    }
    for (i = 8; i<11; i++) {
      handGeom.faces[i].materialIndex = 0;
    }

    //sets all the texture params
    addTextureCoords(handGeom, 1.4, 1.6);

    var hand = new THREE.Mesh(handGeom, mats);
    return hand;
  }

  var textureHandMet = new THREE.ImageUtils.loadTexture("handMetal.jpg", 
    new THREE.UVMapping(),
    function () {
      console.log("hadTextureMet is loaded.");
      imageLoaded = true;
      TW.render();
    });



  textureHandMet.wrapS = textureHandMet.wrapT =THREE.MirroredRepeatWrapping;
  textureHandMet.repeat.set( 1/2, 1/3);
  // textureWheel.offset.set( 0.8, 0.9 );

  var handMetalMat = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: textureHandMet,
      side: THREE.DoubleSide,
      castShadow: true
    });



  function createHand() { // 1 for right hand, -1 for left hand

    var wholeHand = new THREE.Object3D();
    var handArm = new THREE.Object3D();

    addTextureCoords(headGeom, 1, 1);

    var sholderGeom = new THREE.CylinderGeometry(0.7,0.7,2,5,32);
    var sholder = new THREE.Mesh(sholderGeom, handMetalMat);

    var armStartGeom = new THREE.CylinderGeometry(0.8,0.8,2,32);
    var armStart = new THREE.Mesh(armStartGeom, handMetalMat);

    var wristGeom = new THREE.CylinderGeometry(0.4,0.4,2,32);
    var wrist = new THREE.Mesh(wristGeom, yellowMaterial);

    var armGeom = new THREE.ExtrudeGeometry(arm,options4)
    var armFirst = new THREE.Mesh(armGeom, handMetalMat);
    var armSecond = armFirst.clone();
    
    sholder.position.set(0,-0.4,0.6);

    wrist.position.set(0,0.4,9.5);
    wrist.rotation.x= Math.PI/2;

    var armEnd = new THREE.Object3D();
    armFirst.rotation.y = Math.PI*2-Math.PI/2;
    armFirst.position.set(0,0,0);

    armSecond.rotation.y = Math.PI*2-Math.PI/2; 
    armSecond.position.set(1.6,0,0)
    armEnd.add(armFirst);
    armEnd.add(armSecond);
    armEnd.position.set(0,1,9.7);
    armStart.position.set(0,0,10.8);
    armStart.rotation.z = Math.PI/2;

    handArm.add(wrist);
    handArm.add(armEnd); 
    handArm.add(armStart);
    handArm.position.set(0,0,-2.5);
    handArm.rotation.z =Math.PI*2- Math.PI/2;


    var handFaces = createHandwFaces(1.4,2,6);
    var hand = createTexturedHand(handFaces);

    hand.rotation.y = Math.PI;
    hand.position.set(1,-1.2,1);



    wholeHand.add(hand);

    wholeHand.add(sholder);

    wholeHand.add(handArm);
    wholeHand.rotation.x= Math.PI*2 - Math.PI/6;

    return wholeHand;
  }


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


  var surfGeom1 = new THREE.BezierSurfaceGeometry( surfPoints1.reverse(), 60, 60 );
  var surfGeom2 = new THREE.BezierSurfaceGeometry(surfPoints2.reverse(), 60,60);
  var surfGeom3 = new THREE.BezierSurfaceGeometry(surfPoints3.reverse(), 60,60);

  var eyeCov1 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom1, [eyeCoverMaterial]);

  var eyeCov2 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom2, [eyeCoverMaterial]);

  var eyeCov3 = new THREE.SceneUtils.createMultiMaterialObject(surfGeom3, [eyeCoverMaterial]);

if (side == -1) {
  eyeCov1.rotation.y= Math.PI;
  eyeCov2.rotation.y= Math.PI;
  eyeCov3.rotation.y= Math.PI;
   eyeCov1.position.z= 1;
  eyeCov2.position.z= 1;
  eyeCov3.position.z= 1;

  console.log("SIDE -1");
 }
eyeBase.add(eyeCov1);
eyeBase.add(eyeCov2);
eyeBase.add(eyeCov3);


return eyeBase;
}

createHandwFaces = function(width, height, depth) {
    var w = width, h = height, len = depth;
    var handGeom = new THREE.Geometry();
    // add the front
   handGeom.vertices.push(new THREE.Vector3(0, 0, 0)); // vertex 0
   handGeom.vertices.push(new THREE.Vector3(w, 0, 0)); // vertex 1
   handGeom.vertices.push(new THREE.Vector3(w, h, 0)); // vertex 2
   handGeom.vertices.push(new THREE.Vector3(0, h, 0)); // vertex 3
    
    // just add the back also manually
   handGeom.vertices.push(new THREE.Vector3(0, 0, -len)); // vertex 4
   handGeom.vertices.push(new THREE.Vector3(w, 0, -len)); // vertex 5
   handGeom.vertices.push(new THREE.Vector3(w, h, -len)); // vertex 6
   handGeom.vertices.push(new THREE.Vector3(0, h, -len)); // vertex 7
   
    // now that we've got the vertices we need to define the faces.
    // front faces
    handGeom.faces.push(new THREE.Face3(0, 1, 2)); // 0
    handGeom.faces.push(new THREE.Face3(0, 2, 3));//1
    
    // back faces
    handGeom.faces.push(new THREE.Face3(4, 6, 5)); // 3
    handGeom.faces.push(new THREE.Face3(4, 7, 6));//2
  
    // roof faces.
    handGeom.faces.push(new THREE.Face3(3, 6, 7)); // 4
    handGeom.faces.push(new THREE.Face3(3, 2, 6));//5
  

    // side faces
    handGeom.faces.push(new THREE.Face3(0, 3, 4)); // 6
    handGeom.faces.push(new THREE.Face3(3, 7, 4));//7
    handGeom.faces.push(new THREE.Face3(1, 5, 2)); // 8
    handGeom.faces.push(new THREE.Face3(2, 5, 6));//9

    // floor faces
    handGeom.faces.push(new THREE.Face3(0, 5, 1)); // 10
    handGeom.faces.push(new THREE.Face3(0, 4, 5));//11

    // calculate the normals for shading
    handGeom.computeFaceNormals();
    // barnGeometry.computeVertexNormals(true); only for "rounded" objects

    return handGeom;
};

function createWallE() {
var wallE = new THREE.Object3D();


var marbleSet1 = createMarble(0x524CFD, 0x444444, 5, 1.9);
glassEyeL = marbleSet1[0];
glassEyeCamL = marbleSet1[1];

var marbleSet2 = createMarble(0x524CFD, 0x444444, 5, 1.9);
glassEyeR = marbleSet2[0];
glassEyeCamR = marbleSet2[1];



 var bodyBoxGeom = new THREE.BoxGeometry(12,10,12);
 addTextureCoords(bodyBoxGeom, 5, 5);
 var bodyBox = new THREE.Mesh(bodyBoxGeom, yellowMaterial);
 bodyBox.position.set(1,-14,0);

head = createHead();
head.position.y = -1;

wholeNeck = createNeck();
wholeNeck.position.set(0,0.7,-1);

var wheelL = createWheel();
wheelL.position.set(-7,-22,0)
wheelR = createWheel();
wheelR.position.set(9,-22,0)
wallE.add(wheelL); // add to wallE
wallE.add(wheelR);

  hand = createHand();
  var handLeft = hand.clone();
  handLeft.rotation.z = Math.PI;
  handLeft.rotation.y = Math.PI/10;
  handLeft.position.set(-6,-14,4);

  wallE.add(handLeft);

  var handPivot = new THREE.Object3D();
  handPivot.position.set(7,-13,4);
  handPivot.add(hand);
  stem = createStem();
  hand.add(stem);
  stem.position.set(-2,0,9);
  wallE.add(handPivot);

  var headPivot = new THREE.Object3D();
//headPivot.add(new THREE.Mesh(new THREE.SphereGeometry(2), material));
headPivot.position.set(1,-8,0);
neckNhead = new THREE.Object3D();
neckNhead.add(head);
neckNhead.add(wholeNeck);

headPivot.add(neckNhead);
neckNhead.position.set(-1,7.5,0);
wallE.add(headPivot);
wallE.add(bodyBox);

return wallE;


}