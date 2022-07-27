<template>
    <div>
        <h1 class="title-text" :style="style" v-if=" type== 'head'">{{title}}</h1>
        <h2 class="title-text" :style="style" v-if=" type== 'sub'">{{title}}</h2>
        <h3 class="title-text" :style="style" v-if=" type== 'title'">{{title}}</h3>
    </div>

</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"title",
            required:true
        },
        type:{
            type:String,
            default:"head"
        },

        textAlign:{
            type:String,
            default:"inherit"
        }

    },
    computed:{
        style(){

            return{
                textAlign: this.textAlign
            }
        }
    }
}
</script>

<style scoped>

    div{
        padding: 0!important;
    }

    .title-text{
        line-height: 50px;
        /* text-align: center; */
    }

    h1{
        font-size: 3rem;
    }

    h2{
        font-size: 2.5rem;
    }

    h3{
        font-size: 2rem;
    }

</style>