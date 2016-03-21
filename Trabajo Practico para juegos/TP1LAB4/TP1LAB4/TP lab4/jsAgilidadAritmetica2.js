/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador=0;
function comenzar()
{

	var primerNumero = (Math.random() * 10).toFixed(0);
	var segundoNumero = (Math.random() * 10).toFixed(0);
	
	document.getElementById('PrimerNumero').value= primerNumero;
	document.getElementById('SegundoNumero').value= segundoNumero;
	var operacion = (Math.random() * 4).toFixed(0);
	if(operacion==0){
		operacion= 1;
	}

	var simboloOperacion = obtenerSimboloOperacion(operacion);

	document.getElementById('Operador').value = simboloOperacion;

	if(simboloOperacion == '/' && segundoNumero ==0){
		respuesta = 'división por 0';
	}
	else{
		respuesta = eval(primerNumero + ' ' + simboloOperacion + ' ' + segundoNumero);
	}
	
	setTimeout(function(){
		
		if(temporizador = 4){
		
			alert('tiempo excedido, resultado de la operacion: ' + respuesta);
			location.reload();
		
		}
	
		temporizador = temporizador + 1;
	
	},4000);

}//FIN DE LA FUNCIÓN
function Responder()
{
	if(respuesta == document.getElementById('Respuesta').value){
	
	alert('Acertaste!!!');
		
	}

	else if(respuesta == 'división por 0'){
		alert('refresque la pagina para actualizar los numero a calcular, ya que no se puede dividir por 0');
	}
	else if(respuesta != document.getElementById('Respuesta').value){
		alert('El valor ingresado es incorrecto')
	}

}//FIN DE LA FUNCIÓN

function obtenerSimboloOperacion(operacion){
	if(operacion==1){
		return '+';
	}
	else if(operacion==2){
		return '-';
	}
	else if(operacion==3){
		return '*';
	}
	else if(operacion==4){
		return '/';
	}
}

function timeout(){

	setTimeout(function(){

	});

}
