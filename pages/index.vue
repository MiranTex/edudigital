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
      :contentJustify="'center'"
      :itemAlign="'center'"
      :background="'#fff'"
      :flex="'column'">

      <Title :textAlign="'center'" style="color:var(--color-cinza)" :title="'Os nossos serviços'" />

      <div class="index-nossos-serviços">
        <Icon v-for="i in 5" :key="i+'icon'"
          :img="links[i-1]"
          :text="$translate().menus.plataformas_elearning"
          :to="'/plataformas_elearning'" 
        />

    
      </div>

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
import Icon from '~/components/elements/icon.vue';


export default Vue.extend({
  components: { banner, Section, Contactform, Counter, Title, Icon },

  data(){
    return{
      links:[
        "https://edudigital.pt/home/images/icone-edudigital-plataformas-novo-01.png",
        "https://edudigital.pt/home/images/icone-edudigital-elearning-verde-20210309.png",
        "https://edudigital.pt/home/images/icone-edudigital-formacao-new-20210303-013x.png",
        "https://edudigital.pt/home/images/icone-edudigital-apps-e-web-cinzento-013x.png",
        "https://edudigital.pt/home/images/icone-edudigital-gestao-academica-novo-20210303-013x.png"
      ]
    }
  },  
  mounted(){
  },  

  
  name: 'IndexPage',
})
</script>


<style scoped>

</style>