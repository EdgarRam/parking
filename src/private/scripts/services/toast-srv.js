


( () => {


	const toastSrv = ( $mdToast ) => {
		const toast = {};



        toast.showSimple = ( _text, _position ) => {
			if( !_text ){
				return
			}

			var position = _position || 'bottom right'

			$mdToast.show(
				$mdToast.simple()
					.textContent( _text )
					.position( position )
					.hideDelay(3000)
			)
        }



		return toast
	}


    angular.module( 'webappParkingPrivate' )
		.factory( 'ToastSrv', toastSrv )
} )()
