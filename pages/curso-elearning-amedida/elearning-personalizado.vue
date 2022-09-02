<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Produção eLearning personalizado'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Fazemos desenvolvimento de cursos de eLearning à medida, de A até Z. A
        partir de conteúdos pedagógicos enviados por si ou concebidos pela nossa
        equipa, adaptamos cada curso à sua organização, com interatividade,
        conversão de formato presencial para online, com design da sua marca,
        compatível com vários dispositivos e em formato SCORM.
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'elearning-personalizado-design'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/cursos_edudigital_1.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Design personalizado de cursos eLearning'" />
        <p>
          Cada curso à medida, exige uma entrega de sucesso e o nosso processo
          de envolvimento com o cliente. Neste processo a que chamamos ADDIE,
          temos de analisar o público e necessidades, fazer o design
          instrucional, maximizar o feedback nas primeiras versões, desenvolver
          um SCORM compatível com a sua plataforma e por fim, fazer uma
          avaliação das reações.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import CursoseLearningMedidaController from '~/controllers/CursoseLearningMedidaController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
export default {
  components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },
  data() {
    return {
      vantagens:
        CursoseLearningMedidaController.elearningPersonalizado.vantagens,
    }
  },
}
</script>

<style></style>
