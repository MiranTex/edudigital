<template>
  <div>
    <banner 
    :backgroundImage="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Estamos aqui para ajudar'"
    >
      <template v-slot:text>
          Seja para começar a planificar uma plataforma eLearning, seja para adquirir novos cursos eLearning para a sua organização, 
          ou porque necessita de alguma orientação na formação online 
          que quer iniciar – nós ficamos felizes por poder ajudar! Alguém da nossa equipa vai falar consigo em breve.
      </template>

    </banner>
    <Section :background="'#eee'" :id="'cont'" :fluid="true" :noPadding="true">
    <div>
      <div class="fale-connosco-locale-info">
        <strong><Title  :title="'Escritórios'"/></strong>
        <Title :type="'title'" :title="'Portugal'"></Title>
        <div>
          <p>+351 214391476</p>
          <p>geral@edudigital.pt</p>
          <p>Taguspark - Parque da Ciência e Tecnologia</p>
          <p>Núcleo Central, nº 302</p>
          <p>2740-122 Oeiras</p>
        </div>

      </div>
    </div>
    
    <div>
      
      <Googlemap />
    </div>
    </Section>
    
    
    <contactform />
  </div>
</template>

<script>
import contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
export default {
  components: { contactform, Section, Title },

}
</script>

<style socped lang="scss">
#cont{
    div{
      div{
        
        flex: 1;
      }
    }
  }


  .fale-connosco-locale-info{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1, h3{
      margin-bottom: 10px;
    }
    width: 50%;
    margin: auto;
    color: #616161;
  }


  @media screen and (max-width:900px) {

    .fale-connosco-locale-info{
      padding: 30px 0;
    }
    #cont{
      & > div{
        & > div{
          width: 100%;
        }
      }
    }
  }
</style>