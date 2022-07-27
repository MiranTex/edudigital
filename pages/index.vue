<template>
  <div>
    <banner 
    :backgroundImage="require('~/assets/img/banner-bg.jpg')" 
    :columnsTemplate="'2fr 1fr'"
    :title="$translate().index.banner.title"
    :buttonActionText="$translate().index.banner.buttonActionText"
    :buttonActionHref="'/'"
    >
      <template v-slot:text>
          {{$translate().index.banner.text}}
      </template>

      <template class="cartoon" v-slot:cartoon>
        <!-- <img ref="cartoom_" width="400" :src="require('~/assets/img/cartoon.png')" alt=""> -->
      </template>
    </banner>
    <Section :id="'main-section'">
      
    </Section>
    <Contactform />
  </div>
</template>

<script>

import Vue from 'vue'
import banner from '~/components/banner.vue'

import Section from '~/components/sections/section.vue';
import Contactform from '~/components/contactform.vue';
import Counter from '../components/counter.vue';


export default Vue.extend({
  components: { banner, Section, Contactform, Counter },

  data(){
    return{
    }
  },  
  mounted(){
  },  

  
  name: 'IndexPage',
})
</script>


<style scoped>

</style>