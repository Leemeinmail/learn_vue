<template>
	<div class='loader' :class='{ "hidden": !active }' ></div>
</template>

<script>

	export default {
		data(){
			return {}
		},
		computed:{
			active(){
				return this.$store.state.showLoader;
			}
		},
		mounted(){}
	}
	
</script>

<style scoped lang="scss" >

.loader{
	position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    opacity: 1;
    z-index: 999;
    transition: 0s;
	background-image: url("../static/img/loader.gif");
	background-size: cover;
	background-position: center;

	&.hidden{
        opacity: 0;
        z-index: -1;
        transition: 0.5s ease-in;
    }

}

</style>