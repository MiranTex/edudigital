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

    <Sectionduble
      :id="'index-inovacao-na-aprendizagem'"
      :background="'#d35640'"
      :img="require('static/cartoon/Inovao_na_aprendizagem.png')"
      :flexDirection="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="$translate().index.inovacao_na_aprendizagem.title" />
        <p>{{$translate().index.inovacao_na_aprendizagem.text}}</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">{{$translate().index.inovacao_na_aprendizagem.btn_case_studies}}</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'index-plataforma-elearning-personalizadas'"
      :background="'#eee'"
      :img="require('static/cartoon/index_plataforma_elearning_personalizada.png')"
      :flexDirection="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Plataformas eLearning. Personalizadas. Seguras.'" />
        <p>Entregamos Plataformas open source, ricas em plugins, com hosting gerido e 
          suporte técnico para uma boa experiência de eLearning, compatíveis com outros softwares e com relatórios detalhados.</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Conheça as nossas plataformas</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'index-curso-ekearning-a-medida'"
      :background="'#00897b'"
      :img="require('static/cartoon/index_curso_elearning_a_medida.png')"
      :flexDirection="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Cursos eLearning. À Medida ou de Catálogo.'" />
        <p>Trabalhe com a nossa equipa de designers, para produção de eLearning à medida, gamification e guiões pedagógicos
           atraentes. Ou simplesmente, coloque o seu branding nos nossos cursos de catálogo, em módulos feitos por especialistas e responsivos a qualquer dispositivo.</p>
        <div>
          <NuxtLink class="btn btn-primary" to="/">Conheeça o nosso elearning à medida</NuxtLink>
        </div>
        <div>
          <NuxtLink class="btn btn-primary" to="/">Conheça nosso catálogo de cursos</NuxtLink>
        </div>
      </template>
    </Sectionduble>


    <Sectionduble
      :id="'index-aplicacao-web-servico-academico'"
      :background="'#eee'"
      :img="require('static/cartoon/index_aplicacao_web_servicos_academicos.png')"
      :flexDirection="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Aplicações web e Serviços académicos'" />
        <p>Analisamos os dados da sua organização para fazer uma boa experiência de integração de softwares ou de instalação de aplicações, automatizando a gestão da aprendizagem.</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Conheça os nossos Serviços Web e Apps</NuxtLink>
        </div>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Conheça nossos Softwares Académicos</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    
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
import Sectionduble from '~/components/sections/sectionduble.vue';
import Title1 from '~/components/elements/title.vue';
import Googlemap from '~/components/googlemap.vue';


export default Vue.extend({
  components: { banner, Section, Contactform, Counter, Title, Icon, Sectionduble, Title1, Googlemap },

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


<style scoped lang="scss">

  

</style>