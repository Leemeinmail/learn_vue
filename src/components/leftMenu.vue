<template>
	<ul class="left-menu">
        <li class="left-menu-item" v-for="item in items" >
            <router-link class="left-menu-link" v-bind:to="item.path">
                {{ item.value }}
            </router-link>
        </li>
    </ul>
</template>

<script>

	import leftMenuModel from '@/models/leftMenuModel';

	export default {
		components:{ leftMenuModel },
		mixins:[ leftMenuModel ],
		data() {
	        return {
	            items : []
	        }
	    },
	    mounted(){

	        let self = this;

	        self.get_menu_points(function( res ){
	        	let data = JSON.parse( res.request.responseText );
	        	self.items = data;
	        });

	    },
	}
	
</script>

<style scoped lang="scss" >
	
.left-menu{

	list-style-type: none;
	
	&-item{}

	&-link{
		display: block;
		padding: 10px 15px;
		color: #fff;
		text-decoration: none;
	}

}

</style>