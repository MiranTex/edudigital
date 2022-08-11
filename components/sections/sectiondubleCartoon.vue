<template>
    <Section class="section-double-cartoon" :id="id" @end-animation="animeCartoon" :flex="flexDirection" :background="background" :noPadding="noPadding" :fluid="fluid" >
        <template>

            <div>
                <img ref="cartoon" :src="img" alt="" srcset="">
            </div>

            
            <div :style="{color:this.color || 'inherit'}" class="sectiondoubleCartoon-text">
                <slot name="text"></slot>
            </div>
         
            

        </template>
            
     
    </Section>
</template>

<script>
import { upDownAnimation } from '~/assets/js/animate';
import Section from './section.vue';

export default {
    props: ["id", "img", "background", "flexDirection","color","noPadding",'fluid'],
    components: { Section },
    methods:{
        animeCartoon(){
            upDownAnimation(this.$refs.cartoon);

            this.$emit('end-animation');
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
    .section-double-cartoon{

        flex-direction: row-reverse!important;

       
        div{
            flex: 1;
            padding: 20px 20px;
        }
    }

    .sectiondoubleCartoon-text{
        display: flex;
        flex-direction: column;
        gap: 40px;
        color: #fff;
       
        p{
            text-align: justify;
        }
    }

    @media screen and (max-width:900px) {
        .section-double-cartoon{
            display: flex;
            flex-direction: row-reverse!important;

            img{
                width: 200px!important;
            }
            div{
                text-align: center;
            }
            // .sectiondoubleCartoon-text{

            //     display: flex;
            //     flex-direction: column!important;
            // }
        }

    }
</style>