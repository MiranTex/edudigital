<template>
    <v-bottom-navigation class="menuBottom" v-model="value">
        <v-btn value="/">
            <span>Inicio</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn value="/fale-connosco">
            <span>Fale Connosco</span>
            <v-icon>mdi-message-text</v-icon>
        </v-btn>

        <v-btn value="/sobre-nos">
            <span>Sobre nós</span>
            <v-icon>mdi-information</v-icon>
        </v-btn>

        <v-btn value="nearby">
            <span>Case Studies</span>
            <v-icon>mdi-domain</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    watch:{
        value(_new,_hold){

            this.$router.push(_new);
            
        },
        $route(_new,_old){

            // this.value = _new.path
        }
    },

    mounted(){
        this.value = this.$route.path;
    },  
    data(){
        return{
            value:""
        }
    }
}
</script>

<style>

    .v-bottom-navigation{
        display: none!important;
        position:fixed;
        bottom: 0;
        box-shadow: -1px -1px 10px rgba(80, 80, 80, 0.26)!important;
        z-index: 999;
        padding: 20px auto;
        display: flex;
        align-items: center;
    }

    @media screen and (max-width:950px ){
        .v-bottom-navigation{
            display: flex!important;
        }
    }

</style>