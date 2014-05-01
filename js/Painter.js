var Painter = {};
Painter.canvas = null;

Painter.clear = function(){
	Painter.canvas.width = Painter.canvas.width + 1;
	Painter.canvas.width = Painter.canvas.width - 1;
};

/*
	X y Y son casteados a enteros para evitar mostrar antialiasing.
*/
Painter.draw = function(img, pos_x, pos_y){
	if( img != null ){
		Painter.canvas.getContext("2d").drawImage(img, parseInt( pos_x ), parseInt( pos_y ));
	}
};

Painter.load = function(img_src){
	var img = new Image();
	img.src = img_src;
	
	/*img.onload = function(){
		return img;
	}*/
	
	return img;
};