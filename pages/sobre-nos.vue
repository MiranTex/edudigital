<template>
  <div>
    <banner 
    :backgroundImage="require('~/assets/img/banner-bg.jpg')" 
    :columnsTemplate="'2fr 1fr'"
    :title="$translate().index.banner.title"
    :buttonActionText="$translate().index.banner.buttonActionText"
    :buttonActionHref="'/fale-connosco'"
    >
      <template v-slot:text>
          {{$translate().index.banner.text}}
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