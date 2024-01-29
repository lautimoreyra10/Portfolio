import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//escena
const scene = new THREE.Scene();
// camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 1
camera.fov = 100;
//variables y constantes
let object;
let objectShip;
//Render
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true permite tener background transparente
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('container3D').appendChild(renderer.domElement);
// escena
const loader = new GLTFLoader();
loader.load(('static/3DModels/sci-fi/scene.gltf'),
    function (gltf) {
        object = gltf.scene;
        object.rotation.y += Math.PI;
        scene.add(gltf.scene);
        animate(); // Llama a animate() después de cargar el modelo
    },
    //modelo nave
    loader.load(('static/3DModels/ufo.glb'),
        function (gltf) {
            objectShip = gltf.scene;
            scene.add(gltf.scene);
            animate(); // Llama a animate() después de cargar el modelo
        },
    )
);

//luces
const lightShip = new THREE.DirectionalLight(0xffffff, 60);
lightShip.position.set(0, 10, 0)
lightShip.castShadow = true;
scene.add(lightShip);

const bottomLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensidad
bottomLight.position.set(0, 0, 0); //top-left-ish
bottomLight.castShadow = true;
scene.add(bottomLight);
//controles camara
let controls = new OrbitControls(camera, renderer.domElement);
controls = new OrbitControls(camera, renderer.domElement);

//movimiento
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
// resize por pantalla
/* material.receiveShadow = true; */
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

let moveDirection = new THREE.Vector3(0, 0, 0);
animate();
function handleKeyDown(event) {
    switch (event.key) {
        case 'ArrowUp':
            moveDirection.z = -0.25;
            break;
        case 'ArrowDown':
            moveDirection.z = 0.25;
            break;
        case 'ArrowRight':
            moveDirection.x = 0.25;
            break;
        case 'ArrowLeft':
            moveDirection.x = -0.25;
            break;

    }
}
function handleKeyUp(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
            moveDirection.z = 0;
            break;
        case 'ArrowLeft':
        case 'ArrowRight':
            moveDirection.x = 0;
            break;
    }
}
window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);
function anotherAnimate() {
    requestAnimationFrame(anotherAnimate);

    objectShip.position.x += moveDirection.x * 0.1;
    objectShip.position.z += moveDirection.z * 0.1;
    renderer.render(scene, camera);
}
anotherAnimate();

function checkCollision() {
    const raycaster = new THREE.Raycaster(object.position, new THREE.Vector3(0, 0, -1));
    const rayDirectionLeft = new THREE.Vector3(-1, 0, 0);
    raycaster.set(camera.position, rayDirectionLeft);
    const rayDirectionRight = new THREE.Vector3(1, 0, 0);
    raycaster.set(camera.position, rayDirectionRight);
    const intersects = raycaster.intersectObjects(collidableObjects);
    var collidableObjects = [object];
    if (intersects.length > 0) {
        // Se ha producido una colisión, haz algo aquí
        const firstIntersectedObject = intersects[0].object;
        console.log('Colisión con:', firstIntersectedObject);
    } else {

    }
}