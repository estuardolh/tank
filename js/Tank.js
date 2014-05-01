function Tank(){
	BloqueMovil.call(this);
}
Tank.prototype = new BloqueMovil;
Tank.prototype.constructor = Tank();

Tank.prototype.img_up1 = null;
Tank.prototype.img_up2 = null;
Tank.prototype.img_down1 = null;
Tank.prototype.img_down2 = null;
Tank.prototype.img_right1 = null;
Tank.prototype.img_right2 = null;
Tank.prototype.img_left1 = null;
Tank.prototype.img_left2 = null;

Tank.prototype.GOING = {"right": 0, "left": 1, "up": 2, "down": 3};

Tank.prototype.go = 2;				// up
Tank.prototype.cuenta = 0;
Tank.prototype.fase_indice = 0;
Tank.prototype.intervalo = 10;

Tank.prototype.updateTank = function(dt){
														this.cuenta += dt;
														
														// evaluar estado
														if( this.cuenta < this.intervalo ){
															this.fase_indice = 0;
														}else{
															this.fase_indice = 1;
														}
														if( this.cuenta > this.intervalo * 2 ){
															this.false_indice = 0;
															
															this.cuenta = 0;
														}
														
														// imagen de estado
														var img;
														if( this.go == this.GOING.up ){
															if( this.fase_indice == 0 ){
																img = this.img_up1;
															}else{
																img = this.img_up2;
															}
														}else if( this.go == this.GOING.down ){
															if( this.fase_indice == 0 ){
																img = this.img_down1;
															}else{
																img = this.img_down2;
															}
														}else if( this.go == this.GOING.right ){
															if( this.fase_indice == 0 ){
																img = this.img_right1;
															}else{
																img = this.img_right2;
															}
														}else if( this.go == this.GOING.left ){
															if( this.fase_indice == 0 ){
																img = this.img_left1;
															}else{
																img = this.img_left2;
															}
														}
														
														// actualizar imagen actual
														this.imagen = img;
										};
										
Tank.prototype.shot = function(){
									
								};