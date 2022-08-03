<template>
  <div>
    <banner 
    :backgroundImage="require('~/assets/img/banner-bg.jpg')" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Quem somos'"
    >
      <template v-slot:text>
          Com mais de 10 anos de experiência a desenvolver soluções para eLearning e com escritórios em 4 mercados lusófonos – Portugal, Moçambique, Angola, Cabo Verde, a EDUdigital sabe que a aprendizagem liberta o potencial de cada pessoa e de cada organização. É por isso que implementamos plataformas 
          e desenvolvemos conteúdos para melhorar a igualdade entre as pessoas, favorecer o acesso a formação de qualidade e promover a aprendizagem ao longo da vida.
          <br>
          <br>
          <strong>Nós acreditamos que a Aprendizagem nunca acaba.</strong>
      </template>

    </banner>

    <Section :id="'sobre-nos-o-que-fazemos'" style="color:var(--color-cinza)" :flex="'column'" @end-animation="anime">
        <Title  :color="'#616161'" :title="'O que fazemos'" />

        <Section :noPadding="true" id="o-que-fazemos-content">
            <div><img ref="cartoon" width="400" src="https://edudigital.pt/home/images/OQueFazemosN.png" alt=""></div>
            <div> 
                <p>
                    A EDUdigital sempre foi especialista em tecnologias na aprendizagem – é a nossa paixão. <br> <br>

                    Qualquer que seja a necessidade, seja um curso à medida, um módulo online do catálogo, uma plataforma eLearning, um software académico ou a configuração de um serviço web, na EDUdigital possuímos o know-how para uma formação eficaz em tudo aquilo que fazemos. <br> <br>

                    Para nós, o cliente não tem de moldar a sua organização para se ajustar à tecnologia, e é aqui que nós entramos. <br> <br>

                    Os resultados do cliente são o nosso objetivo e somos transparentes nas soluções que propomos. <br> <br>

                    A nossa experiência assegura que a sua plataforma de eLearning ou o seu curso eLearning deve potenciar o envolvimento dos utilizadores e dar poder à sua organização para atingir os objetivos. <br> <br>
                </p>
            </div>
        </Section>
    </Section>

    <Section :id="'sobre-nos-porque-escolhernos'" :background="'#d35640'" style="color:#fff">
        <Title :title="'Porquê escolher-nos'" />
    </Section>
  </div>
</template>

<script>
import Section from '~/components/sections/section.vue';
import Title from '~/components/elements/title.vue';
import {  upDownAnimation } from '~/assets/js/animate';
export default {
    components: { Section, Title },

    methods:{
        anime(){
            upDownAnimation(this.$refs.cartoon)
        }
    }
}
</script>

<style scoped lang="scss">
    #o-que-fazemos-content{
        display: flex;
        flex-direction: row;
        margin-top: 30px;

        div{
            display: flex;
            flex-direction: column;
            flex: 1;
            align-content: center;
            justify-content: space-evenly;
        }
    }
</style>