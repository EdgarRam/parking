


( () => {


	const getData = ( $http ) => {
		const api = {};



        api.getListBrands = ( ) => {
			return [
				{
					id: 1,
					brand: "volkswagen"
				},
				{
					id: 2,
					brand: "toyota"
				},
				{
					id: 3,
					brand: "chevrolet"
				},
				{
					id: 4,
					brand: "nissan"
				}
			]
        }



		api.getListTypes = ( ) => {
			return [
				{
					id: 1,
					type: "compact"
				},
				{
					id: 2,
					type: "sedan"
				},
				{
					id: 3,
					type: "suv"
				}
			]
		}



		return api
	}


    angular.module( 'webappParkingPrivate' )
		.factory( 'GetDataSrv', getData )
} )()
