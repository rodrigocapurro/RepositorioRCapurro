/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.random() * 3;
	eleccionMaquina = eleccionMaquina.toFixed(0);
	if(eleccionMaquina ==0){
		eleccionMaquina=1;
	}


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina == 1 ){
		mostrarMensaje('Hubo un Empate');
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('La maquina gana');
	}
	else{
		mostrarMensaje('Usted gana');
	}

}//FIN DE LA FUNCIÓN
function papel()
{
if(eleccionMaquina == 1 ){
		mostrarMensaje('Usted gana');
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('Hubo un Empate');
	}
	else{
		mostrarMensaje('La maquina gana');
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == 1 ){
		mostrarMensaje('La maquina gana');
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('Usted gana');
	}
	else{
		mostrarMensaje('Hubo un empate');
	}

}//FIN DE LA FUNCIÓN

function mostrarMensaje(mensaje){
	alert(mensaje);
}