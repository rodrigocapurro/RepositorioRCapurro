var angApp = angular.module("MiApp", []);

angApp.controller('contPPT2', function($scope){

$scope.ganadas = 0;
$scope.perdidas = 0;
$scope.empatadas = 0;

$scope.comenzar = function(){

	$scope.eleccionMaquina = Math.random() * 3;
	$scope.eleccionMaquina = $scope.eleccionMaquina.toFixed(0);
	if($scope.eleccionMaquina ==0){
		$scope.eleccionMaquina=1;
	}
	
};

$scope.papel = function (){
	
		$scope.comenzar();
		$scope.eleccionHumano = 2 ;
		if($scope.eleccionMaquina < $scope.eleccionHumano ){
			alert('usted gana');
			$scope.ganadas = $scope.ganadas + 1;
		}
		else if ($scope.eleccionMaquina == $scope.eleccionHumano){
			alert('Hubo un Empate');
			$scope.empatadas = $scope.empatadas +1;
		}
		else{
			alert('La maquina gana');
			$scope.perdidas = $scope.perdidas + 1;
		}
		
	}


});