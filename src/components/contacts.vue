<template>

    <div class='contacts' >

    	<div class='contacts-form' >
            <div class='contacts-intro ' >
                {{ intro }}
            </div>
            <feedback></feedback>
        </div>

    </div>

</template>

<script>

	import axios from 'axios';

	import feedback from '@/components/feedback.vue';  

	export default {
		components:{feedback},
		data(){
			return {
				intro: ''
			}
		},
	    methods:{},
	    mounted: function(){

	    	self = this;

	    	self.$store.commit('loaderOn');
	    	self.$store.commit('changeHeaderTitle', 'Наши контакты' );
	    	
	    	axios.post('/api/', {
                headers: { 'Content-type':'application/x-www-form-urlencoded'},
                body: JSON.stringify({ 'action':'get_contacts',})
            })
            .then( function( res ) {

                let data = JSON.parse( res.request.responseText );
                self.intro = data.intro;
                self.$store.commit('loaderOff',1000);

            })
            .catch( function( e ) {
                console.error(e);
            });

	    }
	}
	
</script>

<style lang="scss">

.contacts{
	&-form{}
	&-intro{
		color: #000;
	    line-height: 1.5;
	    margin-bottom: 15px;
	}
}

</style>