<template>
	<header class='header' >
		<div class='header-left' >
			<router-link class="header-slogan" v-bind:to="sloganLink">
                {{pageSlogan}}
            </router-link>
		</div>
		<div class='header-right' >
			<h1 class='header-title' >
				{{pageTitle}}
			</h1>
		</div>
	</header>
</template>

<script>
	export default{
		data(){
			return {
				sloganLink: '/' // не принимал косую черту в ссылке v-bind:to
			}
		},
		mounted(){},
		computed:{
			pageTitle(){
				return this.$store.state.headerTitle;
			},
			pageSlogan(){
				return this.$store.state.headerSlogan;
			}
		}
	}
</script>

<style scoped lang="scss" >
	
.header{
	display: flex;
	padding: 10px 0;
    background-color: #0f2742;
    box-shadow: -5px 2px 5px 0px rgb(0 0 0 / 70%);

    &-left{
    	flex: 0 0 300px;
    }

    &-right{
    	flex: 1 0 0;
    }

    &-title{
    	font-size: 30px;
	    text-align: center;
    }

    &-slogan{
    	display: block;
    	text-decoration: none;
    	color: #fff;
    	font-size: 30px;
	    text-align: center;
    }

}

</style>