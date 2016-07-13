


( () => {


	const editCar = ($scope, $mdDialog, ToastSrv, localCar, GetDataSrv) => {

		const setup = () => {
			setupVars()
			setInitNanoScroller()
		}



        $scope.accept = function( _form ) {
			if( _form.$valid ){
				return $mdDialog.hide( $scope.car )
			}

			ToastSrv.showSimple('Verifique los datos de su formulario', 'bottom left')
        }



        $scope.cancel = function() {
            $mdDialog.cancel()
        }



		const setInitNanoScroller = () => {
			setTimeout(function () {
				$('#scroller-add-car .nano').nanoScroller()
			}, 800);
		}



		const setupVars = () => {
			$scope.car = localCar

			$scope.listBrands = GetDataSrv.getListBrands()
			$scope.listTypes = GetDataSrv.getListTypes()
		}


		setup()



	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'EditCarCtrl', editCar )
} )()
