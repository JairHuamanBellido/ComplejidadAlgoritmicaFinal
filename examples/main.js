
import { Ground } from '../Figuras/Ground.js'



import Stats from './jsm/libs/stats.module.js';

import * as THREE from "../build/three.module.js";
import { Cube } from '../Figuras/Cube.js';
import { ShadowMesh } from "./jsm/objects/ShadowMesh.js";
import { OrbitControls } from "./jsm/controls/OrbitControls.js";

import escena from "../Figuras/Scene.js";
import {  ContainerCube} from "../Figuras/Container.js";

var hemiLight;

var camera, scene, renderer;
var container, stats;
init();
animate();
function init() {
	container = document.createElement('div');
	document.body.appendChild(container);


	container = document.getElementById('container');
	// camera
	camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 10000);
	camera.position.set(0, 50, 500);
	// scene



	hemiLight = new THREE.HemisphereLight(0xffffff, '#000000', 0.6);
	hemiLight.color.setHSL(0.6, 1, 0.6);
	hemiLight.groundColor.setHSL(0.095, 1, 0.75);
	hemiLight.position.set(0, 50, 0);
	escena.add(hemiLight);
	// light
	// var light = new THREE.DirectionalLight(0xffffff);
	// light.position.set(100, 100, 90);

	
	// escena.add(light);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);

	container.appendChild(renderer.domElement);
	renderer.gammaInput = true;
	renderer.gammaOutput = true;
	renderer.shadowMap.enabled = true;
	// controls
	var controls = new OrbitControls(camera, renderer.domElement);
	controls.maxPolarAngle = Math.PI * 0.5;
	controls.minDistance = 2;
	controls.maxDistance = 800000;


	let ground = new Ground(1000,1000,'#000000');
	ground.setPosition(0.0)
	escena.add(ground.getModel());

	// let jail = new ContainerCube(20,20,20,'#000000');
	// jail.setPosition(0,20,0);
	// escena.add(jail.getModel());

	

}
//
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize((window.innerWidth), window.innerHeight);
}
//
function animate() {
	requestAnimationFrame(animate);
	// var time = Date.now();
	// var windStrength = Math.cos( time / 7000 ) * 20 + 40;
	// windForce.set( Math.sin( time / 2000 ), Math.cos( time / 3000 ), Math.sin( time / 1000 ) );
	// windForce.normalize();
	// windForce.multiplyScalar( windStrength );
	// simulate( time );
	render();
	// stats.update();
}
function render() {

	renderer.render(escena, camera);
}