function Saludar(){
	alert($('p').text());
}

 function buscarFoto(idControl, event) {
            event.stopPropagation();
            event.preventDefault();
            idControlGlobal = idControl
            $("#searchFile") .click();
        }

 function quitarFoto(idcontrol, event) {

            switch (event.which) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    //parseo la ruta para volver a seleccionar la foto por defecto
                    //var ruta = location.pathname.replace("RegistroPacientes/CargarPaciente", "");
                    var img = document.getElementById(idcontrol);
                    img.src = "Imagenes/ingresarfoto.jpg"
                    break;
                default:
                    break;

            }
        }
