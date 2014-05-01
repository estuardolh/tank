/*
	1. Definir clase y llamar constructor de padre
	2. Heredar
	3. Corregir puntero porque apunta a padre.
*/
function BloqueMovil(){
	Bloque.call( this );
}
BloqueMovil.prototype = new Bloque();
BloqueMovil.prototype.constructor = BloqueMovil();

BloqueMovil.prototype.vx = 0;
BloqueMovil.prototype.vy = 0;
BloqueMovil.prototype.friccion = 0;

BloqueMovil.prototype.update = function(){
											this.x = this.x + this.vx;
											this.y = this.y + this.vy;
											
											this.vx = this.vx * this.friccion;
											this.vy = this.vy * this.friccion;
											
											// please, stop it now
											if( Math.abs(this.vx) < 0.01 ){
												this.vx = 0;
											}
											if( Math.abs(this.vy) < 0.01 ){
												this.vy = 0;
											}
										};
										
BloqueMovil.prototype.print = function(){
											console.log("");
											console.log("BloqueMovil");
											console.log("===========");
											console.log("vx="+this.vx);
											console.log("vy="+this.vy);
										};