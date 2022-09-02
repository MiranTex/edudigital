<template>
  <main>
    <banner
      :title="'APPs & Serviços Web'"
      :background-image="'https://edudigital.pt/images/img-top.png'"
      :button-action-text="'Contacte-nos'"
      @after-enter="animeCartoon"
    >
      <template #text>
        Plataformas de eLearning personalizadas que fazem exatamente aquilo que
        a sua organização precisa. Não deveria ter de alterar a sua estratégia
        de formação para se adaptar à sua plataforma. A nossa experiência e
        know-how é que irá organizar as várias tecnologias para implementar uma
        plataforma à sua medida, para as suas necessidades.
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_1032.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'cusrsos-medida-organograma'">
      <img
        src="https://edudigital.pt/images/Grupo_1705.png"
        width=""
        alt=""
        srcset=""
      />
    </Section>

    <SectiondubleCartoon
      :id="'cursos-medida-producao'"
      :background="'#d35640'"
      :img="'https://edudigital.pt/home/images/Integrao_entre_softwares-01.png'"
      :flex-direction="'row-reverse'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Integração entre Softwares'" />
        <p>
          Os nossos learning designers são especialistas em transformar os seus
          manuais existentes em formação interativa de qualidade. Se tem
          formação presencial já pronta, nós redesenhamos para experiências de
          eLearning envolventes e multi-dispositivo. Personalizado com o seu
          branding, cada curso à medida pode incluir as últimas inovações, desde
          interação social até adaptativo.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-base-dados'"
      :background="'#e1e1e1'"
      :img="'https://edudigital.pt/home/images/migrao-01.png'"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Migração de Bases de Dados'" />
        <p>
          Migrar dados de um qualquer sistema para uma plataforma de eLearning
          pode ser um problema para muitas empresas. Como especialistas nesta
          área, fazemos um planeamento cuidado e a abordagem certa, para ser
          possível gerir este processo da passagem de dados e ficheiros sem
          problemas, obtendo os resultados que se pretendem, permitindo trazer o
          histórico de utilizadores e de formação para o novo LMS.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-config'"
      :background="'#008072'"
      :img="'https://edudigital.pt/home/images/Grupo_1026.png'"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Configurações Avançadas'" />
        <p>
          Se pretende que a sua plataforma eLearning tenha funcionalidades
          avançadas e execute tarefas que não são padrões nas plataformas Totara
          ou Open-source, nós temos o conhecimento técnico e fazemos a
          programação para transformar a sua ideia em ferramentas para melhorar
          a sua experiência de aprendizagem. Desde a integração de sistemas de
          web conference no LMS até construção de relatórios, desde criação de
          audiências até monitorização de assiduidade.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-autenticacao'"
      :background="'#e1e1e1'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Sistemas de Autenticação'" />
        <p>
          Nós facilitamos a forma com os utilizadores fazem o login nas
          plataformas. A autenticação é o processo que permite ao utilizador
          entrar na plataforma de eLearning e existem vários métodos para
          autenticação de utilizadores. O nosso trabalho é encontrar o melhor
          método de autenticação avançada que se ajuste à sua situação e que
          facilite o login a partir de qualquer lado.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'app-servico-web-elibrary'"
      :background="'#d35640'"
      :img="require('~/assets/img/cartoon/Grupo_1030_.png')"
      :flex-direction="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'Sistema de eLibrary'" />
        <p>
          Se pretende integrar uma biblioteca digital com mais de 1700 eBooks e
          audioBooks na sua plataforma de eLearning, com várias áreas de
          conhecimento e conteúdos práticos de leitura que vão de 1 a 2 horas, a
          EDUdigital integra este sistema eLibrary para complementar os seus
          cursos de eLearning.
        </p>
      </template>
    </SectiondubleCartoon>
    <contactform />
  </main>
</template>

<script>
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import { upDownAnimation } from '~/assets/js/animate'
import Sectiondouble from '~/components/sections/sectiondouble.vue'

export default {
  components: {
    banner,
    Contactform,
    Section,
    SectiondubleCartoon,
    Title,
    Sectiondouble,
  },

  methods: {
    animeCartoon() {
      upDownAnimation(this.$refs.cartoon, true)
    },
  },
}
</script>

<style></style>
