var Keyboard = {};

Keyboard.KEY_UP = 38;
Keyboard.KEY_DOWN = 40;
Keyboard.KEY_LEFT = 37;
Keyboard.KEY_RIGHT = 39;

Keyboard.debug_down = false;
Keyboard.debug_press = false;
Keyboard.debug_up = false;
Keyboard.key_down = -1;
Keyboard.key_press = -1;
Keyboard.key_up = -1;

document.onkeydown = engine_key_down;
document.onkeypress = engine_key_press;
document.onkeyup = engine_key_up;

function engine_key_down(e){
	e = e || window.event;
	
	if( Keyboard.debug_down == true ){
		console.log("down>"+e.keyCode);
	}
	
	Keyboard.key_press = -1;
	Keyboard.key_up = -1;
	Keyboard.key_down = e.keyCode;
	
	try{
		key_down(e);
	}catch(ex){
	}
	
}

function engine_key_press(e){
	e = e || window.event;
	
	if( Keyboard.debug_press == true ){
		console.log("press>"+e.keyCode);
	}
	
	Keyboard.key_press = e.keyCode;
	
	try{
		key_press(e);
	}catch(ex){
	}
}

function engine_key_up(e){
	e = e || window.event;
	
	if( Keyboard.debug_up == true ){
		console.log("up>"+e.keyCode);
	}
	
	Keyboard.key_down = -1;
	Keyboard.key_up = e.keyCode;
	
	try{
		key_up(e);
	}catch(ex){
	}
	
}