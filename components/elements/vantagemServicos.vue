<template>
  
  <Section 
        :id="id"
        :style="'color:'+color"
        :flex="'column'"
        :background="background"
        >

      <Title :title="title" class="py" />

      <Section 
      :id="id+'-vantagens-content'"
      :style="`margin-top:${30}px; color:${color}`"
      :noPadding="true"
      :contentJustify="'start'"
      :shouldAnime="false"
      @end-animation="animeIcons"
      >
        <div class="vantagem-container">
          <IconText :color="color" class="vantagem" v-for="(vant,j) in vantagens" :key="j+$id()" :id="j+$id()" :title="vant.title" :icon="vant.icon">
            {{vant.text}}
          </IconText>
        </div>
      </Section>
    </Section>
</template>

<script>
import { animeList } from '~/assets/js/animate'
import IconText from './icon-text.vue';
import Section from '../sections/section.vue';
import Title from './title.vue';
export default {
    props: ["id", "color", "background", "vantagens","title"],
    methods: {
        animeIcons() {
            animeList(document.getElementsByClassName("vantagem"));
        }
    },
    components: { IconText, Section, Title }
}
</script>

<style>

</style>