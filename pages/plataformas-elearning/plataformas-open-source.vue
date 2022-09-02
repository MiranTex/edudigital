<template>
  <div>
    <banner
      :background-image="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :columns-template="'3fr 1fr'"
      :title="'Plataformas eLearning Open-source'"
      :button-action-text="'Fale Connosco'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Produza cursos eLearning, faça a gestão de utilizadores e monitorize o
        desempenho de cada formando, tudo dentro da nossa plataforma eLearning
        EDULearn, sem custos de subscrição e com total flexibilidade. Com os
        nossos anos de experiência, entregamos-lhe um LMS personalizado, com
        vários plug-ins, segurança de acessos, updates periódicos e suporte
        técnico-pedagógico.
      </template>
    </banner>

    <Section
      :id="'plataformas-open-source-servicos-vantagens'"
      style="color: var(--color-cinza)"
      :flex="'column'"
    >
      <Title :title="'Serviços e Vantagens'" class="py" />

      <Section
        id="plataformas-open-source-servicos-vantagens-content"
        :no-padding="true"
        :content-justify="'start'"
        :should-anime="false"
        @end-animation="animeIcons"
      >
        <div class="vantagem-container">
          <IconText
            v-for="(vant, j) in vantagens"
            :id="j + $id()"
            :key="j + $id()"
            color="#616161"
            class="vantagem"
            :title="vant.title"
            :icon="vant.icon"
          >
            {{ vant.text }}
          </IconText>
        </div>
      </Section>
    </Section>

    <Sectionduble
      :id="'plataformas-open-source-app-mobile'"
      :background="'var(--color-verde)'"
      :img="'https://edudigital.pt/home/images/Grupo_4665x.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'App Mobile'" />
        <p>
          A App móvel permite uma maior flexibilidade e acessibilidade na
          formação à distância, pela qual os utilizadores podem aprender em
          qualquer local, qualquer momento, interagir com o seu grupo e ficar a
          par do seu progresso.
        </p>
        <div>
          <NuxtLink class="btn btn-primary" to="/fale-connosco"
            >Fale Connosco</NuxtLink
          >
        </div>
      </template>
    </Sectionduble>

    <Sectionduble
      :id="'plataformas-open-source-app-formacao-lms'"
      :background="'var(--color-light)'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flex-direction="'row-reverse'"
      :color="'var(--color-cinza)'"
    >
      <template #text>
        <Title :title="'Formação LMS de Administradores e eFormadores'" />
        <p>
          Somos uma entidade certificada pela DGERT (normas da União Europeia)
          para lecionar formação de eFormadores LMS ou Administradores de
          Plataformas. Ambas as formações são para transferir conhecimento para
          os clientes, seja para dinamizar pedagogicamente as formações online,
          seus cursos, formandos, seja para configurar tecnicamente a
          plataforma, sua estrutura, perfis, autenticações, entre outros. Fale
          Connosco
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/fale-connosco"
            >Fale Connosco</NuxtLink
          >
        </div>
      </template>
    </Sectionduble>

    <contactform />
  </div>
</template>

<script>
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import IconText from '~/components/elements/icon-text.vue'

import Contactform from '~/components/contactform.vue'
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue'
import { animeList } from '~/assets/js/animate'
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
export default {
  components: { Section, Title, IconText, Contactform, Sectionduble },

  data() {
    return {
      vantagens:
        PlataformaseLearningController.plataformasOpenSource.ServicosVantagens,
    }
  },
  methods: {
    animeIcons() {
      animeList(document.getElementsByClassName('vantagem'))
    },
  },
}
</script>

<style>
#plataformas-open-source-servicos-vantagens-content {
  margin-top: 30px;
}
</style>
