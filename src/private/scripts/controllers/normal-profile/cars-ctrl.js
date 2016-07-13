


( () => {


	const normalProfileCars = ($scope, ToastSrv, ModalSrv) => {


		const setup = () => {
			setupVars();
		}



		$scope.showTimeline = ( _car ) => {
			$scope.carTimeline = _car;
			setSelectCarTimeline( _car )
		}



		$scope.showCarDetails = ( _car ) => {
			ModalSrv.showCarDetails( _car )
		}



		$scope.selectDefaultAuto = ( _car ) => {
			ModalSrv.selectDefaultAuto( _car )
			.then(
				( _car ) => {
					ToastSrv.showSimple('Auto predeterminado cambiado')
				}
			)
		}




		$scope.removeCar = ( _car ) => {
			ModalSrv.deleteCar( _car )
			.then(
				( _car ) => {
					ToastSrv.showSimple('Auto eliminado correctamente')
				}
			)
		}



		$scope.editCar = ( _car ) => {
			ModalSrv.editCar( _car )
			.then(
				( _car ) => {
					ToastSrv.showSimple('Auto editado correctamente')
				}
			)
		}



		$scope.addCar =  () => {
			ModalSrv.addCar()
			.then(
				( _car ) => {
					$scope.cars.push( _car )
					ToastSrv.showSimple('Auto agregado correctamente')
				}
			)
		}



		const setSelectCarTimeline = ( _car ) => {
			_.forEach( $scope.cars , (car) => {
				if( car.plate === _car.plate ){
					car.selectedTimeline = true
				}
				else{
					car.selectedTimeline = false
				}
			});
		}



		const setupVars = () => {

			$scope.cars = [
				{
					brand: "volkswagen",
					model: "sedan",
					color: "Blanco",
					plate: "DJU8455",
					type: "sedan",
					year: "2000",
					timeline: [
						{
							date: "enero 2016"
						},
						{
							date: "marzo 2016"
						}
					]
				},
				{
					brand: "toyota",
					model: "rav4",
					color: "Gris oxford",
					plate: "OOO8888",
					type: "suv",
					year: "2008",
					timeline: [
						{
							date: "febrero 2016"
						},
						{
							date: "marzo 2016"
						},
						{
							date: "abril 2016"
						}
					]
				}
			]

		}



		setup()
	}


    angular.module( 'webappParkingPrivate' )
		.controller( 'NormalProfileCarsCtrl', normalProfileCars )
} )()
