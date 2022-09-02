<template>
  <div>
    <banner
      :background-image="'https://edudigital.pt/images/bigstock-Group-Of-Young-Mixed-Race-Busi-336010132-.png'"
      :columns-template="'2fr 1fr'"
      :title="$translate().sobre_nos.banner.title"
    >
      <template #text>
        {{$translate().sobre_nos.banner.text}}
        <br />
        <br />
        <strong style="color: #fff"
          >{{$translate().sobre_nos.banner.text_}}</strong
        >
      </template>
    </banner>

    <Section
      :id="'sobre-nos-o-que-fazemos'"
      style="color: var(--color-cinza)"
      :flex="'column'"
      @end-animation="anime"
    >
      <Title :color="'#616161'" :title="$translate().sobre_nos.what_we_do.title" />

      <Section id="o-que-fazemos-content" :no-padding="true">
        <div>
          <img
            ref="cartoon"
            width="400"
            src="https://edudigital.pt/home/images/OQueFazemosN.png"
            alt=""
          />
        </div>
        <div>
          <p>
           {{$translate().sobre_nos.what_we_do.text_1}}
            <br />
            <br />

            {{$translate().sobre_nos.what_we_do.text_2}} 
            <br />
            <br />

            {{$translate().sobre_nos.what_we_do.text_3}} 
            <br />
            <br />

            {{$translate().sobre_nos.what_we_do.text_4}} 
            <br />
            <br />

            {{$translate().sobre_nos.what_we_do.text_5}} 
            <br />
            <br />
          </p>
        </div>
      </Section>
    </Section>

    <Section
      :id="'porque-escolher-nos'"
      :fluid="true"
      :background="'#d35640'"
      style="color: #fff"
      :flex="'column'"
    >
      <Title :title="$translate().sobre_nos.why_choose_us.title" />
      <Sectionduble
        :id="'sobre-nos-porque-escolhernos-content'"
        :img="'https://edudigital.pt/home/images/PorqueEscolhernos.png'"
        :no-padding="true"
        @end-animation="animeMotivos"
      >
        <template #text>
          <IconText
            v-for="motivo in motivos"
            :key="motivo.id"
            class="motivos"
            :color="'#fff'"
            :title="motivo.title"
            :icon="motivo.icon"
            :icon-width="70"
          >
            {{ motivo.text }}
          </IconText>
        </template>
      </Sectionduble>
    </Section>

    <Sectiondouble :id="'sobre-nos-badges'" @end-animation="animeBadges">
      <template #left>
        <img
          class="badges"
          width="300"
          src="https://edudigital.pt/home/images/top3.jpg"
          alt=""
      /></template>
      <template #right
        ><img
          class="badges"
          width="300"
          src="https://edudigital.pt/home/images/top50.png"
          alt=""
      /></template>
    </Sectiondouble>

    <Section
      :id="'sobre-nos-parceria'"
      style="color: #fff"
      :flex="'column'"
      :background="'#d35640'"
    >
      <div>
        <Title :title="$translate().sobre_nos.partnerships.title" />
        <p>{{$translate().sobre_nos.partnerships.text}}</p>
      </div>
    </Section>

    <!-- <Section :id="'sobre-nos-parceiros-carousel'">
      <Carousel />
    </Section> -->

    <Section
      :id="'sobre-nos-nossa-experiencia'"
      style="color: #fff"
      :flex="'column'"
      :background="'var(--color-verde)'"
    >
      <div class="flex">
        <Title :text-align="'center'" :title="$translate().sobre_nos.our_experience.title" />
        <div style="margin-top: 20px">
          <p>{{$translate().sobre_nos.our_experience.text}}</p>
        </div>
        <div
          class="experiencia-numbers-container"
          style="margin-top: 100px; display: flex; justify-content: center"
        >
          <div
            style="width: 80%"
            class="d-flex justify-between experiencia-numbers"
          >
            <Counter :title="$translate().sobre_nos.our_experience.active_users" :val="90000" />
            <Counter :title="$translate().sobre_nos.our_experience.customers_world" :val="100" />
            <Counter :title="$translate().sobre_nos.our_experience.online_platforms" :val="80" />
          </div>
        </div>
      </div>
    </Section>

    <Section
      :id="'sobre-nos-reponsabilidade-social'"
      :background="'var(--color-vermelho)'"
      style="color: #fff"
      :flex="'column'"
    >
      <Title
        :title="$translate().sobre_nos.social_responsibility.title"
        :text-align="'center'"
        style="margin-bottom: 30px"
      />

      <div class="d-flex flex-column">
        <p style="margin-bottom: 30px">{{$translate().sobre_nos.social_responsibility.text}}</p>

        <div class="d-flex justify-between wrap">
          <Responsabilidade
            :nome="'EDUdigital'"
            :regiao="'Portugal'"
            :entidade="'Organização Não Governamental para Desenvolvimento'"
            :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'"
          />
          <Responsabilidade
            :nome="'EDUdigital'"
            :regiao="'Portugal'"
            :entidade="'Organização Não Governamental para Desenvolvimento'"
            :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'"
          />
          <Responsabilidade
            :nome="'EDUdigital'"
            :regiao="'Portugal'"
            :entidade="'Organização Não Governamental para Desenvolvimento'"
            :apoio="'Apadrinhamento de estudantes do ensino secundário em Moçambique, através de apoio de bolsas de estudo.'"
          />
        </div>
      </div>
    </Section>

    <!-- <Sectionduble
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
    </Sectionduble> -->
  </div>
