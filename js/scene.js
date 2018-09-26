function createScene(){
	'use strict';

	scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));
    
    createTable(0, -15, -20);
    createBall(0, -15, 4);
	createLamp(-35, -15, 5);
    createChair(0, -15, 20);

}
