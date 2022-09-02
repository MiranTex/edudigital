<template>
  <main>
    <Banner
      :title="'Formação Certificada'"
      :background-image="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :button-action-text="'Peça seu catálogo'"
      :button-action-href="'/fale-connosco'"
      :columns-template="'2fr 1fr'"
    >
      <template #text>
        Ganhe tempo e dinheiro com cursos eLearning de catálogo e tenha o nosso
        apoio técnico-pedagógico, como profissionais experientes, para
        identificar os objetivos de eLearning, maximizar o potencial do seu
        projeto e acelerar a implementação.
      </template>
    </Banner>

    <Section :id="'curso-elearning-catalogo'" :flex="'column'">
      <Title :title="'Catálogo de cursos eLearning'" />

      <div class="catalogo-group">
        <Catalogo
          v-for="(catalogo, i) in catalogos"
          :key="i + $id"
          :img="catalogo.img"
          :title="catalogo.title"
        >
          {{ catalogo.text }}
        </Catalogo>
      </div>
    </Section>
  </main>
</template>

<script>
import Catalogo from '../../components/elements/catalogo.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import FormacaoCertificadaController from '~/controllers/FormacaoCertificadaController'

export default {
  components: { Section, Title, Catalogo },
  data() {
    return {
      catalogos: FormacaoCertificadaController.cursoElearningCatalogo.catalogos,
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
