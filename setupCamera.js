$.getScript("http://cs.wellesley.edu/~cs307/threejs/libs/tw.js", function(){


setUpCamera = function (renderer,scene,scene_bb,inits, near, far) {
    /* Sets up a camera for you, based on a scene bounding box (scene_bb),
     * an object with six properties: minx, maxx, miny, maxy, minz,
     * maxz. See cameraSetupParams for more. inits can include fovy */
    if( ! (renderer instanceof THREE.WebGLRenderer ) ) {
        throw "first arg should be a renderer, probably THREE.WebGLRenderer";
    }
    if( ! (scene instanceof THREE.Scene ) ) {
        throw "second arg must be a THREE.Scene";
    }
    var bb = scene_bb;
    if( ! bb ) {
        console.log("without the scene bounding box, I have no idea where to position the camera.\n"+
                    "Please supply a bounding box like {minx: 0, maxx: 100, ...}");
    }
    var fovy = inits && inits.fovy ? inits.fovy : 75;  // default fovy is 75
    // if( TW.lastClickTarget === null ) {
    //     console.warn("It seems that you did not invoke TW.mainInit; doing it for you.");
    //     TW.mainInit(renderer,scene);
    // }
    var canvas = TW.lastClickTarget;
    var state = canvas.TW_state;
    state.sceneBoundingBox = scene_bb;
    var camParams = TW.cameraSetupParams(scene_bb,fovy);
    state.cameraParams = camParams;
    var camera = new THREE.PerspectiveCamera(fovy, canvas.clientWidth/canvas.clientHeight,
                                             near,
                                             far);
    state.cameraObject = camera
    scene.add(camera);

    // adjust size of axisHelper to sceneRadius
    // TODO: position the axisHelper at center of scene, in case origin is off-screen
    var ah = scene.getObjectByName("AxisHelper");
    ah.size = camParams.sceneRadius;
    TW.addSceneBoundingBoxHelper(scene);
    TW.addGroundHelper(scene,bb);

    state.render = function () { renderer.render(scene, camera); }

    var cameraControls = new THREE.OrbitControls(camera, canvas);
    state.cameraControls = cameraControls;
    cameraControls.addEventListener('change',state.render);
    cameraControls.target.copy( camParams.center );
    cameraControls.update();
    
    TW.viewFromFront();
    state.render();
return state;
   
};
});