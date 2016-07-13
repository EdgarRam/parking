


( () => {


	const deleteCar = ($scope, $mdDialog, localDeleteCar ) => {

		const setup = () => {
			setupVars()
		}



        $scope.accept = function( _form ) {
			$mdDialog.hide()
        }



        $scope.cancel = function() {
            $mdDialog.cancel()
        }



		const setupVars = () => {
			$scope.deleteCar = localDeleteCar
		}


		setup()



	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'DeleteCarCtrl', deleteCar )
} )()
