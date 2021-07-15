<template>
	<div class='post-preview' >
        <router-link class="post-preview-images" v-bind:to="detail_url">
            <img v-bind:src='thumb' />
        </router-link>
        <router-link class="post-preview-title" v-bind:to="detail_url">
            {{ title }}
        </router-link>
        <p class='post-preview-text' >
            {{ descr }}
        </p>
    </div>
</template>

<script>

	export default {
		props: ['detail_url','thumb','title','descr'],
	}
	
</script>

<style scoped lang="scss" >
.post-preview{
	background-color: #8c8787;
	padding: 0 0 20px 0;

	&-images{
		display: block;
		margin: 0 auto 15px auto;
	}
	&-images img{
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
		object-position: center;
		/*border: 1px solid #0f2742;*/
	}
	&-title{
		display: block;
		font-size: 16px;
		text-align: center;
		margin-bottom: 10px;
		color: #fff;
		text-decoration: none;
		text-transform: uppercase;
	    font-weight: 600;
	}
	&-text{
		font-size: 13px;
		display: block;
		color: #fff;
		line-height: 1.5;
		text-align: center;
		text-decoration: none;
		padding: 0 10px;
	}

}
</style>