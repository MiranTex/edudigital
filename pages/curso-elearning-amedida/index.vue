<template>
  <main>
    <banner
      :title="$translate().curso_elearning_amedida.banner.title"
      :background-image="'https://edudigital.pt/images/bigstock-Smiling-African-American-Girl-blue.png'"
      :button-action-text="$translate().curso_elearning_amedida.banner.buttonText"
      :button-action-href="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        {{ $translate().curso_elearning_amedida.banner.text }}
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_821.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'cusrsos-medida-organograma'">
      <img
        src="https://edudigital.pt/home/images/EDUdigital_Infografia_eLearning_20210311-012x.png"
        width=""
        alt=""
        srcset=""
      />
    </Section>

    <SectiondubleCartoon
      :id="'cursos-medida-producao'"
      :background="'#008072'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-11.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title
          :title="
            $translate().curso_elearning_amedida.customized_elearning.title
          "
        />
        <p>
          {{ $translate().curso_elearning_amedida.customized_elearning.text }}
        </p>
        <div>
          <NuxtLink
            to="/curso-elearning-amedida/elearning-personalizado"
            class="btn btn-primary"
            >{{
              $translate().curso_elearning_amedida.customized_elearning
                .buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'cursos-medida-gamification'"
      :background="'#D35640'"
      :img="require('~/assets/img/cartoon/Grupo_819_.png')"
      :flex-direction="'row-reverse'"
      :color="'#fff'"
    >
      <template #text>
        <Title
          :title="
            $translate().curso_elearning_amedida.audiovisual_production.title
          "
        />
        <p>
          {{ $translate().curso_elearning_amedida.audiovisual_production.text }}
        </p>
        <div>
          <NuxtLink
            to="/curso-elearning-amedida/motion-gamification"
            class="btn btn-secondary"
            >{{
              $translate().curso_elearning_amedida.audiovisual_production
                .buttonText
            }}</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <sectionduble
      :id="'producao-eLearning-personalizado'"
      :background="'var(--color-verde)'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-11.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Produção eLearning personalizado'" />
        <p>
          Os nossos learning designers são especialistas em transformar os seus
          manuais existentes em formação interativa de qualidade. Se tem
          formação presencial já pronta, nós redesenhamos para experiências de
          eLearning envolventes e multi-dispositivo. Personalizado com o seu
          branding, cada curso à medida pode incluir as últimas inovações, desde
          interação social até adaptativo.
        </p>
        <div>
          <NuxtLink class="btn btn-primary" to="#">Saiba Mais</NuxtLink>
        </div>
      </template>
    </sectionduble>

    <sectionduble
      :id="'motion-graphics-gamification'"
      :background="'#d35640'"
      :img="'https://edudigital.pt/home/images/Grupo_819.png'"
      :flex-direction="'row-reverse'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Motion Graphics & Gamification'" />
        <p>
          Para um nível acima de soluções de eLearning, realizamos gravações
          vídeo e locuções, animações em motion graphics ou realçamos formatos
          de eLearning tradicionais com mecânicas de jogo ou aprendizagem
          social, para uma aprendizagem de futuro.
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="#">Saiba Mais</NuxtLink>
        </div>
      </template>
    </sectionduble>

    <contactform />
  </main>
</template>

<script>
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import { upDownAnimation } from '~/assets/js/animate'

export default {
  components: { banner, Contactform, Section, SectiondubleCartoon, Title },

  methods: {
    animeCartoon() {
      upDownAnimation(this.$refs.cartoon, true)
    },
  },
}
</script>

<style></style>
