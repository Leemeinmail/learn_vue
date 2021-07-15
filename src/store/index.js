import { createStore } from 'vuex'

export default createStore({
    state: {
        headerTitle: "Страница",
        headerSlogan: "Vue SPA site",
        showLoader: true
    },
    mutations: {
        loaderOff( state, delay ){
            setTimeout(function(){
                state.showLoader = false;
                console.log( 'loader off' );
            },delay);
        },
        loaderOn( state ){
            state.showLoader = true;
            console.log( 'loader on' );
        },
        changeHeaderTitle( state, value ){
            state.headerTitle = value;
        },
        changeHeaderSlogan( state, value ){
            state.headerSlogan = value;
        }
    },
    actions: {},
    modules: {}
})
