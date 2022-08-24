<template>
  <main>
    <banner 
    :backgroundImage="'https://edudigital.pt/images/two%20happy%20mature%20businessman%20blue.png'" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Soluções Inovadoras de eLearning'"
    >
      <template v-slot:text>
          Com base em plataformas de eLearning e cursos de formação online, apresentamos 
          as melhores opções de flexibilidade e formação à medida.Desenvolvemos soluções 
          de acordo com as suas necessidades de forma a garantir uma formação de qualidade.
      </template>

    </banner>

    <Section
        :id="'case-studies-home'"
        :flex="'column'"
    >
        <Title :title="'Case studies'" />

        <div class="case-studies-container">
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />
            <CaseStudie />

        </div>
    </Section>
  </main>
</template>

<script>
import Section from '~/components/sections/section.vue';
import Title from '~/components/elements/title.vue';
import CaseStudie from '../components/case-studie.vue';
export default {
    components: { Section, Title, CaseStudie }
}
</script>

<style>
    .case-studies-container{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        margin-top: 30px;
    }
</style>