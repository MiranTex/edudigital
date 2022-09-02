<template>
  <div>
    <Banner
      :background-image="'	https://edudigital.pt/images/bigstock-Two-Smiling-Businessmen-Or-Pro-241216258%20.jpg'"
      :title="'Configurações avançadas & autenticação'"
      :columns-template="'2fr 1fr'"
      :button-action-text="'Agenda a sua reunião'"
      :button-action-href="'/fale-connosco'"
    >
      <template #text>
        Trabalhamos com plataformas open-source, flexíveis e que nos permitem
        fazer configurações avançadas, adicionar vários plugins à medida das
        suas necessidades de aprendizagem. Integrar um sistema de web conference
        na plataforma, integrar sistemas de autenticação, rastrear desempenho,
        criar planos de formação ou construir relatórios personalizados são
        atividades que fazemos há vários anos e em vários setores de atividade.
      </template>
    </Banner>

    <SectiondubleCartoon
      :id="'configuracao-avancada'"
      :background="'#fff'"
      :img="require('~/assets/img/cartoon/grp_apps_01_.png')"
      :flex-direction="'row'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Integração de softwares'" />
        <p>
          Explore as possibilidades sem limites das plataformas que instalamos,
          com plugins à medida, configurações expansíveis e que lhe entregam
          formação eficaz, com planos de formação, com estruturas hierárquicas,
          com gestão da formação presencial, com relatórios e dezenas de outras
          ferramentas que melhoram a sua aprendizagem.
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'integracao-migracao-dados-vantagens'"
      :vantagens="configAvancadaVantagens"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <SectiondubleCartoon
      :id="'config-avancada-autenticacao'"
      :background="'#fff'"
      :img="'https://edudigital.pt/home/images/autenticaao-02.png'"
      :flex-direction="'row-reverse'"
      :color="'#616161'"
    >
      <template #text>
        <Title :title="'Sistemas de autenticação'" />
        <p>
          As configurações avançadas de autenticação permitem ao utilizador
          entrar nas plataformas de eLearning sem repetir diariamente o mesmo
          processo de inserir logins e passwords. O trabalho dos nossos técnicos
          é desenvolver o método de autenticação que melhor se ajusta à sua
          situação e que facilita o acesso a partir de qualquer lado e qualquer
          dispositivo..
        </p>
      </template>
    </SectiondubleCartoon>

    <VantagemServicos
      :id="'migracao-dados-vantagens'"
      :vantagens="autenticacaoVantagem"
      :background="'#D35640'"
      :color="'#fff'"
      :title="'Serviços e Vantagens'"
    />

    <Contactform />
  </div>
</template>

<script>
import VantagemServicos from '~/components/elements/vantagemServicos.vue'
import Contactform from '~/components/contactform.vue'
import SectiondubleCartoon from '~/components/sections/sectiondubleCartoon.vue'
import Title from '~/components/elements/title.vue'
import AppServicosWebController from '~/controllers/AppServicosWebController'
export default {
  components: { VantagemServicos, Contactform, SectiondubleCartoon, Title },
  data() {
    return {
      configAvancadaVantagens:
        AppServicosWebController.configuracaoAvancada.vantagem,
      autenticacaoVantagem:
        AppServicosWebController.configuracaoAvancada
          .configuracaoAvancadaAutenticacao.vantagens,
    }
  },
}
</script>

<style></style>
