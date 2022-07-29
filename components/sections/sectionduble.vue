<template>
    <Section class="section-double" :id="id" @end-animation="animeCartoon" :flex="flexDirection" :background="background">
        <template>

            <div>
                <img ref="cartoon" :src="img" alt="" srcset="">
            </div>

            
            <div :style="{color:this.color || 'inherit'}" class="sectiondouble-text">
                <slot name="text"></slot>
            </div>
         
            

        </template>
            
     
    </Section>
</template>

<script>
import { upDownAnimation } from '~/assets/js/animate';
import Section from './section.vue';

export default {
    props: ["id", "img", "background", "flexDirection","color"],
    components: { Section },
    methods:{
        animeCartoon(){
            upDownAnimation(this.$refs.cartoon);
        }
    }
}
</script>

<style scoped lang="scss">

    img{
        width: 100%;

        max-width: 500px;
        min-width: 200px;
    }
    .section-double{

        flex-direction: row-reverse!important;

       
        div{
            flex: 1;
            padding: 20px 20px;
        }
    }

    .sectiondouble-text{
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: #fff;
       
        p{
            text-align: justify;
        }
    }

    @media screen and (max-width:900px) {
        .section-double{
            display: flex;
            flex-direction: row-reverse!important;

            img{
                width: 200px!important;
            }
            div{
                text-align: center;
            }
            // .sectiondouble-text{

            //     display: flex;
            //     flex-direction: column!important;
            // }
        }

    }
</style>