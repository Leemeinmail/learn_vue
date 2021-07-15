<template>
	
	<div class='blog-list' >
		<div class='blog-list-body' v-if='items' >
            <div class='blog-list-item' v-for="item in items" >
                <cartPreview v-bind="item" ></cartPreview>
            </div>
        </div>
        
        <div class='blog-list-bottom' >
            <div class='blog-list-pagin' >
                <pagination v-bind:pagins='pagins' ></pagination>
            </div>
        </div>
	</div>

</template>

<script>
    
    import blogModel from "@/models/blogModel.vue";
    
    import cartPreview from "@/components/cartPreview.vue";
    import pagination from "@/components/pagination.vue";

	export default {
		mixins:[ blogModel ],
	    components: {
	    	cartPreview, pagination
	    },
	    data(){
	        return {
	            'title':'Наш блог',
	            'items': '',
	            'pagins': '',
	            'is_ready': false
	        }
	    },
	    methods:{
	    	reloadPage(){
	    		console.log( 'reload' );
	    		document.querySelector('.blog-list').scrollTo(0,0);
	    	}
	    },
	    mounted: function(){

	        self = this;

	        self.$store.commit('changeHeaderTitle', this.title );
	        self.$store.commit('loaderOn'); 

	        this.get_posts_list(
	            16,
	            1,
	            function( r ){
                	self.items = JSON.parse(r.request.responseText);
            		self.$store.commit('loaderOff',1000); 
	            } 
	        );

	        this.get_pagination_pages( 16, function( r ){
	            self.pagins = JSON.parse(r.request.responseText); 
	        });

	    },
	    watch: {
	        $route( to, from ) {

	            if( this.$route.params.id ){
	                
	                self = this;
	                self.$store.commit('loaderOn');

	                this.get_posts_list(
	                    16,
	                    this.$route.params.id,
	                    function( r ){
	                    	self.reloadPage();
	                 		self.items = JSON.parse(r.request.responseText);
	                		self.$store.commit('loaderOff',1000);                       
	                    } 
	                );

	                this.get_pagination_pages( 16, function( r ){
	                    self.pagins = JSON.parse( r.request.responseText ); 
	                });

	            }

	        }
	    },
	}
	
</script>

<style scoped lang="scss" >

.blog-list{

	&-body{
		display: flex;
		flex-wrap: wrap;
	}
	&-item{
		flex:0 0 calc(25% - 10px);
		/*border-radius: 10px;
		padding: 10px;
		border: 2px solid #0f2742;*/
		margin: 0 5px 10px 5px;
	}

	&-bottom{
		padding: 30px 0;
	}

}

</style>