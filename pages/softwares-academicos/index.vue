<template>
  <main>
    <banner
      :title="'Softwares Académicos'"
      :background-image="'https://edudigital.pt/images/bigstock-Group-Of-College-Students-With-361644217%20.png'"
      :button-action-text="'Contact-nos'"
      :button-action-href="'fale-connosco'"
      @after-enter="animeCartoon"
    >
      <template #text>
        Softwares de gestão académica personalizados e sistemas anti-plágio que
        fazem exatamente aquilo que a sua instituição precisa, com mais
        relatórios e com mais indicadores para ter mais qualidade de ensino.
        Tenha a sua organização devidamente estruturada na componente
        pedagógica, componente administrativa e na componente financeira, num
        sistema com vários módulos expansíveis e integráveis para responder às
        suas necessidades.
      </template>
      <template #cartoon>
        <img
          ref="cartoon"
          width="400"
          src="https://edudigital.pt/home/images/Grupo_1012.png"
          alt=""
          srcset=""
        />
      </template>
    </banner>

    <Section :id="'softwares accademicos'">
      <img
        src="https://edudigital.pt/home/images/EDUdigital_Infografia_softwares_acadmicos_2021033.png"
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
      :flex-direction="'row-reverse'"
    >
      <template #text>
        <Title :title="'Sistema de Gestão Académica eSchooling'" />
        <p>
          O eSchooling é um software de gestão académica que permite gerir todos
          os aspetos da sua instituição universitária ou escolar, facilitando o
          registo de sumários, faltas, horários, notas, matrículas, planos
          curriculares, certificados e permitindo visualizar toda a gestão
          financeira, propinas, pagamentos por entidade-referência, sem esquecer
          a obtenção de vários relatórios. Tudo isto, auxiliado através da App
          mobile, garantindo aos professores e estudantes a rapidez e
          simplicidade no acesso a todos os seus dados pedagógicos e
          financeiros.
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/">Saiba mais</NuxtLink>
        </div>
      </template>
    </SectiondubleCartoon>

    <SectiondubleCartoon
      :id="'plataformas-elearning-totara'"
      :img="'https://edudigital.pt/home/images/xyz3.png'"
      :background="'#fff'"
      :flex-direction="'row'"
    >
      <template #text>
        <Title :title="'Sistema de Anti-Plágio Ouriginal'" />
        <p>
          Realize a deteção e prevenção do plágio na sua instituição, com este
          sistema que os nossos especialistas integram na sua plataforma de
          eLearning. Professores e estudantes conseguirão fazer upload e
          verificar se os trabalhos submetidos têm a qualidade que a sua
          instituição exige.
        </p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/fale-connosco"
            >Agende a sua reunião</NuxtLink
          >
        </div>
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
