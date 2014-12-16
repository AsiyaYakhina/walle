
function createStem() {
var greenMat = new THREE.MeshBasicMaterial({color: 0x50DB1F,
side: THREE.DoubleSide});


var leafPoints = [ [ [0,0,0],  [1.5,-1,1], [2,-2,2], [2.5,-0.2,0] ],
[ [0,0,0], [1.5,-1,0.5],  [2,-1.5,1.5], [2.5,-0.2,0] ],
[ [0,0,0], [1.5,-1,-0.5],  [2,-1.5,-1.5],  [2.5,-0.2,0] ],
[ [0,0,0],  [1.5,-1.5,-1],  [2,-2,-2],  [2.5,-0.2,0] ] ];


var leafGeom = new THREE.BezierSurfaceGeometry( leafPoints.reverse(), 30, 30 );


var leaf = new THREE.Mesh(leafGeom, greenMat);
leaf.rotation.x= Math.PI;
var leaf2 = leaf.clone(); 
leaf.rotation.y=Math.PI;
leaf.position.set(0,4,0);
leaf2.position.set(0,6.5,0);


// eyeBase.add(eyeCov1);
// eyeBase.add(eyeCov2);
// eyeBase.add(eyeCov3);

var points = [];
  points.push(new THREE.Vector3(0,0,0));
  points.push(new THREE.Vector3(1,3,0));
  points.push(new THREE.Vector3(-1,5,0));
  points.push(new THREE.Vector3(0.5,7,0));


var stemGeom =  new THREE.TubeGeometry(new THREE.SplineCurve3(points), 64, 0.1, 10, false);
   

var stem = new THREE.Mesh(stemGeom, greenMat);

var fullStem = new THREE.Object3D();
fullStem.add(leaf);
fullStem.add(leaf2);
fullStem.add(stem);

return fullStem;
}