<template>
	
	<article v-html="content" class='article' ></article>

</template>

<script>

	export default {
		props:['content']
	}
	
</script>

<style lang="scss" >

.article{
	color: #000;
	padding: 0 20px;

	& p{
		line-height: 1.5;
	    margin: 0 0 30px 0;
	}
	& ul, & ol{
		margin-bottom: 30px;
		padding-left: 20px;
	}
	& ul li, & ol li{
		line-height: 1.5;
		margin-bottom: 10px;
	}
	& blockquote{
	    background: #0f2742;
	    color: #fff;
	    padding: 20px;
	    margin: 30px 0;
	    line-height: 1.5;
	}
	& mark{
		background: #0f2742;
	    color: #fff;
	    padding: 0 10px;
	}
	& a {
		text-decoration: none;
	    color: #7272ff;
	    transition: .3s;
	}
	& a:hover{
		color: #2c2cff;
	}
	& img{
		display: block;
		width: 100%;
		max-width: 800px;
		height: auto;
		margin: 30px auto;
	}
}

</style>