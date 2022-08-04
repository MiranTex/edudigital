<template>
    <main>
        <banner
             :title="'Personalização de conteúdos eLearning, lado a lado consigo'"
            :backgroundImage="'https://edudigital.pt/images/bigstock-Smiling-African-American-Girl-blue.png'"
            :buttonActionText="'Contacte-nos'"
            @after-enter="animeCartoon"
        >
            <template #text>
                Desde 2012 que criamos eLearning à medida para organizações em todo o mundo, desde instituições sem fins lucrativos até empresas multinacionais, para vários setores e indústrias. Qualquer que seja o seu projeto eLearning, nós podemos estar lado a lado consigo para o desenvolver. Desde um pedaço de microlearning até programas de formação mais globais e complexos, com milhares de pessoas.
            </template>
             <template #cartoon>
                <img width="400" ref="cartoon" src="https://edudigital.pt/home/images/Grupo_821.png" alt="" srcset="">
            </template>
        </banner>
    
        
        <contactform />
   
    </main>
    
    

</template>


<script>
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Contactform from '~/components/contactform.vue';
export default {
  components: { banner, Contactform },
  methods:{
    animeCartoon(){
      upDownAnimation(this.$refs.cartoon,true);
    }
  }
}
</script>

<style>

</style>