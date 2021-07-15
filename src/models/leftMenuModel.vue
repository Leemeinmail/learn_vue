<script>

	import axios from 'axios';

	export default{

		methods:{
			get_menu_points( success_callback ){
	            
				axios.post('/api/', {
				    headers: {
				        'Content-type':'application/x-www-form-urlencoded'
				    },
				    body: JSON.stringify({ 'action':'get_menu_points',})
			    })
			    .then( function( res ) {
				    
				    if( success_callback ){
				    	success_callback( res );
				    }

			    })
			    .catch( function( e ) {

			        console.error(e);

			    });

	        },
		}

	}
	
</script>