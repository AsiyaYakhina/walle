

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

     var steelMaterial =  new THREE.MeshPhongMaterial(  {color: 0x121212,
   ambient: 0x121212,
   specular: 0x4F4F4F            
 });

       var eyeLightMaterial = new THREE.MeshPhongMaterial(
    { color: 0x898989,
      ambient: 0x898989,
      specular:0x545454
    });

         var  eyeDarkMaterial = new THREE.MeshPhongMaterial(
    { color: 0x000000,
      ambient: 0x000000,
      specular:0x545454
    });

  var yellowTexture = new THREE.ImageUtils.loadTexture("yellowMetal2.jpg", 
      new THREE.UVMapping(),
      function () {
        console.log("yellowTexture is loaded.");
        imageLoaded = true;
        TW.render();
      });

    yellowTexture.wrapS = yellowTexture.wrapT = THREE.MirroredRepeatWrapping;
    yellowTexture.repeat.set( 1 / 7, 1 / 7 );
    yellowTexture.offset.set( 0.8, 0.9 );



    var yellowMaterial = new THREE.MeshPhongMaterial(
      { color: 0x898989,
        specular:0xFFFFFF,
        shininess: 0,
        map: yellowTexture,
        receiveShadow: true
      });

  var yellowTextureforCyl = new THREE.ImageUtils.loadTexture("yellowMetal2.jpg", 
      new THREE.UVMapping(),
      function () {
        console.log("yellowTexture is loaded.");
        imageLoaded = true;
        TW.render();
      });

    yellowTextureforCyl.wrapS = yellowTexture.wrapT = THREE.MirroredRepeatWrapping;
  
      var yellowMaterialForCyl = new THREE.MeshPhongMaterial(
      { color: 0x898989,
        specular:0xFFFFFF,
        shininess: 0,
        map: yellowTextureforCyl,
        receiveShadow: true
      });


        var yellowNeckText = new THREE.ImageUtils.loadTexture("neckYellow.jpg", 
      new THREE.UVMapping(),
      function () {
        console.log("yellowTexture is loaded.");
        imageLoaded = true;
        TW.render();
      });

    yellowNeckText.wrapS = yellowNeckText.wrapT = THREE.MirroredRepeatWrapping;
  
      var yellowNeckMat= new THREE.MeshPhongMaterial(
      { color: 0x898989,
        specular:0xFFFFFF,
        shininess: 0,
        map: yellowNeckText,
        receiveShadow: true
      });
 
 

  // var yellowRustTexture = new THREE.ImageUtils.loadTexture("rustyYello.jpg", 
  //     new THREE.UVMapping(),
  //     function () {
  //       console.log("yellowRustTexture is loaded.");
  //       imageLoaded = true;
  //       TW.render();
  //     });

  //   yellowRustTexture.wrapS = yellowTexture.wrapT = THREE.MirroredRepeatWrapping;
  //   //yellowRustTexture.repeat.set( 1 / 100, 1 / 100 );
  //   yellowRustTexture.offset.set( 0.8, 0.9 );



  //   var yellowRustMaterial = new THREE.MeshPhongMaterial(
  //     { color: 0x898989,
  //       specular:0xFFFFFF,
  //       shininess: 0,
  //       map: yellowRustTexture,
  //       receiveShadow: true
  //     });
