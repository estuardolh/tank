var Engine = {};

Engine.hilo = null;
Engine.start = function(){
	Engine.init();
	
	Engine.hilo = setInterval(function(){
							Engine.draw();
							Engine.update();
						}, 1000 / 60 );
};

Engine.init = init;

Engine.draw = draw;

Engine.update = update;