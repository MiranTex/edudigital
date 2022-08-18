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

        <sectionduble
          :id="'producao-eLearning-personalizado'"
          :background="'var(--color-verde)'"
          :img="'https://edudigital.pt/home/images/PCcomCurso-04-11.png'"
          :flexDirection="'row'"
          :color="'#fff'"
          >
          <template #text>
            <Title :title="'Produção eLearning personalizado'" />
            <p>Os nossos learning designers são especialistas em transformar os seus 
              manuais existentes em formação interativa de qualidade. Se tem formação presencial já pronta, 
              nós redesenhamos para experiências de eLearning envolventes e multi-dispositivo. Personalizado com o seu branding, 
              cada curso à medida pode incluir as últimas inovações, desde interação social até adaptativo.</p>
            <div>
              <NuxtLink class="btn btn-primary" to="#">Saiba Mais</NuxtLink>
            </div>

          </template>

        </sectionduble>

        <sectionduble
          :id="'motion-graphics-gamification'"
          :background="'#d35640'"
          :img="'https://edudigital.pt/home/images/Grupo_819.png'"
          :flexDirection="'row-reverse'"
          :color="'#fff'"
          >
          <template #text>
            <Title :title="'Motion Graphics & Gamification'" />
            <p>Para um nível acima de soluções de eLearning, realizamos gravações vídeo e locuções, 
              animações em motion graphics ou realçamos formatos de eLearning tradicionais com mecânicas de jogo ou aprendizagem social, para uma aprendizagem de futuro.</p>
            <div>
              <NuxtLink class="btn btn-secondary" to="#">Saiba Mais</NuxtLink>
            </div>
          </template>

        </sectionduble>
        
        
        <contactform />
   
    </main>
    
    

</template>


<script>
import { upDownAnimation } from '~/assets/js/animate'
import banner from '~/components/banner.vue'
import Title from '~/components/elements/title.vue'
import Contactform from '~/components/contactform.vue';
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue';
export default {
  components: { banner, Title, Sectionduble, Contactform },
  methods:{
    animeCartoon(){
      upDownAnimation(this.$refs.cartoon,true);
    }
  }
}
</script>

<style>

</style>