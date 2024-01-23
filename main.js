import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

//escena
const scene = new THREE.Scene();
// camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.lookAt(new THREE.Vector3(0, 0, 0));

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;

let controls;

let objToRender = 'ship'
const loader = new GLTFLoader();

loader.load(('static/3DModels/scene.gltf'), function(gltf){
    object = gltf.scene;
    console.log(object);
    scene.add(gltf.scene);
},
function(xhr){
    console.log((xhr.loaded / xhr.total * 100)+ '% loaded');
},function (error){
    console.error(error);
});


//Render
const renderer = new THREE.WebGLRenderer({alpha:true}); // Alpha: true permite tener background transparente
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('container3D').appendChild(renderer.domElement);

const topLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensidad
topLight.position.set(0,0,0); //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const bottomLight = new THREE.DirectionalLight(0xffffff, 1); // color, intensidad
bottomLight.position.set(0,0,0); //top-left-ish
bottomLight.castShadow = true;
scene.add(bottomLight);

if(objToRender === 'ship'){
    controls = new OrbitControls(camera, renderer.domElement);
}

function animate(){
    requestAnimationFrame(animate);
}
window.addEventListener("resize", function (){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();