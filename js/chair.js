function addChairFoot(obj, x, y, z, rotation) {
    'use strict';
    geometry = new THREE.CylinderGeometry( 1, 1, 12, 4 );
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 11, z);
    obj.add(mesh);
}


function addChairLeg(obj, x, y, z, rotation) {
    'use strict';
    geometry = new THREE.CubeGeometry(16, 1, 1).rotateY(rotation)
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 4.5, z);
    obj.add(mesh);
}

function addChairWheel(obj, x, y, z) {
    'use strict';

    geometry = new THREE.TorusGeometry(0.8, 1.2, 4, 4);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 2, z);
    obj.add(mesh);
}

function addChairSit(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(10, 1, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 17.5, z);
    obj.add(mesh);
}

function addChairBackRest(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(1, 20, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x - 4.5, y + 28, z);
    obj.add(mesh);
}

function addChairArm(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(10, 2, 1);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 23, z);
    obj.add(mesh);
}


function createChair(x, y, z) {
    'use strict';
    
    var chair = new THREE.Object3D();
    
    material = new THREE.MeshBasicMaterial({ color: "green", wireframe: true });
    
    addChairFoot(chair, 0, 0, 0);
    addChairLeg(chair, 0, 0, 0, 0);
    addChairLeg(chair, 0, 0, 0, Math.PI/2);
    addChairWheel(chair, 7.8, 0, 0);
    addChairWheel(chair, -7.8, 0, 0);
    addChairWheel(chair, 0, 0, 7.8);
    addChairWheel(chair, 0, 0, -7.8);
    addChairSit(chair, 0, 0, 0);
    addChairBackRest(chair, 0, 0, 0)
    addChairArm(chair, 0, 0, -4.5)
    addChairArm(chair, 0, 0, 4.5)
    
    chair.rotateY(Math.PI/4 - 0.1)
    scene.add(chair);
    
    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}
