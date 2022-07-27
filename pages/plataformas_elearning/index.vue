<template>
  <banner
    :title="'Plataformas eLearning personalizadas'"
    :backgroundImage="'https://edudigital.pt//images/top-plataformaseLearning%2020210318.png'"
    :buttonActionText="'Contact-nos'"
    @after-enter="animeCartoon"
  >
    <template #text>
      Inovadoras. Poderosas. E open-source. São as plataformas de eLearning que desenvolvemos há mais de 10 anos e em mais de 100 
      clientes pelo mundo. Implementamos as melhores opções de plataformas, num design à medida da sua organização de forma a garantir uma formação de qualidade.
    </template>
    <template #cartoon>
      <img width="400" ref="cartoon" src="https://edudigital.pt/home/images/Grupo_450.png" alt="" srcset="">
    </template>
  </banner>
</template>

<script>
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
export default {
  components: { banner },
  methods:{
    animeCartoon(){
      upDownAnimation(this.$refs.cartoon,true);
    }
  }
}
</script>

<style>

</style>