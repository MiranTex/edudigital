<template>
    <div>
        <navbar id="navbar" @flag-clicked="redirect($event)" />
        <Magicnavbar @fixed="addPadding" id="magicnavbar" />
        <Nuxt ref="body_content" id="body-content" />
        <Footer />

        <transition name="fade" mode="out-in">

          <a v-show="!onTop" class="btn btn-primary btnGoTop" @click="e=>{goTop(e)}" href=""><fa :icon="['fas','fa-circle-arrow-up']"/></a>
        </transition>
    </div>
</template>

<script>
import navbar from '~/components/navbar/navbar.vue'
import Footer from '~/components/footer.vue'
import Magicnavbar from '~/components/navbar/magicnavbar.vue';
import Swal from 'sweetalert2';
export default {
  components: { navbar, Footer, Magicnavbar },

  data(){
    return{
      onTop:true
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
      document.getElementById("body-content").style.paddingTop= padding == "58px" ? "0" : "58px"
    },

    redirect($event){
      $event = $event.toUpperCase()
      // Swal.fire({
      //   icon:"info",
      //   text:`Está a ser redirecionado para o site de ${$event} `
      // })

      let timerInterval
      Swal.fire({
        html: `Está a ser redirecionado para o site de ${$event} `,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
        }

      })
    }
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

 }



</style>