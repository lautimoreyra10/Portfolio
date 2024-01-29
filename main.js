import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//escena
const scene = new THREE.Scene();
// camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.fov = 100;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
const objToRender = 'ship';
//Render
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true permite tener background transparente
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('container3D').appendChild(renderer.domElement);
const loader = new GLTFLoader();
loader.load(('static/3DModels/sci-fi/scene.gltf'),
    function (gltf) {
        object = gltf.scene;
        object = objToRender
        console.log(object);
        scene.add(gltf.scene);
        animate(); // Llama a animate() después de cargar el modelo
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
);
loader.load(('static/3DModels/ufo.glb'),
    function (gltf) {
        object = gltf.scene;
        scene.add(gltf.scene);
        animate(); // Llama a animate() después de cargar el modelo
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    },
);

const lightShip = new THREE.DirectionalLight(0xffffff, 60);
lightShip.position.set(0, 10, 0)
lightShip.castShadow = true;
scene.add(lightShip);
/* const sphereGeometry = new THREE.SphereGeometry(1);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere); */

let controls = new OrbitControls(camera, renderer.domElement);

controls = new OrbitControls(camera, renderer.domElement);

const topLight = new THREE.Light(0xffffff, 1); // color, intensidad
topLight.position.set(0, 0, 0); //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const bottomLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensidad
bottomLight.position.set(0, -10, 0); //top-left-ish
bottomLight.castShadow = true;
scene.add(bottomLight);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
/* material.receiveShadow = true; */
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        object.position.x += 0.25;
    } else if (event.key === 'ArrowRight') {
        object.position.x -= 0.25;
    } else if (event.key === 'ArrowUp') {
        object.position.z += 0.25;
    } else if (event.key === 'ArrowDown') {
        object.position.z -= 0.25;
    }
});
function checkCollision() {
    var raycaster = new THREE.Raycaster(object.position, new THREE.Vector3(0, 0, -1));
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