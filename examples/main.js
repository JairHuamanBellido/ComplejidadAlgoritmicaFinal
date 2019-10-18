import * as THREE from "../build/three.module.js";
import { Cube } from "../Figuras/Cube.js";
import { ShadowMesh } from "./jsm/objects/ShadowMesh.js";
import { Ground } from "../Figuras/Ground.js";
import { OrbitControls } from "./jsm/controls/OrbitControls.js";

const SetupScene = controls => {
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.05;

	controls.screenSpacePanning = false;

	controls.minDistance = 2;
	controls.maxDistance = 3000;

	controls.maxPolarAngle = Math.PI * 2;
};

var sunLight = new THREE.DirectionalLight("rgb(255,255,255)", 1);

var cubeshadow, cubeshadow2;
var camera, controls, scene, renderer;

var cube;
var planeConstant = 0.01; // this value must be slightly higher than the groundMesh's y position of 0.0
var normalVector = new THREE.Vector3(0, 1, 0);
var groundPlane = new THREE.Plane(normalVector, planeConstant);
var lightPosition4D = new THREE.Vector4();
init();
//render(); // remove when using next line for animation loop (requestAnimationFrame)
animate();

function init() {
	scene = new THREE.Scene();
	scene.background = new THREE.Color("#22264f");
	// scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(
		60,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.set(200, 100, 0);

	controls = new OrbitControls(camera, render.domElement);
	SetupScene(controls);

	sunLight.position.set(400, 200, -1);
	sunLight.lookAt(scene.position);
	scene.add(sunLight);

	lightPosition4D.x = sunLight.position.x;
	lightPosition4D.y = sunLight.position.y;
	lightPosition4D.z = sunLight.position.z;
	// amount of light-ray divergence. Ranging from:
	// 0.001 = sunlight(min divergence) to 1.0 = pointlight(max divergence)
	lightPosition4D.w = 0.001;

	let ground = new Ground(1000, 0.01, 1000, "#33ddff");
	ground.setPosition(0.0);

	scene.add(ground.getModel());

	let cubega = new Cube(20, 20, 20, "#33ffaa");
	cubega.setPosition(100, 100, 0);
	scene.add(cubega.getModel());
	// cubeshadow = new ShadowMesh(cube);
	// scene.add(cubeshadow);

	window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

	//cubeshadow.update(groundPlane, lightPosition4D);
	render();
}

function render() {
	renderer.render(scene, camera);
}
