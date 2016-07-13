


( () => {


	const cancelAccount = ($scope, $mdDialog ) => {

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
		}


		setup()



	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'CancelAccountCtrl', cancelAccount )
} )()
