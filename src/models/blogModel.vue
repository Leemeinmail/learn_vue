<script>

	import axios from 'axios';

	export default {
		methods:{
			get_posts_list( num, page, success_callback ){
				axios.post('/api/', {
	                headers: { 'Content-type':'application/x-www-form-urlencoded'},
	                body: JSON.stringify(
	                	{
		                    'action':'blog_list',
		                    'num': num,
		                    'page': page
		                }
	                )
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
	        get_post( id, success_callback ){
	            axios.post('/api/', {
	                headers: { 'Content-type':'application/x-www-form-urlencoded'},
	                body: JSON.stringify(
	                	{
		                    'action':'get_post',
	                    	'id': id,
		                }
	                )
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
	        get_pagination_pages( num, success_callback ){
	            axios.post('/api/', {
	                headers: { 'Content-type':'application/x-www-form-urlencoded'},
	                body: JSON.stringify(
	                	{
		                    'action':'get_pagination_pages',
	                    	'num': num,
		                }
	                )
	            })
	            .then( function( res ) {

	                if( success_callback ){
	                	success_callback( res );
	                }

	            })
	            .catch( function( e ) {
	                console.error(e);
	            });
	        }
		}
	}
	
</script>