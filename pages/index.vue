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

    </banner>

    <Section 
      :id="'main-section'"
      :contentAlign="'center'"
      :background="'#fff'">
      
      <Title style="color:var(--color-cinza)" :title="'Os nossos serviços'" />

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
import Title from '~/components/elements/title.vue';


export default Vue.extend({
  components: { banner, Section, Contactform, Counter, Title },

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