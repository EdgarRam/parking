


( () => {


	const modalSrv = ( $mdDialog, $q ) => {
        const parentEl = angular.element(document.body);
		const modal = {};


		modal.selectSystem = ( _options ) =>{
			$mdDialog.show({
                parent: parentEl,
				clickOutsideToClose: false,
                templateUrl: '/private/views/modals/select-system.html',
				controller: 'selectSystemCtrl'
            })
		}



        modal.showCarDetails = ( _car ) => {
            $mdDialog.show({
                parent: parentEl,
				clickOutsideToClose: true,
                templateUrl: '/private/views/modals/car/car-detail.html',
                controller: 'CarDetailCtrl',
				locals: {
					localCars: _car
				}
            })
        }



		modal.addCar = () => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/car/add-car.html',
				controller: 'AddCarCtrl',
			})
			.then(
				( _car ) => {
					deferred.resolve( _car );
				}
			)

			return deferred.promise
		}




		modal.editCar = ( _car ) => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/car/edit-car.html',
				controller: 'EditCarCtrl',
				locals: {
					localCar: _car
				}
			})
			.then(
				( _car ) => {
					deferred.resolve( _car );
				}
			)

			return deferred.promise
		}



		modal.selectDefaultAuto = ( _selectedCar ) => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/car/car-default.html',
				controller: 'CarDefaultCtrl',
				locals: {
					localCarSelected: _selectedCar
				}
			})
			.then(
				( ) => {
					deferred.resolve( );
				}
			)

			return deferred.promise
		}




		modal.deleteCar = ( _deleteCar ) => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/car/delete-car.html',
				controller: 'DeleteCarCtrl',
				locals: {
					localDeleteCar: _deleteCar
				}
			})
			.then(
				( ) => {
					deferred.resolve( );
				}
			)

			return deferred.promise
		}




		modal.cancelAccount = ( ) => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/profile/cancel-account.html',
				controller: 'CancelAccountCtrl',
			})
			.then(
				( ) => {
					deferred.resolve( );
				}
			)

			return deferred.promise
		}




		modal.editProfile = ( _user ) => {
			var deferred = $q.defer()

			$mdDialog.show({
				parent: parentEl,
				templateUrl: '/private/views/modals/profile/edit-profile.html',
				controller: 'EditProfileCtrl',
				locals: {
					localUser: _user
				}
			})
			.then(
				( ) => {
					deferred.resolve( );
				}
			)

			return deferred.promise
		}



		return modal
	}


    angular.module( 'webappParkingPrivate' )
		.factory( 'ModalSrv', modalSrv )
} )()
