<template>
	
	<headerApp/>

    <div class='main' > 
        
        <div class='main-menu' >
            <asideApp/>
        </div>

        <div class='main-content content' >

        	<loader :active='is_ready' ></loader> 

            {{ msg }}

        </div>
    </div>

</template>

<script>

	import loader from '@/components/loader.vue';
	import headerApp from "@/components/headerApp.vue";
    import asideApp from "@/components/asideApp.vue";

	export default {
		components: {
           headerApp, asideApp, loader
        },
	    data(){
	        return {
	            title :'Страница не найдена',
	            msg :'Такой страницы нет',
	            is_ready : false
	        }
	    },
	    mounted(){

	        self = this;

	        setTimeout(function(){
	            self.is_ready = true;
	        }, 1000 );

	    },
	}
	
</script>

<style scoped lang="scss" >

</style>