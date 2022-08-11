<template>
  <div>
    <banner 
    :backgroundImage="'https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'" 
    :columnsTemplate="'1fr 1fr'"
    :title="'Plataformas eLearning Open-source'"
    :buttonActionText="'Fale Connosco'"
    :buttonActionHref="'/fale-connosco'"
    >
      <template v-slot:text>
          Produza cursos eLearning, faça a gestão de utilizadores e monitorize o desempenho de cada formando, tudo dentro da nossa plataforma eLearning EDULearn, sem custos de subscrição e com total flexibilidade. Com os nossos anos de experiência, 
          entregamos-lhe um LMS personalizado, com vários plug-ins, segurança de acessos, updates periódicos e suporte técnico-pedagógico.
      </template>

    </banner>


    <Section 
    :id="'plataformas-open-source-servicos-vantagens'"
    style="color:var(--color-cinza)"
    :flex="'column'"
    >

      <Title :title="'Serviços e Vantagens'" class="py" />

      <Section 
      id="plataformas-open-source-servicos-vantagens-content"
      :fluid="true"
      :noPadding="true"
      :contentJustify="'start'"
      :shouldAnime="false"
      @end-animation="animeIcons"
      >
        <div v-for="(vantagem,i) in vantagens" :key="i+id()" class="is-align-self-baseline">
          <IconText class="vantagem" v-for="(vant,j) in vantagem" :key="j+id()" :id="j+id()" :title="vant.title" :icon="vant.icon">
            {{vant.text}}
          </IconText>
        </div>

      </Section>

    </Section>

    <Sectionduble
      :id="'plataformas-open-source-app-mobile'"
      :background="'var(--color-verde)'"
      :img="'https://edudigital.pt/home/images/Grupo_4665x.png'"
      :flexDirection="'row'"
      :color="'#fff'"
    >
      <template #text>
        <Title :title="'App Mobile'" />
        <p>A App móvel permite uma maior flexibilidade e acessibilidade 
          na formação à distância, pela qual os utilizadores podem aprender em qualquer local, qualquer momento, interagir com o seu grupo e ficar a par do seu progresso.</p>
        <div>
          <NuxtLink class="btn btn-primary" to="/fale-connosco">Fale Connosco</NuxtLink>
        </div>
      </template>
    </Sectionduble>


    <Sectionduble
      :id="'plataformas-open-source-app-formacao-lms'"
      :background="'var(--color-light)'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flexDirection="'row-reverse'"
      :color="'var(--color-cinza)'"
    >
      <template #text>
        <Title :title="'Formação LMS de Administradores e eFormadores'" />
        <p>Somos uma entidade certificada pela DGERT (normas da União Europeia) para lecionar formação de eFormadores LMS ou Administradores de Plataformas. Ambas as formações são para transferir conhecimento para os clientes, seja para dinamizar pedagogicamente as formações online, seus cursos, formandos, seja para configurar tecnicamente a plataforma, sua estrutura, perfis, autenticações, entre outros.
        Fale Connosco</p>
        <div>
          <NuxtLink class="btn btn-secondary" to="/fale-conosco">Fale Connosco</NuxtLink>
        </div>
      </template>
    </Sectionduble>

    <contactform />
  </div>
</template>

<script>
import Section from '~/components/sections/section.vue';
import Title from '~/components/elements/title.vue';
import IconText from '~/components/elements/icon-text.vue';
import {v4 as uidv4} from "uuid";
import Contactform from '~/components/contactform.vue';
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue';
import { animeList, anime_ } from '~/assets/js/animate';
export default {
    components: { Section, Title, IconText, Contactform, Sectionduble },
    
    data(){
      return{
        vantagens:[
          [
            {
              icon:"https://edudigital.pt/home/images/Grupo_604.png",
              title:"Planos formação & Estruturação LMS",
              text:"Estruture planos de formação, sequenciais, baseados em currículos, competências ou uma estrutura com base nas necessidades da sua organização a partir de uma plataforma intuitiva e adaptada à necessidade da sua organização."
            },

            {
              icon:"https://edudigital.pt/home/images/Grupo_735.png",
              title:"Hosting gerido & updates",
              text:"Faça o alojamento em servidores com back-ups diários, atualizações de software, acessos em segurança e suporte 24h/7d."
            },

            {
              icon:"https://edudigital.pt/home/images/Grupo_788.png",
              title:"Integração e Migração de Dados",
              text:"Conecte outros softwares à Plataforma eLearning, para comunicação de dados e/ou migração de utilizadores ou pautas entre ambos."
            },

            {
              icon:"https://edudigital.pt/home/images/Grupo_790.png",
              title:"App mobile",
              text:"Utilize a plataforma em qualquer smartphone, tablet ou PC, com a sincronização ativa com o LMS, desenvolvendo uma user experience e acesso ao LMS em vários dispositivos, através do nosso interface intuitivo."
            },

          ],
          [
            { 
              icon:"https://edudigital.pt/home/images/Grupo_604.png",
              title:"Design Personalizado",
              text:"Plataforma com o seu branding, UX design, painéis de controlo e funcionalidades à medida."
            },

            { 
              icon:"https://edudigital.pt/home/images/Grupo_749.png",
              title:"Relatórios & plug-ins",
              text:"Acompanhe o progresso dos formandos através de relatórios personalizados, pautas, certificados de formação e inserção de dezenas de plug-ins úteis que configuramos no LMS."
            },


            { 
              icon:"https://edudigital.pt/home/images/Grupo_785.png",
              title:"Formação LMS",
              text:"Realize formação de eFormadores ou de Administradores da Plataforma, para criar audiências dinâmicas, gerir inscrições, perfis e dinamização pedagógica do LMS."
            },


            { 
              icon:"https://edudigital.pt/home/images/Grupo_786.png",
              title:"Suporte técnico-pedagógico",
              text:"A nossa equipa especializada responde e ajuda-o via telefone ou online (24h/7d) em vários incidentes técnicos ou pedagógicos."
            },

          ]
        ]
      }
    },
    methods:{
      id(){
        return uidv4();
      },

      animeIcons(){
            animeList(document.getElementsByClassName("vantagem"))
        
      }
      
    }
}
</script>

<style>

#plataformas-open-source-servicos-vantagens-content{
  margin-top: 30px;
}

</style>