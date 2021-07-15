<template>

    <div class='blog-detail' >

        <articleApp :content='content'/>

    </div>

</template>

<script>

	import headerApp from "@/components/headerApp.vue";
    import asideApp from "@/components/asideApp.vue";
    import loader from "@/components/loader.vue";
    import articleApp from "@/components/articleApp.vue";

    import blogModel from "@/models/blogModel.vue";

	export default {
		mixins:[ blogModel ],
	    components: {
	        loader, headerApp, asideApp, articleApp
	    },
	    data(){
	        return {
	            'title':'',
	            'content':'',
	            'is_ready': false
	        }
	    },
	    methods:{},
	    mounted: function(){

	        let self = this;

	        this.get_post( this.$route.params.post, function( r ){
	            let post = JSON.parse(r.request.responseText);;
	            self.title = post.title;
	            self.content = post.content;
	            setTimeout(function(){
	                self.is_ready = true;
	            },1000);
	        });

	    }
	}
	
</script>

<style lang="scss">

</style>