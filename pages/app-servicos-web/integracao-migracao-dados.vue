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
        :id="'integracao-migracao-dados-integracao'"
        :background="'#fff'"
        :img="'https://edudigital.pt/home/images/integrao-01.png'"
        :flexDirection="'row'"
        :color="'#616161'"
      >
        <template v-slot:text>
            <Title :title="'Integração de softwares'" />
            <p>
                Com dezenas de LMS já desenvolvidos em vários países, nós podemos integrar as plataformas 
                Totara e Open-source com outros softwares, permitindo a comunicação entre os vários sistemas, 
                facilitando a partilha automática de dados, garantindo a rapidez e simplicidade de troca de dados, 
                sem a necessidade de passagem manual de ficheiros.
            </p>
        </template>
      </SectiondubleCartoon>

    <VantagemServicos 
        :vantagens="integracaoVantagens" 
        :id="'integracao-migracao-dados-vantagens'"    
        :background="'#D35640'"
        :color="'#fff'"
        :title="'Serviços e Vantagens'"
    />


    <SectiondubleCartoon
        :id="'integracao-migracao-dados-migracao'"
        :background="'#fff'"
        :img="'https://edudigital.pt/home/images/migrao-01.png'"
        :flexDirection="'row-reverse'"
        :color="'#616161'"
      >
        <template v-slot:text>
            <Title :title="'Migração de Bases de Dados'" />
            <p>
                Mapeamos, migramos ou sincronizamos a plataforma de eLearning com o seu software de Recursos Humanos, 
                CRM ou ERP para haver atualizações automáticas de utilizadores, criação de hierarquias, importação de 
                conteúdos digitais ou áreas de conhecimento da sua organização. 
            </p>
        </template>
      </SectiondubleCartoon>

    <VantagemServicos 
        :vantagens="migracaoVantagem" 
        :id="'migracao-dados-vantagens'"    
        :background="'#D35640'"
        :color="'#fff'"
        :title="'Serviços e Vantagens'"
    />


    <Contactform />

  </div>
</template>

<script>
import VantagemServicos from '~/components/elements/vantagemServicos.vue';
import Contactform from '~/components/contactform.vue';
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue';
import Title from '~/components/elements/title.vue';
import AppServicosWebController from '~/controllers/AppServicosWebController';
export default {
    data() {
        return {
            integracaoVantagens: AppServicosWebController.integracao.vantagens,
            migracaoVantagem: AppServicosWebController.migracao.vantagens
        };
    },
    components: { VantagemServicos, Contactform, SectiondubleCartoon, Title }
}
</script>

<style>

</style>