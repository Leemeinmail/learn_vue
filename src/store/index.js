import { createStore } from 'vuex'

export default createStore({
    state: {
        headerTitle: "Страница",
        headerSlogan: "Vue SPA site",
        showLoader: true,
        homePath:'/' // если прописать "/" в v-bind:to будет ошибка компиляции
    },
    mutations: {
        loaderOff( state, delay ){
            setTimeout(function(){
                state.showLoader = false;
            }, delay );
        },
        loaderOn( state ){
            //отключаю скролл контентного блока
            document.querySelector('.main-content').classList.add('not-scrolable');
            //включаю лоадер
            state.showLoader = true;
            //проматываю скролл контентного блока в начало
            document.querySelector('.main-content').scroll( {top:0} );

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
