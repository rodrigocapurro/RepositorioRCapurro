/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
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
