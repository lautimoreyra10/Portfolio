import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 1;
camera.fov = 100;

// Variables y constantes
let objectShip;
let moveDirection = new THREE.Vector3(0, 0, 0);

// Render
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls( camera, renderer.domElement );
document.getElementById('container3D').appendChild(renderer.domElement);

// Escena
const loader = new GLTFLoader();
loader.load(('static/3DModels/sci-fi/scene.gltf'),
    function (gltf) {
        const object = gltf.scene;
        object.rotation.y += Math.PI;
        scene.add(object);
    },
    loader.load(('static/3DModels/ufo.glb'),
        function (gltf) {
            objectShip = gltf.scene;
            camera.position.set(0, 1, 3);
            scene.add(gltf.scene);
            animate();
            anotherAnimate();
        },
    )
);

// Luces
const lightShip = new THREE.DirectionalLight(0xffffff, 4);
lightShip.position.set(0, 10, 0);
lightShip.castShadow = true;
scene.add(lightShip);

const bottomLight = new THREE.DirectionalLight(0xffffff, 1);
bottomLight.position.set(100, 0, 0);
bottomLight.castShadow = true;
scene.add(bottomLight);

// Movimiento
function animate() {
    if (objectShip) {
        // Actualiza la posición del objeto
        objectShip.position.x += moveDirection.x * 0.1;
        objectShip.position.z += moveDirection.z * 0.1;

        // Hace que la cámara siga automáticamente el movimiento de la nave
        camera.position.copy(objectShip.position);
        camera.position.y += 0.75; // Ajusta la altura de la cámara con respecto al objeto
        camera.position.z += 3;
        renderer.render(scene, camera);
    }
    requestAnimationFrame(animate);
}

// Event listeners
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

// Ajustar el tamaño de la ventana
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Renderizar la escena
function anotherAnimate() {
    requestAnimationFrame(anotherAnimate);

    if (objectShip) {
        objectShip.position.x += moveDirection.x * 0.1;
        objectShip.position.z += moveDirection.z * 0.1;
    }

    renderer.render(scene, camera);
}

// Llamada inicial para comenzar la animación
animate();
