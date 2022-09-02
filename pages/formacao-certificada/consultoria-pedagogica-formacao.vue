<template>
  <main>
    <Banner
      :title="'Consultoria Pedagógica & Formação'"
      :background-image="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :button-action-text="'Fale connosco'"
      :button-action-href="'/fale-connosco'"
      :columns-template="'2fr 1fr'"
    >
      <template #text>
        Com a nossa experiência de mais de 10 anos a implementar tecnologias em
        eLearning, a consultoria pedagógica é uma área que adiciona valor e
        maximiza o seu projeto de eLearning, quer seja uma instalação de
        plataforma, ou seja, um conjunto de formações online.
      </template>
    </Banner>

    <VantagemServicos
      :id="'consultoria-pedagogica-formacao-vantagem'"
      :vantagens="vantagem"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />
  </main>
</template>

<script>
import Catalogo from '../../components/elements/catalogo.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import FormacaoCertificadaController from '~/controllers/FormacaoCertificadaController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'

export default {
  components: { Section, Title, Catalogo, VantagemServicos },
  data() {
    return {
      vantagem:
        FormacaoCertificadaController.consultoriaPedagogicaFormacao.vantagem,
    }
  },
}
</script>

<style>
.catalogo-group {
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 50px;
}

@media screen and (max-width: 950px) {
  .catalogo-group {
    justify-content: center !important;
  }
}
</style>
