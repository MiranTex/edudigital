<template>
    <div id="bread">
        <!-- <div ref="breadcrumbs">Home</div> -->
        <v-breadcrumbs :large="true" :dark="true" :items="[{to:'/',link:true,text:'home'}]"></v-breadcrumbs>
    </div>

</template>

<script>

export default {

}
</script>

<style>
    #bread div{
        color: #fff!important;
        padding: 0 20px;
    }
</style>