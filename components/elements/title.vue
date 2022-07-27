<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"title",
            required:true
        }
    }
}
</script>

<style>

    h1{
        font-size: 3rem;
        line-height: 50px;
    }

</style>