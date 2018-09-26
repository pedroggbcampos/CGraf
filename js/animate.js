function chairmov(){
	'use strict';
	
}

function do_wireframe(){
	'use strict';

	scene.traverse(
		function (node) {
			if (node instanceof THREE.Mesh) {
				node.material.wireframe = !node.material.wireframe;
			}
		}
	);
	wireframe_on = 0;
}

function animate(){
	'use strict';
	
	if(clock.running){
		if (wireframe_on) do_wireframe();
		if (first) {
			first_camera();
			first = 0;
		}
		if (second){
			second_camera();
			second = 0;
		}
		if (third){ 
			third_camera();
			third = 0;
		}
		if (fourth){ 
			fourth_camera();
			fourth = 0;
		}
	}
	render();
	requestAnimationFrame(animate);
}