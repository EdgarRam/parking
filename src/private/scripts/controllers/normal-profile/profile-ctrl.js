


( () => {


	const normalProfile = ($scope, ToastSrv, ModalSrv) => {


		const setup = () => {
			setupVars();
		}



		$scope.editProfile = () => {
			ModalSrv.editProfile( $scope.user )
			.then(
				() => {
					ToastSrv.showSimple("Se han actualizado los datos correctamente")
				}
			)
		}



		$scope.cancelAccount = () => {
			ModalSrv.cancelAccount()
			.then(
				() => {
					ToastSrv.showSimple("Cuenta cancelada")
				}
			)
		}



		const setupVars = () => {
			$scope.user = {
				full_name: "Cristian Ramirez",
				phone: "9615485652",
				email: "cris@gmail.com",
				carDefault: "IOS8545"
			}
		}



		setup()
	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'NormalProfileCtrl', normalProfile )
} )()
