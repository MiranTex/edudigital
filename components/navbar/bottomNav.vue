<template>
    <v-bottom-navigation class="menuBottom" v-model="value">
        <v-btn value="home">
            <span>Inicio</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn value="contacto">
            <span>Fale Connosco</span>
            <v-icon>mdi-message-text</v-icon>
        </v-btn>

        <v-btn value="sobre">
            <span>Sobre nós</span>
            <v-icon>info</v-icon>
        </v-btn>

        <v-btn value="nearby">
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
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
    }

    @media screen and (max-width:950px ){
        .v-bottom-navigation{
            display: flex!important;
        }
    }

</style>