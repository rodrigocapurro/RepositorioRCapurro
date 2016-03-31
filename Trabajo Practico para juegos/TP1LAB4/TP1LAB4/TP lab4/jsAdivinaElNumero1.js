/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos = 3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.random() * 100;
	 numeroSecreto = numeroSecreto.toFixed(0);
	 if(numeroSecreto == 0){
	 	numeroSecreto = 1;
	 }
	var numero =  document.getElementById('numero');
	numero.removeAttribute('readonly');
	numero.value ='';
	numero.attributes['placeholder'].value = "Ingrese numero";
	document.getElementById('btnVerificar').removeAttribute('disabled');
	resetearJuego(3);

}

function verificar()
{
	var numeroActual = document.getElementById('numero').value;

	if(numeroActual< 1 || numeroActual >100){
		mostrarMensjae("El numero ingresado debe estar entre 1 y 100");
		return;
	}
	if(numeroSecreto == numeroActual){

	mostrarMensjae('Felicitaciones, numero secreto acertado: ' + numeroSecreto);

	}

	if(contadorIntentos == 0){

		
		var faltantes = numeroActual - numeroSecreto;

		 if(faltantes < 0){
		mostrarMensjae('Excedio el limite de intentos, debe volver a comenzar, le faltaron ' + faltantes * -1 + '  puntos para llegar al numero secreto');
		}
		else if (faltantes >0){
		mostrarMensjae('Excedio el limite de intentos, debe volver a comenzar, se paso por ' + faltantes + '  puntos del numero secreto');
		}

		var numero =  document.getElementById('numero');
		numero.setAttribute('readonly','readonly');
		numero.value='';
		numero.attributes['placeholder'].value = "Presione Comenzar para habilitar los controles";
		document.getElementById('btnVerificar').setAttribute('disabled','disabled');
	}
	else{

		resetearJuego(contadorIntentos - 1);

	}

}

function resetearJuego(intentos){

		contadorIntentos = intentos;
		document.getElementById('intentos').attributes['placeholder'].value = contadorIntentos + ' intentos';
	}

	function mostrarMensjae(mensaje){
		alert(mensaje);
	}