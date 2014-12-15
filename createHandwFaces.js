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