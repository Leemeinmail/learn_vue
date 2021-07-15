<template>
	
	<div class='not-found main-notfound' >
		<div class='not-found-error-code' >
			404
		</div>
		<div class='not-found-text' >
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
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	&-error-code{
		display: block;
		margin-bottom: 30px;
	    font-weight: bold;
	    font-size: 100px;
		text-transform: uppercase;
		color: #0f2742;
	}

	&-text{
		color: #0f2742;
	    font-weight: bold;
	    font-size: 25px;
	    margin-bottom: 20px;
	}

	&-back{
		text-decoration: none;
	    color: #7272ff;
	    transition: 0.3s;

	    &:hover{
	    	color: #2c2cff;
	    }
	}

}

</style>