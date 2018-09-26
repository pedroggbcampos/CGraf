function first_camera(){
	'use strict';

	camera = new THREE.OrthographicCamera( window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, 1, 1000 );

	camera.position.x = 0;
	camera.position.y = 30;
	camera.position.z = 0;
	camera.lookAt(scene.position);
}

function second_camera(){
	'use strict';

	camera = new THREE.OrthographicCamera( window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, 1, 1000 );

	camera.position.x = 30;
	camera.position.y = 0;
	camera.position.z = 0;
	camera.lookAt(scene.position);
}

function third_camera(){
	'use strict';

	camera = new THREE.OrthographicCamera( window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, 1, 1000 );

	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 30;
	camera.lookAt(scene.position);
}

function fourth_camera() {
    'use strict';
	
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
	
    camera.position.x = 40;
    camera.position.y = 30;
    camera.position.z = 29;
    camera.lookAt(scene.position);
}