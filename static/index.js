import * as THREE from './node_modules/three/build/three.module.js';


const container = document.querySelector(".home-main-section .img-wrapper");

const renderer = new THREE.WebGL1Renderer();


const WIDTH = document.getElementById("img-tst").clientWidth;
const HEIGHT = document.getElementById("img-tst").clientHeight;

renderer.setSize(WIDTH, HEIGHT);

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1
const FAR = 10000;


const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
camera.position.set(0, 0, 500);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xCEE9F1)
scene.add(camera)

container.appendChild(renderer.domElement);


const RADIUS = 200
const SEGMENTS = 50;
const RINGS = 50;

const globe = new THREE.Group();
scene.add(globe)

var loader = new THREE.TextureLoader();

loader.load(
    'images/globe-blue_ex.jpg', function (texture) {
        var sphere = new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS);


        var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });

        var mesh = new THREE.Mesh(sphere, material);

        globe.add(mesh);
    }

);

globe.position.z = -300;


function animate() {
    globe.rotation.x += 0.003;
    globe.rotation.y += 0.003;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);


var lastMove = [WIDTH / 2, HEIGHT / 2];



function rotateOnMove(e) {



    const moveX = (e.clientX - lastMove[0]);
    const moveY = (e.clientY - lastMove[1]);

    globe.rotation.y += (moveX * 0.003)
    globe.rotation.x += (moveY * 0.003)

    lastMove[0] = e.clientX;
    lastMove[1] = e.clientY;
}


document.getElementById("img-tst").addEventListener('mousemove', rotateOnMove);
