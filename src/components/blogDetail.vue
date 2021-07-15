<template>

    <div class='blog-detail' >

        <articleApp :content='content'/>

    </div>

</template>

<script>

    import articleApp from "@/components/articleApp.vue";

    import blogModel from "@/models/blogModel.vue";

	export default {
		mixins:[ blogModel ],
	    components: {
	        articleApp
	    },
	    data(){
	        return {
	            'title':'',
	            'content':''
	        }
	    },
	    methods:{},
	    mounted: function(){

	        let self = this;

	        self.$store.commit('loaderOn');

	        this.get_post( this.$route.params.post, function( r ){
	            let post = JSON.parse(r.request.responseText);
	            self.$store.commit('changeHeaderTitle', post.title );
	            self.content = post.content;
	            self.$store.commit('loaderOff',1000);
	        });

	    }
	}
	
</script>

<style lang="scss">

</style>