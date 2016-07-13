


( () => {


	const selectSystemCtrl = ($scope, $state, $mdDialog ) => {



		const setup = () => {
            setupVars()
		}



        const setupVars = () => {
            $scope.options =[
                {
                    name: "Administrar sistema",
                    url : 'admin'
                },
                {
                    name: "Administrar sistema",
                    url : 'normal'
                }
            ]
        }



        $scope.redirect = ( _state ) => {
            $state.go( _state )
            $mdDialog.hide()
        }



		setup()
	}



    angular.module( 'webappParkingPrivate' )
		.controller( 'selectSystemCtrl', selectSystemCtrl )
} )()
