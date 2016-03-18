/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
		ContadorDeEmpates = ContadorDeEmpates + 1;
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('La maquina gana');
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}
	else{
		mostrarMensaje('Usted gana');
		ContadorDeGanadas = ContadorDeGanadas + 1;
	}

	mostarResultado();
}//FIN DE LA FUNCIÓN
function papel()
{
if(eleccionMaquina == 1 ){
		mostrarMensaje('Usted gana');
		ContadorDeGanadas = ContadorDeGanadas + 1;
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('Hubo un Empate');
		ContadorDeEmpates = ContadorDeEmpates +1;
	}
	else{
		mostrarMensaje('La maquina gana');
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	mostarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina == 1 ){
		mostrarMensaje('La maquina gana');
		ContadorDePerdidas = ContadorDePerdidas + 1;
		
	}
	else if (eleccionMaquina == 2){
		mostrarMensaje('Usted gana');
		ContadorDeGanadas = ContadorDeGanadas + 1;
	}
	else{
		mostrarMensaje('Hubo un empate');
		ContadorDeEmpates = ContadorDeEmpates +1;
	}

	mostarResultado();
}//FIN DE LA FUNCIÓN

function mostrarMensaje(mensaje){
	alert(mensaje);
}

function mostarResultado()
{

	$('#ganadas').val(ContadorDeGanadas);
	$('#perdidas').val(ContadorDePerdidas);
	$('#empatadas').val(ContadorDeEmpates);

}