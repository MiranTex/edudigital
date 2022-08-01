<template>
  <div>
    <banner 
    :backgroundImage="require('~/assets/img/banner-bg.jpg')" 
    :columnsTemplate="'2fr 1fr'"
    :title="'Estamos aqui para ajudar'"
    >
      <template v-slot:text>
          Seja para começar a planificar uma plataforma eLearning, seja para adquirir novos cursos eLearning para a sua organização, 
          ou porque necessita de alguma orientação na formação online 
          que quer iniciar – nós ficamos felizes por poder ajudar! Alguém da nossa equipa vai falar consigo em breve.
      </template>

    </banner>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>