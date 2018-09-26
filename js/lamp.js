function addLampBase(obj, x, y, z){
	'use strict';

	geometry = new THREE.TorusGeometry(4, 6, 3, 20).rotateX(Math.PI/2)
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(x,y + 5.5,z);
	obj.add(mesh);
}

function addLampFoot(obj, x, y, z){
	'use strict';

	geometry = new THREE.CylinderGeometry( 1, 1, 40, 24 );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(x,y + 21,z);
	obj.add(mesh);
}

function addLampTop(obj, x, y, z){
	'use strict';

	geometry = new THREE.ConeGeometry( 8, 10,  20, 32);
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(x,y + 30,z);
	obj.add(mesh);
}


function createLamp(x,y,z){
	'use strict';

	var lamp = new THREE.Object3D();
	
	material = new THREE.MeshBasicMaterial({ color: "yellow", wireframe: true });
	
	addLampBase(lamp, 0, 0, 0);
	addLampFoot(lamp, 0, 7.5, 0);
	addLampTop(lamp, 0, 15, 0);


	scene.add(lamp);

	lamp.position.x = x;
	lamp.position.y = y;
	lamp.position.z = z;
}