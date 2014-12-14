

var textureEyeCover = new THREE.ImageUtils.loadTexture("darkMetalEye.jpg", 
    new THREE.UVMapping(),
    function () {
      console.log("eyeTexture is loaded.");
      imageLoaded = true;
      TW.render();
    });



  textureEyeCover.wrapS = textureEyeCover.wrapT = THREE.MirroredRepeatWrapping;
  textureEyeCover.repeat.set( 1 / 5, 1 / 5 );
  textureEyeCover.offset.set( 0.8, 0.9 );


  var eyeCoverMaterial = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      specular:0xFFFFFF,
      shininess: 0,
      map: textureEyeCover,
      side: THREE.DoubleSide,
      castShadow: true
    });


var textureEye = new THREE.ImageUtils.loadTexture("whiteMetal.jpg", 
      new THREE.UVMapping(),
      function () {
        console.log("eyeTexture is loaded.");
        imageLoaded = true;
        TW.render();
      });

    textureEye.wrapS = textureEye.wrapT = THREE.MirroredRepeatWrapping;
    textureEye.repeat.set( 1 / 7, 1 / 7 );
    textureEye.offset.set( 0.8, 0.9 );


    var eyeMaterial = new THREE.MeshPhongMaterial(
      { color: 0x898989,
        specular:0xFFFFFF,
        shininess: 0,
        map: textureEye,
        receiveShadow: true
      });
