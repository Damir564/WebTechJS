import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { default as Stats } from "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js";

const clock = new THREE.Clock();
let scene = new THREE.Scene();

let vertices = [0, 0, 0, 10, 0, 0, 10, 0, 10, 0, 0, 10];

let indices = [2, 1, 0, 0, 3, 2];

let cameraTarget = new THREE.Vector3(0, 0.4, 0);

let geometry = new THREE.BufferGeometry();

geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(new Float32Array(vertices), 3)
);
geometry.setIndex(indices);
geometry.computeVertexNormals();

let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });

let mesh = new THREE.Mesh(geometry, material);
mesh.position.set(-5, 0, -5);


let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

camera.position.set(0, 1, 5);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const elapsedTime = clock.getElapsedTime();

camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
camera.position.z = Math.sin(elapsedTime * 0.5) * 2;
camera.lookAt(cameraTarget);

renderer.render(scene, camera);
