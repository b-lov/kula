import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(0.6, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

var xSpeed = 0.01;
var ySpeed = 0.01;

document.addEventListener('keydown', onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  var keyCode = event.which;
  if (keyCode == 87) {
    cube.position.y += ySpeed;
  } else if (keyCode == 83) {
    cube.position.y -= ySpeed;
  } else if (keyCode == 65) {
    cube.position.x -= xSpeed;
  } else if (keyCode == 68) {
    cube.position.x += xSpeed;
  } else if (keyCode == 32) {
    cube.position.set(0, 0, 0);
  }
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
