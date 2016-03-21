/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto =  'Rojo';
var tiempoInicio = 0;
function comenzar()
{
	setInterval(function(){
		tiempoInicio = tiempoInicio + 1;
	},1000);
	
	document.getElementById('ColorElejido').value = ColorSecreto;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	if(colorParametro == ColorSecreto.toLowerCase()){
		alert('Acertaste!!! \n\n tiempo de demora: ' + tiempoInicio + ' Segundos');

	}
	else{
		alert('El color elejido es incorrecto, tiempo de demora: ' + tiempoInicio + ' Segundos');
	}

}//FIN DE LA FUNCIÓN
