<template>
  <div>
    <Banner 
        :backgroundImage="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
        :title="'Hosting Gerido & Cloud'"
        :columnsTemplate="'2fr 1fr'"
        :buttonActionText="'Agenda a sua reunião'"
        :buttonActionHref="'/fale-connosco'"
        
    >
        <template v-slot:text>
          Utilizando a nossa plataforma LMS personalizada, com alojamento gerido, servida por uma ligação internet de alta velocidade, a 
          EDUdigital entrega-lhe rapidamente a sua plataforma eLearning e os seus conteúdos para formação dos utilizadores. 
          Como especialistas em eLearning, temos a experiência para facilitar a entrega imediata desta Cloud LMS, sem a necessidade da sua aquisição.
      </template>
    </Banner>

    <VantagemServicos 
        :vantagens="vantagens" 
        :id="'hosting-gerido-servicos-vantagens'"    
        :background="'#fff'"
        :color="'#616161'"
        :title="'Serviços e Vantagens'"
    />

    <Contactform />

  </div>
</template>

<script>
import PlataformaseLearningController from '~/controllers/PlataformaseLearningController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue';
import Contactform from '~/components/contactform.vue';
export default {
    data() {
        return {
            vantagens: PlataformaseLearningController.plataformasOpenSource.ServicosVantagens
        };
    },
    components: { VantagemServicos, Contactform }
}
</script>

<style>

</style>