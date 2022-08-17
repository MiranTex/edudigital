<template>
  <div>
    <banner 
    :backgroundImage="'https://edudigital.pt/images/bigstock-Group-Of-Young-Mixed-Race-Busi-336010132-.png'" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Quem somos'"
    >
      <template v-slot:text>
          Com mais de 10 anos de experiência a desenvolver soluções para eLearning e com escritórios em 4 mercados lusófonos – Portugal, Moçambique, Angola, Cabo Verde, a EDUdigital sabe que a aprendizagem liberta o potencial de cada pessoa e de cada organização. É por isso que implementamos plataformas 
          e desenvolvemos conteúdos para melhorar a igualdade entre as pessoas, favorecer o acesso a formação de qualidade e promover a aprendizagem ao longo da vida.
          <br>
          <br>
          <strong style="color:#fff">Nós acreditamos que a Aprendizagem nunca acaba.</strong>
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

    <Section :id="'sobre-nos-porque-escolhernos'" :fluid="true" :background="'#d35640'" style="color:#fff" :flex="'column'">
        <Title :title="'Porquê escolher-nos'"/>
        <Sectionduble
            :id="'sobre-nos-porque-escolhernos-content'"
            :img="'https://edudigital.pt/home/images/PorqueEscolhernos.png'"
            :noPadding="true"
            @end-animation = "animeMotivos"
        >
        <template #text>
            
            <IconText class="motivos" v-for="motivo in motivos" :color="'#fff'" :key="motivo.id" :title="motivo.title" :icon="motivo.icon" :icon-width="70" >
               {{motivo.text}}
            </IconText>
        </template>
    
        </Sectionduble>
    </Section>


    <Sectiondouble
        :id="'sobre-nos-badges'"
        @end-animation="animeBadges"
    >

        <template #left> <img class="badges" width="300" src="https://edudigital.pt/home/images/top3.jpg" alt=""/></template>
        <template #right><img class="badges" width="300" src="https://edudigital.pt/home/images/top50.png" alt=""/></template>

    </Sectiondouble>


    <Section
        :id="'sobre-nos-parceria'"
        style="color:#fff"
        :flex="'column'"
        :background="'#d35640'"
    >
        <div>
            <Title :title="'Parcerias'" />
            <p>Combinamos o nosso know-how interno com 
                parceiros mundiais na área das plataformas elearning open-source, como a Totara, e também na 
                área de outras aplicações e conteúdos digitais, que nos garantem qualidade e soluções que respondem
                 àquilo que o cliente necessita e aos resultados que quer atingir.
            </p>
            
        </div>

    </Section>

    <Section
        :id="'sobre-nos-parceiros-carousel'"
    >
        <Carousel/>
    </Section>


    <Section
        :id="'sobre-nos-nossa-experiencia'"
        style="color:#fff"
        :flex="'column'"
        :background="'var(--color-verde)'"
    >
        <div class="flex">
            <Title :textAlign="'center'" :title="'A nossa experiência'" />
            <div style="margin-top: 20px">
                <p>Já fazemos isto há algum tempo e a nossa equipa 
                    de especialistas cria conteúdos e soluções tecnológicas que 
                    envolvem e dão competências aos nossos formandos espalhados pelo 
                    mundo inteiro, incluindo com o nosso suporte técnico e pedagógico.
                </p>

            </div>
            <div class="experiencia-numbers-container" style="margin-top: 100px; display:flex; justify-content: center;">

                <div style="width:80%" class="d-flex justify-between experiencia-numbers">
                    <Counter :title="'Utilizadores ativos'" :val="90000"/>
                    <Counter :title="'Clientes pelo mundo'" :val="100" />
                    <Counter :title="'Plataformas online'" :val="80" />
    
                </div>
            </div>
            
        </div>

    </Section>

    <Section
        :id="'sobre-nos-reponsabilidade-social'"
        :background="'var(--color-vermelho)'"
        style="color:#fff"
        :flex="'column'"
    >
        <Title :title="'Responsabilidade Social'" :textAlign="'center'" style="margin-bottom:30px" />

        <div class="d-flex flex-column">
            <p style="margin-bottom:30px">Na EDUdigital, acreditamos que devemos retribuir às organizações sem fins lucrativos e às pessoas mais carenciadas, 
                aquilo que a própria sociedade nos dá, num dinamismo de retribuição pelo trabalho que temos, pelos projetos que a 
                nossa equipa desempenha e que geram valor acrescentado para pessoas que trabalham connosco, parceiros e fornecedores, 
                nos vários mercados onde atuamos. Contribuímos para projetos de solidariedade, causas sociais ou educativas, 
                nomeadamente para entidades sem fins lucrativos que apoiam pessoas de diferentes faixas etárias em vários em 
                vias de desenvolvimento, sobretudo África.
            </p>

            <div class="d-flex justify-between wrap">
                <Responsabilidade :nome="'EDUdigital'" :regiao="'Portugal'" :entidade="'Organização Não Governamental para Desenvolvimento'" :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'" />
                <Responsabilidade :nome="'EDUdigital'" :regiao="'Portugal'" :entidade="'Organização Não Governamental para Desenvolvimento'" :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'" />
                <Responsabilidade :nome="'EDUdigital'" :regiao="'Portugal'" :entidade="'Organização Não Governamental para Desenvolvimento'" :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'" />
            </div>
        </div>
    </Section>

    <Sectionduble
      :id="'sobre-nos-recrutamento'"
      :img="'https://edudigital.pt/home/images/Recrutamento.png'"
      :flexDirection="'row-reverse'"
      :color="'var(--color-cinza)'"
    >
      <template #text>
        <Title :title="'Recrutamento'"/>
        <p>Interessado em pertencer à nossa equipa? Na EDUdigital,
            trabalhamos em várias geografias, partilhamos projetos comuns
            e valorizamos o trabalho em equipa sem fronteiras, numa visão
            de liderar o setor das tecnologias na aprendizagem nos países
            de língua portuguesa
        </p>
        <div>
          <a class="btn btn-secondary" target="_blank" href="https://recrutamento.edudigital-learn.com/">Candidatura espontânea <v-icon
          dark
          right
        >
          mdi-open-in-new
        </v-icon></a>
        </div>
      </template>
    </Sectionduble>

  </div>
