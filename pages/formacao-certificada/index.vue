<template>
  <main>
    <banner
      :title="'Formação Certificada'"
      :background-image="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
      :button-action-text="'Contact-nos'"
      :button-action-href="'/fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        Ganhe tempo e dinheiro com cursos eLearning de catálogo e tenha o nosso
        apoio técnico-pedagógico, como profissionais experientes, para
        identificar os objetivos de eLearning, maximizar o potencial do seu
        projeto e acelerar a implementação.
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_450.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'plataformas-elearning-organograma'">
      <img
        src="https://edudigital.pt/home/images/EDUdigital_Infografia_Formao_20210729-01.png"
        width=""
        alt=""
        srcset=""
      />
    </Section>

    <SectiondubleCartoon
      :id="'plataformas-elearning-open-source'"
      :img="'https://edudigital.pt/home/images/PCcomCurso-04-1.png'"
      :background="'#d35640'"
      style="color: #fff"
    >
      <template #text>
        <Title :title="'Cursos eLearning de Catálogo'" />
        <p>
          Conteúdos de excelente qualidade, feitos por especialistas em cada
          temática. Com opção de branding e validação de ecrãs pelo cliente. Com
          implementação fácil em qualquer plataforma.
        </p>
        <div>
          <NuxtLink
            class="btn btn-secondary"
            to="/formacao-certificada/cursos-elearning-catalogo"
            >Conheça o catálogo</NuxtLink
          >
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-totara'"
      :img="'https://edudigital.pt/home/images/live_training-01.png'"
      :background="'#eee'"
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="'Live Training'" />
        <p>
          Adicione sessões em live training, aos seus cursos eLearning de
          catálogo. Em tempo real, pode frequentar as apresentações do formador,
          adquirindo mais prática. Alcance os mesmos resultados de uma formação
          presencial, a partir qualquer local com internet, participando
          ativamente na aula, interagindo com o formador e os restantes colegas.
        </p>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-cloud'"
      :img="'https://edudigital.pt/home/images/gamification-01.png'"
      :background="'#d35640'"
      style="color: #fff"
    >
      <template #text>
        <Title
          :title="'Formação Inglês Cambridge e Português para Estrangeiros'"
        />
        <p>
          Proporcione à sua empresa, formação de inglês online (ou português
          online), com testes diagnóstico de nível, tutoria em live training com
          as nossas formadoras, manuais de cada nível (A1 a C2), acessos online
          à plataforma e à app agendamento, para marcação mensal das tutorias.
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Saiba mais</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'formacao-certificada-eformadores'"
      :img="'https://edudigital.pt/home/images/lms-form.png'"
      :background="'#eee'"
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="'Cursos de eFormadores e Administradores de LMS'" />
        <p>
          Como especialistas em plataformas de eLearning, fazemos workshops
          práticos para capacitar tecnicamente eFormadores e administradores de
          plataformas eLearning. Fale connosco e preparamos a formação adaptada
          ao perfil dos seus utilizadores: boas práticas de dinamizar a sua
          formação online e os conhecimentos técnicos necessários para a
          administração técnica da sua plataforma eLearning.
        </p>
      </template>
    </SectiondubleCartoon>

    <contactform />
  </main>
</template>

<script>
import PlataformaseLearningController from '../../controllers/PlataformaseLearningController'
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue'
import Section from '~/components/sections/section.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
export default {
  components: { banner, Contactform, Section, SectiondubleCartoon, Title },

  mounted() {},
  methods: {
    animeCartoon() {
      upDownAnimation(this.$refs.cartoon, true)
    },
  },
}
</script>

<style></style>
