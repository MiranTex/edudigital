<template>
  <main>
    <banner
      :title="'Plataformas eLearning personalizadas'"
      :backgroundImage="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :buttonActionText="'Contact-nos'"
      @after-enter="animeCartoon"
    >
      <template #text>
        Inovadoras. Poderosas. E open-source. São as plataformas de eLearning que desenvolvemos há mais de 10 anos e em mais de 100 
        clientes pelo mundo. Implementamos as melhores opções de plataformas, num design à medida da sua organização de forma a garantir uma formação de qualidade.
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
        <Title :title="'Aplicações web e Serviços académicos'" />
        <p>Analisamos os dados da sua organização para fazer uma boa experiência de integração de softwares ou de instalação de aplicações, automatizando a gestão da aprendizagem.</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Saiba mais</NuxtLink>
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
        <Title :title="'Plataformas Totara'" />
        <p>A Totara Talent Experience Platform (Totara Learn, Totara Perform e Totara Engage) está concebida para personalizar a formação eLearning das organizações. 
          Conjuga flexibilidade, UX Design, sincronização com outros softwares, a gestão presencial e o reporting necessários ao seu negócio.</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Saiba mais</NuxtLink>
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
        <Title :title="'Cloud & Hosting Gerido'" />
        <p>Utilizando a nossa Cloud LMS Learn personalizada, com hosting gerido, servida por uma ligação internet de alta-velocidade, 
          nós entregamos-lhe rapidamente uma plataforma para lançar cursos, acompanhar todos os utilizadores, sem a necessidade de aprender ferramentas de administração.</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Saiba mais</NuxtLink>
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
    console.log(PlataformaseLearningController.plataformasOpenSource);
  }
}
</script>

<style>

</style>