


( () => {


	const carDetail = ($scope, $mdDialog, localCars) => {

		const setup = () => {
			setupVars()
		}

		const setupVars = () => {
			$scope.car = localCars
		}


        $scope.closeDialog = function() {
            $mdDialog.hide()
        }


		setup()

	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'CarDetailCtrl', carDetail )
} )()
