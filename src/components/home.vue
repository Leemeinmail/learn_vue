<template>

    this is home page!

</template>

<script>

    import axios from 'axios';

	export default{
		components: {},
		data(){
            return {
                content: '',
            }
        },
        mounted(){

            self = this;

            self.$store.commit('loaderOn');
            
            axios.post('/api/', {
                headers: { 'Content-type':'application/x-www-form-urlencoded'},
                body: JSON.stringify({ 'action':'get_home',})
            })
            .then( function( res ) {

                let data = JSON.parse( res.request.responseText );

                

                self.title = data.title;
                self.content = data.content;
                
                self.$store.commit('changeHeaderTitle',data.title);
                self.$store.commit('loaderOff',1000);

            })
            .catch( function( e ) {
                console.error(e);
            });

        }
	}
	
</script>

<style scoped lang="scss" ></style>