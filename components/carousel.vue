<template>
  <div>
    <div class="items">
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/totara_gold_partner.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/microsoft-education.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/eschooling.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/visforms/cambridge-fundoless1.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/DGERT.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
      <div class="img-container">
        <img
          src="https://edudigital.pt/home/images/Ouriginal.png"
          loading="eager"
          alt=""
          class="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Title from './elements/title.vue'
export default {
  components: { Title },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.items {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
  }
}
img {
  width: 100%;
  transition: scale, 200ms ease;
  &:hover {
    scale: 1.1;
  }
}
</style>
