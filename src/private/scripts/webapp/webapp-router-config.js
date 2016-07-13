


( () => {



    const RouteConfig = ( $stateProvider, $urlRouterProvider ) => {



        $urlRouterProvider.otherwise( '/app/profile/selector' )

        $stateProvider
            .state( 'profileSelector', {
                url: '/app/profile/selector',
                resolve: {
                    'js': ($ocLazyLoad) =>
                        $ocLazyLoad.load([
                            'scripts/controllers/modals/select-system-ctrl.js'
                        ])
                },
                controller: ( ModalSrv ) =>{
                    ModalSrv.selectSystem()
                }
            } )

            // beg: admin
            .state( 'admin', {
                url: '/app/admin/dashboard',
                templateUrl: 'views/admin/dashboard.html',
                resolve: {
					'js': ( $ocLazyLoad ) =>
						$ocLazyLoad.load([
							'scripts/controllers/admin/dashboard-ctrl.js'
						])
				},
				controller: 'dashboardCtrl'
            } )
            .state( 'admin-profiles', {
                url: '/app/admin/profiles',
            } )
            .state( 'admin-cars', {
                url: '/app/admin/cars',
            } )
            .state( 'admin-parkinglot', {
                url: '/app/admin/parkinglot',
            } )
            .state( 'admin-allocations', {
                url: '/app/admin/allocations',
            } )
            .state( 'admin-requests', {
                url: '/app/admin/requests',
            } )
            // end: admin

            // beg: normal
            .state( 'normal', {
                url: '/app/normal/dashboard',
				templateUrl: 'views/normal-profile/dashboard.html'
            } )



            .state( 'normal-cars', {
                url: '/app/normal/cars',
				templateUrl: 'views/normal-profile/cars.html',
				resolve: {
					'js': ( $ocLazyLoad ) =>
						$ocLazyLoad.load([
							'scripts/controllers/normal-profile/cars-ctrl.js',
							'scripts/services/toast-srv.js',
							'scripts/services/get-data-srv.js',
							'scripts/controllers/modals/car/car-detail-ctrl.js',
							'scripts/controllers/modals/car/delete-car-ctrl.js',
							'scripts/controllers/modals/car/add-car-ctrl.js',
							'scripts/controllers/modals/car/edit-car-ctrl.js',
							'scripts/controllers/modals/car/car-default-ctrl.js'
						])
				},
				controller: 'NormalProfileCarsCtrl'
            } )



            .state( 'normal-profile', {
                url: '/app/normal/profile',
				templateUrl: 'views/normal-profile/profile.html',
				resolve: {
					'js': ( $ocLazyLoad ) =>
						$ocLazyLoad.load([
							'scripts/controllers/normal-profile/profile-ctrl.js',
							'scripts/services/modal-srv.js',
							'scripts/services/toast-srv.js',
							'scripts/controllers/modals/profile/cancel-account-ctrl.js',
							'scripts/controllers/modals/profile/edit-profile-ctrl.js',
						])
				},
				controller: 'NormalProfileCtrl'
            } )
            .state( 'normal-requests', {
                url: '/app/normal/requests',
            } )
            // end: normal


            // tutoriales
            .state( 'parking' , {
                url: '/tutorial-estacionamiento',
                templateUrl: 'views/normal-profile/parking.html'
            })
    }



    angular.module( 'webappParkingPrivate' )
        .config( RouteConfig )
} )()
