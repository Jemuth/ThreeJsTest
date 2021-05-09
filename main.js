// Find the latest version by visiting https://cdn.skypack.dev/three.
      
import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'

// Definiendo camara, ventana de render y escena 
const scene = new THREE.Scene();
const camera = new THREE.
  PerspectiveCamera(
    75, // FOV (Field of view)
    innerWidth / innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane(Que tan cerca un objeto debe estar de la camara antes de ser clipeado)
    1000);  // Far Clipping Plane(Que tan lejos un objeto debe estar de la camara antes de ser clipeado)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight); // Recordar remover el margen por defecto del navegador
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement); // Adjuntando la ventana de renderer al documento

new OrbitControls(camera, renderer.domElement) // Añadiendo Orbit Control
camera.position.z = 50

// Definiendo geometria y material a incorporar

const boxGeometry = new THREE.BoxGeometry
(.5, .5, .5);
const boxGeometry2 = new THREE.BoxGeometry
(.5, .5, .5);
const boxGeometry3 = new THREE.BoxGeometry
(.5, .5, .5);
const material = new THREE.MeshBasicMaterial
({ color: 0x00FF00 });
const material2 = new THREE.MeshBasicMaterial
({ color: 0xDB35D6 });
const mesh = new THREE.Mesh(boxGeometry, material);
const mesh2 = new THREE.Mesh(boxGeometry2, material2);

// Creando una geometria con Bezziers y extrude

const shape = new THREE.Shape(); // Definiendo una forma por medio de bezziers
const x = -2.5;
const y = -5;
shape.moveTo(x + 2.5, y + 5);
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

const extrudeSettings = { // Configuracion de extrusion
  steps: 2,  


  depth: 2,  


  bevelEnabled: true,  


  bevelThickness: 1,  


  bevelSize: 1,  


  bevelSegments: 2,  


};

const corazon = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material3 = new THREE.MeshBasicMaterial
({ color: 0xB6A94 });
const mesh4 = new THREE.Mesh(corazon, material3);


// Definiendo un material tipo phong con wireframes

const phong = new THREE.MeshPhongMaterial( {
  color: 0xff0000,
  polygonOffset: true,
  polygonOffsetFactor: 1, // positive value pushes polygon further away
  polygonOffsetUnits: 1
} );
const mesh3 = new THREE.Mesh( boxGeometry3, phong );
const geo = new THREE.EdgesGeometry( mesh3.geometry ); // or WireframeGeometry
const mat = new THREE.LineBasicMaterial( { color: 0xffffff } );
const wireframe = new THREE.LineSegments( geo, mat );
mesh3.add( wireframe );

// Definiendo


// Creando la escena 

scene.add(mesh,mesh2,mesh3,mesh4);
camera.position.z = 2;
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh4.rotation.z = Math.PI;
  mesh4.rotation.x = Math.PI/13;
  mesh.rotation.x += 0.01;
  mesh2.rotation.x += 0.03;
  mesh3.rotation.x += 0.02;
  mesh.rotation.y += 0.01;
  mesh2.rotation.y += 0.03;
  mesh2.rotation.y += 0.02;
  mesh4.rotation.y += 0.02;
  mesh2.position.set(2, 0, 0);
  mesh3.position.set(-2, 0, 0);
  mesh4.position.set(0, 1, 0);
  mesh4.scale.set(0.05, 0.05, 0.05);
};

animate()

