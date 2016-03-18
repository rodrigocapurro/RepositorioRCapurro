  function esFechaValida(dia, mes, año) {

            var fecha;

            // En javascript, el mes empieza en la posicion 0 y termina en la 11
            //   siendo 0 el mes de enero
            // Por esta razon, tenemos que restar 1 al mes

            mes = mes - 1;

            fecha = new Date(año, mes, dia);

            //Devuelva true o false...
            return ((dia == fecha.getDate()) && (mes == fecha.getMonth()) && (año == fecha.getFullYear()));

        }

        function validar_fecha(fecha) {


            var values = fecha.split("/");

            if (esFechaValida(values[0], values[1], values[2])) {
                return true;
            }
            else {
                return false;
            }

        }

        function calcularEdad(idControlFecha) {

            var fecha = document.getElementById(idControlFecha).value;

            if (validar_fecha(fecha) == true) {

                // Si la fecha es correcta, calculamos la edad
                var values = fecha.split("/");

                var dia = values[0];
                var mes = values[1];
                var ano = values[2];

                // obtenemos los valores actuales

                var fecha_hoy = new Date();

                var ahora_ano = fecha_hoy.getYear();
                var ahora_mes = fecha_hoy.getMonth() + 1;
                var ahora_dia = fecha_hoy.getDate();

                // realizamos el calculo
                var edad = (ahora_ano + 1900) - ano;

                if (ahora_mes < mes) {
                    edad--;
                }

                if ((mes == ahora_mes) && (ahora_dia < dia)) {
                    edad--;
                }

                if (edad > 1900) {
                    edad -= 1900;
                }

                // calculamos los meses
                var meses = 0;
                if (ahora_mes > mes) {
                    meses = ahora_mes - mes;
                }

                if (ahora_mes < mes) {
                    meses = 12 - (mes - ahora_mes);
                }

                if (ahora_mes == mes && dia > ahora_dia) {
                    meses = 11;
                }

                // calculamos los dias
                var dias = 0;

                if (ahora_dia > dia) {
                    dias = ahora_dia - dia;
                }

                if (ahora_dia < dia) {

                    ultimoDiaMes = new Date(ahora_ano, ahora_mes, 0);
                    dias = ultimoDiaMes.getDate() - (dia - ahora_dia);

                }

                if (edad < 0) {
                    edad = 0;
                }
             return edad;

            }
            else {
               return 0;
            }

        }