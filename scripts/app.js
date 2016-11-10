var sceneObj = (function(){

    "use strict";

    Physijs.scripts.worker = "scripts/physijs_worker.js";
    Physijs.scripts.ammo = "ammo.js";

    var scene, camera, renderer
    var physijsBox, physijsGround

    function initScene(){
        scene = new Physijs.Scene();
        scene.setGravity = new THREE.Vector3(0, -50, 0);

        camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight , 1, 1000);
        camera.position.z = 100;

        renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        addPhysijsBox();
        addPhysijsGround();
        render();
    }

    function addPhysijsBox(){
        var myBoxMaterial = Physijs.createMaterial(
            new THREE.MeshBasicMaterial({
                color: 0xff00ff
            }),
            0,  // friction
            0.8 // restitution / bounciness
        );
        physijsBox = new Physijs.BoxMesh(new THREE.CubeGeometry(15,15,15), myBoxMaterial);
        physijsBox.position.set(0,30,10);
        physijsBox.rotation.set(0,50,90);
        scene.add(physijsBox);

        physijsBox.addEventListener('collision', function(
            theOtherObject, linearVelocity, angularVelocity, arg4
        ){
            console.log("box collided with something");
            if (theOtherObject.name == "ground"){
                alert("Box just hit the ground");
            }
        })
    }

    function addPhysijsGround(){
        var myGroundMaterial = Physijs.createMaterial(
            new THREE.MeshBasicMaterial({
                color: 0x008888
            }),
            0, // friction
            0.4 // restitution / bounciness
        );
        physijsGround = new Physijs.BoxMesh(new THREE.CubeGeometry(150, 3, 150), myGroundMaterial, 0);
        physijsGround.name = "ground";
        physijsGround.position.y = -15;
        scene.add(physijsGround);
    }

    function render(){
        scene.simulate();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    window.onLoad = initScene();
    return scene;

})();
