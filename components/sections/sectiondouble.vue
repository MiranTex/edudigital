<template>
    <Section class="section-double" :id="id" @end-animation="$emit('end-animation');" :flex="flexDirection" :background="background" :noPadding="noPadding" >


            <div :style="{color:this.color || 'inherit'}">
                <slot name="left"> </slot>
            </div>

            
            <div :style="{color:this.color || 'inherit'}" class="">
                <slot name="right"></slot>
            </div>
         
            

    
            
     
    </Section>
</template>

<script>
import { upDownAnimation } from '~/assets/js/animate';
import Section from './section.vue';

export default {
    props: ["id", "background", "flexDirection","color","noPadding"],
    components: { Section },
    methods:{
    }
}
</script>

<style scoped lang="scss">

    .section-double{

        flex-direction: row-reverse!important;

       
        div{
            flex: 1;
            padding: 20px 20px;
            display: flex;
            justify-content: center;
        }
    }


    @media screen and (max-width:900px) {
        .section-double{
            display: flex;
            flex-direction: row-reverse!important;

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