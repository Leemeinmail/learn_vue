<template>
	
	<div class='not-found' >
		<div class='not-found-error-code' >
			404
		</div>
		<div class='not-found-error-text' >
			Страницы с таким адресом не существует
		</div>
		<router-link class="not-found-back" :to="toHome">
            вернутся на главную
        </router-link>
	</div>

</template>

<script>

	export default {
	    mounted(){

	    	this.$store.commit('loaderOn');
	    	this.$store.commit('changeHeaderTitle', this.title );
	    	this.$store.commit('loaderOff',1000);

	    },
	    computed:{
	    	toHome(){
	    		return this.$store.state.homePath;
	    	}
	    }
	}
	
</script>

<style scoped lang="scss" >

.not-found{

}

</style>