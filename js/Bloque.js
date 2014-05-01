function Bloque(){
}

Bloque.prototype.x = 0;
Bloque.prototype.y = 0;
Bloque.prototype.imagen = null;

Bloque.prototype.load = function(img_src){

	this.imagen = new Image();
	this.imagen.src = img_src;
};

Bloque.prototype.getImagen = function(){
													return this.imagen;
												};
										
Bloque.prototype.show = function(){
										Painter.draw( this.imagen, this.x, this.y);
									};
									
Bloque.prototype.colision = function(otro_bloque){
										if( otro_bloque.getImagen() == null || this.getImagen() == null ){
											return false;
										}

										var en_x = false;
										var en_y = false;
										
										if( ( this.x >= otro_bloque.x && this.x <= otro_bloque.x + otro_bloque.getImagen().width )
											|| ( this.x + this.getImagen().width >= otro_bloque.x && this.x + this.getImagen().width <= otro_bloque.x + otro_bloque.getImagen().width ) ){
											en_x = true;
										}
										
										if( ( this.y >= otro_bloque.y && this.y <= otro_bloque.y + otro_bloque.getImagen().height )
											|| ( this.y + this.getImagen().height >= otro_bloque.y && this.y + this.getImagen().height <= otro_bloque.y + otro_bloque.getImagen().height ) ){
											en_y = true;
										}
										
										return ( en_x && en_y ) ;
									};