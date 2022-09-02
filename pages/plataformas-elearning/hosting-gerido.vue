<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Hosting Gerido & Cloud'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Utilizando a nossa plataforma LMS personalizada, com alojamento gerido,
        servida por uma ligação internet de alta velocidade, a EDUdigital
        entrega-lhe rapidamente a sua plataforma eLearning e os seus conteúdos
        para formação dos utilizadores. Como especialistas em eLearning, temos a
        experiência para facilitar a entrega imediata desta Cloud LMS, sem a
        necessidade da sua aquisição.
      </template>
    </Banner>

    <VantagemServicos
      :id="'hosting-gerido-servicos-vantagens'"
      :vantagens="vantagens"
      :background="'#fff'"
      :color="'#616161'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
export default {
  components: { VantagemServicos, Contactform },
  data() {
    return {
      vantagens:
        PlataformaseLearningController.plataformasOpenSource.ServicosVantagens,
    }
  },
}
</script>

<style></style>
