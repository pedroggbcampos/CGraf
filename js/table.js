/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

var ball;

function addTableLeg(obj, x, y, z) {
    'use strict';

    geometry = new THREE.CubeGeometry(2, 20, 2);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 10, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(60, 2, 30);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 21, z);
    obj.add(mesh);
}

function createBall(x, y, z) {
    'use strict';
    
    ball = new THREE.Object3D();
    ball.userData = { jumping: true, step: 0 };
    
    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
    geometry = new THREE.SphereGeometry(4, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    
    ball.add(mesh);
    ball.position.set(x, y + 4, z);
    
    scene.add(ball);
}


function createTable(x, y, z) {
    'use strict';
    
    var table = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: "pink", wireframe: true });
   
    addTableTop(table, 0, 0, 0);
    addTableLeg(table, -25, 0, -12);
    addTableLeg(table, -25, 0, 12);
    addTableLeg(table, 25, 0, 12);
    addTableLeg(table, 25, 0, -12);
    
    scene.add(table);
    
    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}