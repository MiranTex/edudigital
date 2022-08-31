<template>
  <main>
    <banner
      :title="$translate().elearning_platform.banner.title"
      :backgroundImage="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :buttonActionText="$translate().elearning_platform.banner.buttonText"
      :buttonActionHref="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{$translate().elearning_platform.banner.text}}
      </template>
      <template #cartoon>
        <img width="400" ref="cartoon" src="https://edudigital.pt/home/images/Grupo_450.png" alt="" srcset="">
      </template>
    </banner>
    
    <Section
      :id="'plataformas-elearning-organograma'"
    >
      <img src="https://edudigital.pt/home/images/EDUdigital_Infografia_Plataformas_20211123.jpg" width="" alt="" srcset="">
    </Section>

    <SectiondubleCartoon
      :id="'plataformas-elearning-open-source'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-1.png'""
      :background="'#d35640'"
      style="color:#fff"
    >
    <template #text>
        <Title :title="$translate().elearning_platform.open_source_platform.title" />
        <p>{{$translate().elearning_platform.open_source_platform.text}}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/plataformas-elearning/plataformas-open-source">{{$translate().elearning_platform.open_source_platform.buttonText}}</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-totara'"
      :img="'https://edudigital.pt/home/images/totara_pc-28.png'"
      :background="'#eee'"
      :flexDirection="'row-reverse'"
    >
    <template #text>
        <Title :title="$translate().elearning_platform.totara_platforms.title" />
        <p>{{$translate().elearning_platform.totara_platforms.text}}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/plataformas-elearning/plataformas-totara">{{$translate().elearning_platform.totara_platforms.buttonText}}</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-cloud'"
      :img="'https://edudigital.pt/home/images/Grupo_4492x.png'"
      :background="'#d35640'"
      style="color:#fff"
    >
    <template #text>
        <Title :title="$translate().elearning_platform.cloud_learn.title" />
        <p>{{$translate().elearning_platform.cloud_learn.text}}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/plataformas-elearning/hosting-gerido">{{$translate().elearning_platform.cloud_learn.buttonText}}</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>
    <contactform />
</main>

</template>

<script>
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue';
import Section from '~/components/sections/section.vue';
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue';
import Title from '~/components/elements/title.vue';
import PlataformaseLearningController from "../../controllers/PlataformaseLearningController"
export default {
  components: { banner, Contactform, Section, SectiondubleCartoon, Title },
  methods:{
    animeCartoon(){
      upDownAnimation(this.$refs.cartoon,true);
    }
  },

  mounted(){
   
  }
}
</script>

<style>

</style>