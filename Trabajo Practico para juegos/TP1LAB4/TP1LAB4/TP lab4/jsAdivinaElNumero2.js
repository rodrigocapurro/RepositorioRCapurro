/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 15;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.random() * 10;
	 numeroSecreto = numeroSecreto.toFixed(0);
	 if(numeroSecreto == 0){
	 	numeroSecreto = 1;
	 }
	var numero =  document.getElementById('numero');
	numero.removeAttribute('readonly');
	numero.value ='';
	numero.attributes['placeholder'].value = "Ingrese numero";
	document.getElementById('btnVerificar').removeAttribute('disabled');
	actualizarContador(15);

}

function verificar()
{
	var numeroActual = document.getElementById('numero').value;

	if(numeroActual< 1 || numeroActual >100){
		mostrarMensaje("El numero ingresado debe estar entre 1 y 100");
		return;
	}

	if(contadorIntentos == 0){

		
		var faltantes = numeroActual - numeroSecreto;

		 if(faltantes < 0){
		mostrarMensaje('Excedio el limite de intentos, debe volver a comenzar, le faltaron ' + faltantes * -1 + '  puntos para llegar al numero secreto');
		}
		else if (faltantes >0){
		mostrarMensaje('Excedio el limite de intentos, debe volver a comenzar, se paso por ' + faltantes + '  puntos del numero secreto');
		}

		var numero =  document.getElementById('numero');
		numero.setAttribute('readonly','readonly');
		numero.value='';
		numero.attributes['placeholder'].value = "Presione Comenzar para habilitar los controles";
		document.getElementById('btnVerificar').setAttribute('disabled','disabled');
	}
	else{

		actualizarContador(contadorIntentos - 1);

	}

	if(numeroSecreto == numeroActual){

		verificarIntendoYMostrarMensaje(contadorIntentos);
	}

}

function actualizarContador(intentos){

		contadorIntentos = intentos;
		document.getElementById('intentos').attributes['placeholder'].value = contadorIntentos + ' intentos';
	}

	function verificarIntendoYMostrarMensaje(intento){
		var totalIntento = 15 - intento;
		if(totalIntento == 1){
			mostrarMensaje('total intentos: ' + totalIntento + ' -- usted es un Psíquico');
		}
		else if(totalIntento ==2){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- excelente percepción');
		}
		else if(totalIntento ==3){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- Esto es suerte');
		}
		else if(totalIntento ==4){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- Excelente técnica');
		}
		else if(totalIntento ==5){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- usted está en la media');
		}
		else if(totalIntento >= 6 && totalIntento <=10){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- falta técnica');
		}
		else if(totalIntento > 10){
			mostrarMensaje('total intentos: '  + totalIntento + ' -- afortunado en el amor');
		}
	}

	function mostrarMensaje(mensaje){
		alert(mensaje);
	}