</template>

<script>
import { v4 as uidv4 } from 'uuid'
import Carousel from '../components/carousel.vue'
import Section from '~/components/sections/section.vue'
import Title from '~/components/elements/title.vue'
import { animeList, anime_, upDownAnimation } from '~/assets/js/animate'
import Sectionduble from '~/components/sections/sectiondubleCartoon.vue'
import IconText from '~/components/elements/icon-text.vue'
import Sectiondouble from '~/components/sections/sectiondouble.vue'
import Responsabilidade from '~/components/responsabilidade.vue'
import Counter from '~/components/counter.vue'

export default {
  components: {
    Section,
    Title,
    Sectionduble,
    IconText,
    Sectiondouble,
    Carousel,
    Responsabilidade,
    Counter,
  },

  data() {
    return {
      motivos: [
        {
          id: uidv4(),
          icon: 'https://edudigital.pt/home/images/Grupo_958.png',
          title: this.$translate().sobre_nos.why_choose_us.specialized_team.title,
          text: this.$translate().sobre_nos.why_choose_us.specialized_team.text
        },
        {
          id: uidv4(),
          icon: 'https://edudigital.pt/home/images/Grupo_948.png',
          title:this.$translate().sobre_nos.why_choose_us.Tailored_to_you.title,
          text: this.$translate().sobre_nos.why_choose_us.Tailored_to_you.text
        },
        {
          id: uidv4(),
          icon: 'https://edudigital.pt/home/images/Grupo_885.png',
          title:this.$translate().sobre_nos.why_choose_us.by_your_side.title,
          text:this.$translate().sobre_nos.why_choose_us.by_your_side.text
        },
        {
          id: uidv4(),
          icon: 'https://edudigital.pt/home/images/Grupo_1579.png',
          title: this.$translate().sobre_nos.why_choose_us.learning_future.title,
          text: this.$translate().sobre_nos.why_choose_us.learning_future.text
        },
      ],
    }
  },

  mounted() {},

  methods: {
    anime() {
      upDownAnimation(this.$refs.cartoon)
    },

    animeMotivos() {
      animeList(animeList(document.getElementsByClassName('motivos')))
    },

    animeBadges() {
      upDownAnimation(
        document.getElementsByClassName('badges'),
        true,
        (el, i, l) => {
          return i * 500
        }
      )
    },
  },
}
</script>

<style scoped lang="scss">
#o-que-fazemos-content {
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-content: center;
    justify-content: space-evenly;
  }
}

#sobre-nos-parceria {
  div {
    width: 60%;
    text-align: justify;

    p {
      margin-top: 10px;
    }
  }
}

@media screen and (max-width: 600px) {
  #sobre-nos-porque-escolhernos-content {
    .motivos {
      margin: 0 300px;
    }
  }

  .experiencia-numbers {
    flex-direction: column;
    gap: 20px;
  }

  .experiencia-numbers-container {
    margin: auto;
  }
}
</style>
