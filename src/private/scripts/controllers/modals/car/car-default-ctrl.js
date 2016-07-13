


( () => {


	const carDefault = ($scope, $mdDialog, localCarSelected ) => {

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
			$scope.carSelected = localCarSelected
		}


		setup()



	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'CarDefaultCtrl', carDefault )
} )()
