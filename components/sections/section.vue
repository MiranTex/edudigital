<template>
    <intersect @enter.once="animeSection">
        <section  :id="id" :style="style" class="container-section">
        
            <div :class="flexDirection" :style="content_style" class="content-section">
                <slot></slot>
            </div>
        </section>
    </intersect>
</template>

<script>
import Intersect from "~/assets/js/vue-intersect";
import { anime_ } from "~/assets/js/animate"; 

export default {
    components:{ Intersect },
    props:{
        contentJustify:{
            type:String,
            default:"inherit"
        },
        itemAlign:{
            type:String,
            default:"center"
        },
        shouldAnime:{
            type:Boolean,
            required:false,
            default:true
        },
        background:{
            type:String,
            default:"transparent"
        },
        fluid:{
            type:Boolean,
            default:false
        },
        id:{
            type:String,
            required:true
        },
        flex:{
            type:String,
            default:"inherit"
        }
    },
    computed:{
        style(){

            return{
                background:this.background
                
            }
        },

        flexDirection(){
            if(this.flex == "inherit")
                return "";

            if(this.flex == "column")
                return "flex-column";

            if(this.flex == "row")
                return "flex-row";

            if(this.flex == "column-reverse")
                return "flex-column-reverse";
            
            if(this.flex == "row-reverse")
                return "flex-row-reverse";
        },

        content_style(){

            return{
                width:this.fluid ? "100%" : "75%"
            }
        }
    },

    methods:{
        animeSection(){
            if(this.shouldAnime)
                anime_({
                    targets: document.getElementById(this.id),
                    duration: 1000,
                    opacity:[0,1],
                    easing:"linear",
                });

            this.$emit("end-animation")
        }
    }
}
</script>

<style scoped lang="scss">
    .container-section{
        display: flex;
        padding: 60px 0;
    }

    .content-section{
        margin: auto;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    @media screen and (max-width:900px) {
        .content-section{
            flex-direction: column;
        }
    
    }

    
</style>