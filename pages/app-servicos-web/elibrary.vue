<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Sistema eLibrary'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        ntegre na sua plataforma de eLearning, uma biblioteca online que
        disponibiliza eBooks e audioBooks com mais de 1700 títulos, de várias
        áreas de conhecimento, e acessível a partir de qualquer lado e qualquer
        dispositivo.
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'configuracao-avancada'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/eLibrary_blco1.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Biblioteca digital, integrada no LMS'" />
        <p>
          Esta biblioteca digital com mais de 1700 eBooks e audioBooks, fornece
          pequenos pedaços de aprendizagem, práticos, com até 2 horas de leitura
          ou com palestras de especialistas até 60 minutos, desde temas como
          trabalho remoto até desenvolvimento pessoal, desde cursos
          comportamentais até produtividade.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'integracao-migracao-dados-vantagens'"
      :vantagens="vantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import AppServicosWebController from '~/controllers/AppServicosWebController'
export default {
  components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },
  data() {
    return {
      vantagens: AppServicosWebController.elibrary.vantagens,
    }
  },
}
</script>

<style></style>
