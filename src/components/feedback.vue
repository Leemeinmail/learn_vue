<template>
	<form class='feedback' @submit.prevent="submit" >
        <div class='feedback-body' >

            <div class='feedback-field -col-2' >
                <input 
                    v-model='values.name' 
                    class='feedback-input' 
                    type='text' 
                    placeholder='Ваше имя' 
                    name='name' 
                />
            </div>

            <div class='feedback-field -col-2' >
                <input 
                	v-model="values.phone" 
                	class='feedback-input phone-mask' 
                	type='text' 
                	placeholder='Ваш телефон' 
                	name='phone' 
                />
            </div>

            <div class='feedback-field -col-2' >
                <input 
                	v-model="values.email" 
                	class='feedback-input' 
                	type='text' 
                	placeholder='Ваша почта' 
                	name='email'
                />
            </div>

            <div class='feedback-field -col-2' >
                <input 
                	v-model="values.adress" 
                	class='feedback-input' 
                	type='text' 
                	placeholder='Адрес' 
                	name='adress'
                />
            </div>

            <div class='feedback-field' >
                <textarea 
                	v-model="values.message" 
                	class='feedback-textarea' 
                	name='message' 
                >Ваше сообщение</textarea>
            </div>

            <div class='feedback-field' >
                <input 
                	class='feedback-input feedback-btn' 
                	type='submit' 
                	value='Отправить' 
                />
            </div>

        </div>
    </form>
</template>

<script>
		
	import Inputmask from "inputmask";
	import axios from "axios";

	export default{
		data(){
	        return {
	            'values':{
	                'name':'',
	                'phone':'',
	                'email':'',
	                'adress':'',
	                'message':''
	            }
	        }
	    },
	    mounted(){

	    	var phoneMask = new Inputmask("+7(999)999-99-99");
			phoneMask.mask(".phone-mask");

	    },
	    methods:{
	    	error_input( input ){
            
	            input.focus();
	            input.classList.add('-error');

	            setTimeout(function(){
	               input.classList.remove('-error'); 
	            }, 3000);

	        },

	        clear_form(){
		        for( let key in this.values ){
		            this.values[key] = '';
		        }
		    },

	    	submit(){

	            let self = this;

	            if( this.values.name == '' ){
	                this.error_input( this.$el.querySelector("[name='name']") );
	                return false;
	            }

	            if( this.values.phone == '' ){
	                this.error_input( this.$el.querySelector("[name='phone']") );
	                return false;
	            }

	            let data = JSON.stringify( this.values );

	            axios.post('/api/', {
	                headers: { 'Content-type':'application/x-www-form-urlencoded'},
	                body: JSON.stringify({ 'action':'feedback','data':data})
	            })
	            .then( function( res ) {

	                alert('Отправлено успешно!');
	                self.clear_form();

	            })
	            .catch( function( e ) {
	                console.error(e);
	            });

	        }
	    }
	}

</script>

<style scoped lang="scss" >
	
.feedback{
	&-body{
		display: flex;
		flex-wrap: wrap;
		margin-left: -20px;
		margin-right: -20px;
	}
	&-field{
		flex: 0 0 calc( 100% - 40px );
		margin-bottom: 15px;
		margin-left: auto;
	  margin-right: auto;
	}
	&-field.-col-2{
		flex: 0 0 calc( 50% - 40px );
		margin-left: 20px;
		margin-right: 20px;
	}
	&-field:last-child{
		margin-bottom: 0;
	}
	&-input, &-textarea{
		font-family: Trebuchet MS;
	  font-size: 100%;
		display: block;
		width: 100%;
		padding: 8px 15px;
		border:2px solid #133458;
		border-radius: 5px;
		outline: none;
		transition: .3s;
	}
	&-input.-error, &-textarea.-error{
		border:2px solid red;
	}
	&-textarea{
		resize: none;
		height: 180px;
	}
	&-btn{
		cursor: pointer;
	}
	&-checkbox span{
		color: #000;
		padding-left: 15px;
	}
}

</style>