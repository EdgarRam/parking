


( () => {


	const dashboardCtrl = ( $scope ) => {



		const setup = () => {
			setupVars();
		}



		const setupVars = () => {
			$scope.users = [
                {
                    full_name: 'Cristian Ramirez',
                    date: 'hace 3 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Edgar Ramirez',
                    date: 'hace 4 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Jorge Jaime',
                    date: 'hace 6 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                }
            ]

			$scope.carUsers = [
                {
                    full_name: 'Audi A4',
                    date: 'hace 3 dias',
                    img: 'https://pixabay.com/static/uploads/photo/2015/10/01/17/17/car-967387_960_720.png'
                },
                {
                    full_name: 'Chevrolet Sonic',
                    date: 'hace 4 dias',
                    img: 'https://pixabay.com/static/uploads/photo/2015/10/01/17/17/car-967387_960_720.png'
                },
                {
                    full_name: 'Seat Toledo',
                    date: 'hace 6 dias',
                    img: 'https://pixabay.com/static/uploads/photo/2015/10/01/17/17/car-967387_960_720.png'
                }
            ]

            $scope.usersWithParking = [
                {
                    full_name: 'Gamaliel',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Edgar Ramirez',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Jorge Jaime',
                    date: 'hace 6 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Cristian Ramirez',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Jose Alberto ',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Jorge Alberto',
                    date: 'hace 6 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Juan Carlos',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Ivan Martinez',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Kristian Lopez',
                    date: 'hace 6 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                },
                {
                    full_name: 'Jorge Jaime',
                    date: 'hace 6 dias',
                    img: 'http://envato.rathemes.com/infinity/assets/images/221.jpg'
                }
            ]


			$scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

			$scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
			$scope.data = [
				[65, 9, 80, 81, 6, 55, 0],
				[28, 48, 0, 19, 86, 27, 90]
			];
			$scope.datasetOverride = [
				{
					label: "Bar chart",
					borderWidth: 1,
					type: 'bar'
				},
				{
					label: "Line chart",
					borderWidth: 3,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					type: 'line'
				}
			];
		}



		setup()
	}



    angular.module( 'webappParkingPrivate' )
		.controller( 'dashboardCtrl', dashboardCtrl )
} )()
