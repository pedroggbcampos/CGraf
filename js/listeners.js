 function onResize(){
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);

	if(window.innerHeight > 0 && window.innerWidth > 0){
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.updateProjectionMatrix();
	}

}

function onKeyDown(e){
	'use strict';

	switch(e.keyCode){
		case 65: //A
		case 97: //a
			wireframe_on=1;
			break;
		case 49: // 1
			first=1;
			break;
		case 50: // 2
			second=1;
			break;
		case 51: // 3
			third=1;
			break;
		case 52: // 4
			fourth=1;
			break;
		case 37: // left_arrow

			break;
		case 38: // up_arrow

			break;
		case 39: // right_arrow

			break;
		case 40: // down_arrow

			break;
	}
}

function onKeyUp(e){
	'use strict'
	
	switch(e.keyCode){
		case 37: // left_arrow

			break;
		case 38: // up_arrow

			break;
		case 39: // right_arrow

			break;
		case 40: // down_arrow

	}
}