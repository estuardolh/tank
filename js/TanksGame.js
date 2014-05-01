/*
	User code below
*/

var tank = new Tank();
var tank_friccion = 0.97;
var tank_vx = 2.5;
var tank_vy = 2.5;

var ladrillo = new Bloque();

var campo = [];

function init(){
	tank.load("./img/tank_up1.png");
	tank.img_up1 = Painter.load( "./img/tank_up1.png" );
	tank.img_up2 = Painter.load( "./img/tank_up2.png" );
	tank.img_down1 = Painter.load( "./img/tank_down1.png" );
	tank.img_down2 = Painter.load( "./img/tank_down2.png" );
	tank.img_right1 = Painter.load( "./img/tank_right1.png" );
	tank.img_right2 = Painter.load( "./img/tank_right2.png" );
	tank.img_left1 = Painter.load( "./img/tank_left1.png" );
	tank.img_left2 = Painter.load( "./img/tank_left2.png" );
	
	tank.y = Painter.canvas.width / 2 - tank.getImagen().width / 2;
	tank.x = Painter.canvas.height / 2 - tank.getImagen().height / 2;
	
	ladrillo.load("./img/ladrillo.png");
	
	campo = [ [ ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo ]
			  	  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]	
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, new Bloque, ladrillo ]
				  , [ ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo, ladrillo ]
				  ];
				  
	Mouse.handle_click(Painter.canvas, click);
}

function click(e){
	e = e || window.event;
	
	console.log("X: " + e.pageX+ ", Y: "+ e.pageY);
}

function draw(){

	Painter.clear();
	
	tank.show();
	
	for( var i = 0; i < campo.length ; i++ ){
		var columna = campo[ i ];
	
		for( var j = 0 ; j < columna.length ; j++ ){
			if( columna[ j ].getImagen() != null ){
				var img = columna[ j ].imagen;
				columna[ j ] = new Bloque();
				columna[ j ].imagen = img;
				columna[ j ].y = i * columna[ j ].getImagen().width;
				columna[ j ].x = j * columna[ j ].getImagen().height;
				
				columna[ j ].show();
			}
		}
	}
	
}

var cuenta = 0;
var dt = 6;
var fase_indice = 0;

function update(){
	var tmp_x = tank.x;
	var tmp_y = tank.y;
	
	tank.update();
	tank.updateTank(1);
	
	var key_expected = false;
	
	if( Keyboard.key_down == Keyboard.KEY_DOWN ){
		tank.vx = 0;
		tank.vy = tank_vy;
		key_expected = true;
		tank.go = tank.GOING.down;
		
	}else if( Keyboard.key_down == Keyboard.KEY_UP ){
		tank.vx = 0;
		tank.vy = - tank_vy;
		key_expected = true;
		tank.go = tank.GOING.up;
		
	}else if( Keyboard.key_down == Keyboard.KEY_LEFT ){
		tank.vx = - tank_vx;
		tank.vy = 0;
		key_expected = true;
		tank.go = tank.GOING.left;
		
	}else if( Keyboard.key_down == Keyboard.KEY_RIGHT ){
		tank.vx = tank_vx;
		tank.vy = 0;
		key_expected = true;
		tank.go = tank.GOING.right;
		
	}
	
	if( key_expected == true ){
		// rebote o no rebote.
		tank.friccion = tank_friccion;
	}
	
	if( procesa_colisiones() > 0 ){
		tank.x = tmp_x;
		tank.y = tmp_y;
	}
	
}

function procesa_colisiones(){
	var colisiones = 0;
	
	for( var i = 0; i < campo.length ; i++ ){
		var columna = campo[ i ];
	
		for( var j = 0 ; j < columna.length ; j++ ){
			if( columna[ j ] != null ){
				if( tank.colision( columna[ j ] )  == true || columna[ j ].colision( tank ) == true ){
					tank.vx = - tank.vx;
					tank.vy = - tank.vy;
					
					colisiones ++;
					
					return 1;
				}
			}
		}
	}
	return colisiones;
}

/*
function key_down(e){
	console.log("overload");
}

function key_press(e){
}

function key_up(e){
}*/
