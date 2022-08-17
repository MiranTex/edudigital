<template>
    <div class="app">
        <navbar id="navbar"/>
        <Magicnavbar @fixed="addPadding" id="magicnavbar" />
        <Nuxt ref="body_content" id="body-content" />
        <Footer />

        <transition name="fade" mode="out-in">

        <a v-show="!onTop" class="btn btn-primary btnGoTop" @click="e=>{goTop(e)}" href=""><fa :icon="['fas','fa-circle-arrow-up']"/></a>
        </transition>

        <BottomNav :route="route" />
    </div>
</template>

<script>
import navbar from '~/components/navbar/navbar.vue'
import Footer from '~/components/footer.vue'
import Magicnavbar from '~/components/navbar/magicnavbar.vue';
import BottomNav from '~/components/navbar/bottomNav.vue';
export default {
  components: { navbar, Footer, Magicnavbar, BottomNav },

  data(){
    return{
      onTop:true,
      route:"/"
    }
  },

  mounted(){

    window.addEventListener("scroll",(e)=>{

      let scrollTop = window.scrollY;
      if(scrollTop > 500){
        this.onTop = false
      }else{
        this.onTop = true
      }
    });

  },

  methods:{
    goTop(e){
      e.preventDefault();

      window.scrollTo({top:0,behavior:"smooth"});
    },

    addPadding(){
      let padding = document.getElementById("body-content").style.paddingTop;
      document.getElementById("body-content").style.paddingTop = padding == "61px" ? "0" : "61px"
    },

    
  }
}
</script>

<style>

 #magicnavbar{
  display: none;
  
 }

 @media screen and (max-width:950px ){

  #magicnavbar{
    display: block;
  }

  #navbar{
    display: none;
  }

  .app{
    padding-bottom: 50px;
  }
 }



</style>