<template>
  <div>
    <Banner 
        :backgroundImage="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
        :title="'Produção eLearning personalizado'"
        :columnsTemplate="'2fr 1fr'"
        :buttonActionText="'Agenda a sua reunião'"
        :buttonActionHref="'/fale-connosco'"
        
    >
        <template v-slot:text>
          Fazemos desenvolvimento de cursos de eLearning à medida, de A até Z. 
          A partir de conteúdos pedagógicos enviados por si ou concebidos pela 
          nossa equipa, adaptamos cada curso à sua organização, com interatividade, 
          conversão de formato presencial para online, com design da sua marca, 
          compatível com vários dispositivos e em formato SCORM.
      </template>
    </Banner>

    <SectiondubleCartoon
        :id="'elearning-personalizado-design'"
        :background="'#fff'"
        :img="'https://edudigital.pt/home/images/Grupo_815.png'"
        :flexDirection="'row'"
        :color="'#616161'"
      >
        <template v-slot:text>
            <Title :title="'Animações interativas e microlearning'"/>
            <p>
                Cada animação em motion graphics, cada curso com dinâmica de competição/pontuação, exige sabermos qual o 
                resultado que se quer obter no final, num processo de colaboração com o cliente. Neste processo temos de 
                criar a ideia-chave, os storyboards para os vídeos ou animações, os textos para os áudios, maximizando o 
                feedback com o cliente, desenvolvendo um “microlearning” ou uma colaboração/competição que possa envolver 
                os utilizadores da sua empresa.
            </p>
        </template>
      </SectiondubleCartoon>

    <VantagemServicos 
        :vantagens="vantagens" 
        :id="'hosting-gerido-servicos-vantagens'"    
        :background="'#D35B40'"
        :color="'#fff'"
        :title="'Serviços e Vantagens'"
    />

    <Contactform />

  </div>
</template>

<script>
import CursoseLEarningMedidaController from '~/controllers/CursoseLEarningMedidaController'
import VantagemServicos from '~/components/elements/vantagemServicos.vue';
import Contactform from '~/components/contactform.vue';
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue';
import Title from '~/components/elements/title.vue';
export default {
    data() {
        return {
            vantagens: CursoseLEarningMedidaController.motionGamification.vantagens
        };
    },
    components: { VantagemServicos, Contactform, SectiondubleCartoon, Title }
}
</script>

<style>

</style>