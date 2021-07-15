<template>
    
    <headerApp/>

    <div class='main' >

        <div class='main-menu' >
            <asideApp/>
        </div>

        <div class='main-content' :class='{"not-scrollable":loaderIsActive}' >

            <loader></loader>

            <router-view/>

        </div>

    </div>

</template>

<script>

    import headerApp from "@/components/headerApp.vue";
    import asideApp from "@/components/asideApp.vue";
    import loader from "@/components/loader.vue";

    export default {
        components: {headerApp,asideApp,loader},
        computed:{
            loaderIsActive(){
                return this.$store.state.showLoader;
            }
        }
    }

</script>

<style lang="scss">

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    font-family: Trebuchet MS;
    font-size: 100%;
    line-height: 1;
    color: #fff;
    height: 100%;
    overflow: hidden;
}



#app{
    height: 100%;
}




.main{
    display: flex;
    height: 100%;

    &-menu{
        flex: 0 0 300px;
        background-color: #133458;
        height: calc( 100% - 50px );
    }

    &-content{
        position: relative;
        flex: 1 0 0;
        max-width: calc( 100% - 300px );
        background-color: #f1f1f1;
        height: calc( 100% - 50px );
        overflow-y: auto;
        padding: 20px;

        &.not-scrollable{
            overflow-y: hidden;
        }
    }
}
</style>
