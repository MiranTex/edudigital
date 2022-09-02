<template>
  <div>
    <Banner
      :background-image="'https://edudigital.pt/images/bigstock-Group-Of-Young-Mixed-Race-Busi-336010132-.png'"
      :title="'Uma plataforma completa e completamente integrada'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Um login, um conjunto de notificações e um local para os seus
        utilizadores aprenderem e partilharem conhecimento. Eleve a gestão do
        capital humano para o próximo nível com o Totara Learning Experience,
        desenvolvido para formação, gestão de desempenho e colaboração entre
        equipas, utilizando tecnologia open-source.
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'plataformas-totara-parceiros'"
      :background="'#eee'"
      :img="'https://edudigital.pt/home/images/Grupo_976.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Parceiros oficiais Totara'" />
        <p>
          Como Totara Gold Alliance Partner, a EDUdigital aumentou as
          funcionalidades de uma plataforma eLearning tradicional para uma
          experiência de eficácia e envolvência para o utilizador, com melhores
          temas, gamification e avaliação de competências. Não tem de se
          preocupar com o hosting, a implementação, atualizações, formação e
          suporte contínuo, pois disponibilizamos todos os serviços que a sua
          organização necessita.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-totara-melhora-equipa'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z1.PNG'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Melhore a sua equipa com Totara Learn'" />
        <p>
          Explore uma plataforma de gestão de aprendizagem (LMS) que simplifica
          a automatização da formação, com funcionalidades extensíveis e que lhe
          permite entregar a formação à medida, que quer dinamizar.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#d35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <SectiondubleCartoon
      :id="'plataformas-totara-partilha'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z2.PNG'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title
          :title="'Promova a partilha de conhecimento com Totara Engage'"
        />
        <p>
          Potencie o poder da aprendizagem colaborativa e social, e a curadoria
          de conteúdos com o Totara Engage. Transforme a maneira como os seus
          colegas partilham know-how ou as suas opiniões, dentro dos fluxos de
          trabalho.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-vantagens-plataforma'"
      :vantagens="vantagensPlataforma"
      :background="'#00897B'"
      :color="'#fff'"
      :title="'Vantagens da Plataforma'"
    />

    <SectiondubleCartoon
      :id="'plataformas-totara-facilite'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/z3.PNG'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Facilite a melhoria contínua com Totara Perform'" />
        <p>
          Promova a gestão de desempenho e a capacidade de melhoria contínua com
          o Totara Perform, atribuindo competências e objetivos, e configurando
          audiências em locais de trabalho dinâmicos.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'plataformas-totara-vantagens-servicos_'"
      :vantagens="vantagensServicos_"
      :background="'#d35640'"
      :color="'#fff'"
      :title="'Vantagens da Plataforma'"
    />
  </div>
</template>

<script>
import Banner from '~/components/banner.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
import IconText from '~/components/elements/icon-text.vue'
import { animeList } from '~/assets/js/animate'
import Section from '~/components/sections/section.vue'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
export default {
  components: {
    Banner,
    SectiondubleCartoon,
    Title,
    IconText,
    Section,
    VantagemServicos,
  },

  data() {
    return {
      vantagens:
        PlataformaseLearningController.plataformasTotara.servicosVantagens,
      vantagensPlataforma:
        PlataformaseLearningController.plataformasTotara.vantagemPlataforma,
      vantagensServicos_:
        PlataformaseLearningController.plataformasTotara.vantagensServico_,
    }
  },
  mounted() {
    document.title = 'EDUdigital - Plataformas Totara'
  },

  methods: {
    animeIcons() {
      animeList(document.getElementsByClassName('vantagem'))
    },
  },
}
</script>

<style>
#plataformas-totara-servicos-vantagens-content {
  margin-top: 30px;
}
</style>
