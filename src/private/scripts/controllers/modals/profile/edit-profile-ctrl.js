


( () => {


	const editProfile = ($scope, $mdDialog, localUser ) => {

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
			$scope.user = localUser
		}


		setup()



	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'EditProfileCtrl', editProfile )
} )()