</template>

<script>
import Section from '~/components/sections/section.vue';
import Title from '~/components/elements/title.vue';
import {  animeList, anime_, upDownAnimation } from '~/assets/js/animate';
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue';
import IconText from '~/components/elements/icon-text.vue';
import {v4 as uidv4} from "uuid";
import Sectiondouble from '~/components/sections/sectiondouble.vue';
import Carousel from '../components/carousel.vue';
import Responsabilidade from '~/components/responsabilidade.vue';
import Counter from '~/components/counter.vue';

export default {
    components: { Section, Title, Sectionduble, IconText, Sectiondouble, Carousel, Responsabilidade, Counter },

    data(){
        return{
            motivos:[
                {
                    id: uidv4(),
                    icon:"https://edudigital.pt/home/images/Grupo_958.png",
                    title: "Equipa Especializada",
                    text: "A nossa equipa experiente e multidisciplinar possui formação nas mais variadas áreas. Desde engenharia informática à gestão, design & multimédia e pedagogia em tecnologias de informação e comunicação, fornecemos todos os serviços de que necessita para o seu projeto."
                },
                {
                    id: uidv4(),
                    icon: "https://edudigital.pt/home/images/Grupo_948.png",
                    title: "À sua medida",
                    text: "Cada organização apresenta as suas próprias necessidades, desafios e orçamentos. Desta forma, oferecemos um conjunto de serviços personalizados e adaptados a cada cliente que combinam criação de valor, qualidade e otimização de custos."
                },
                {
                    id: uidv4(),
                    icon: "https://edudigital.pt/home/images/Grupo_885.png",
                    title: "Ao seu lado, desde a génese",
                    text: "Acompanhamos o seu projeto desde o início até à implementação final, prestando serviços de vários tipos, desde consultoria pedagógica e tecnológica, multimédia e informática."
                },
                {
                    id: uidv4(),
                    icon: "https://edudigital.pt/home/images/Grupo_1579.png",
                    title: "A aprendizagem do futuro",
                    text: "Acreditamos que o eLearning é um método de aprendizagem virado para o futuro, que irá ter cada vez mais procura. Nesse sentido, acompanhamos as tendências do mercado e disponibilizamos aos nossos clientes as soluções mais atuais."
                }

            ]
        }
    },  

    methods:{
        anime(){
            upDownAnimation(this.$refs.cartoon);
        },

        animeMotivos(){
            animeList(animeList(document.getElementsByClassName("motivos")))
        },

        animeBadges(){
            
            upDownAnimation(document.getElementsByClassName("badges",false,(el,i,l)=>{return i*500}))
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

    #sobre-nos-parceria{

        div{
            width: 60%;
            text-align: justify;

            p{
                margin-top: 10px;
            }
        }

    }

    @media screen and (max-width:600px) {
        #sobre-nos-porque-escolhernos-content{
            .motivos{
                margin: 0 300px;
            }
        }

        .experiencia-numbers{
            flex-direction: column;
            gap: 20px;
        }

        .experiencia-numbers-container{
            margin: auto;
        }
    }
</style>