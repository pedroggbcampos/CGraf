var camera, scene, renderer, clock;

var geometry, material, mesh;

var chair, table, lamp;

var wireframe_on,  first, second, third, fourth;

function render(){
	'use strict';
	
	renderer.render(scene, camera);
}

function init(){
	'use strict';

	renderer = new THREE.WebGLRenderer({ antialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	first_camera();
	clock = new THREE.Clock();

	render();

	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);

	clock.start();
}