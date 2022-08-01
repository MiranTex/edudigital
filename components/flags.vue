<template>
  <ul class="flags">
    <li v-for="flag in flags" :key="'flags-'+flag"><a @click="redirect(flag)"><img :src="require(`~/assets/img/flags/${flag}.png`)" alt="" srcset=""></a></li>
  </ul>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data(){
    return{
      flags:["ao","cv","mz","pt","en"]
    }
  },

  methods:{
    /**
     * 
     * @param {string} flag 
     */
    redirect(flag){
      console.log(flag,"flags");
      this.$emit("flag-clicked",flag)
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .flags{
      
      list-style: none;
      display: flex;
      width: 100%;
      justify-content: space-around;
  }

  li{

    a{
      img{
        width: 25px;
      }
    }
    transition: all 400ms ease;
  }

  li:hover{
    transform: translateY(5px)!important;
  }


  @media screen and (max-width:1159px) and (min-width: 900) {
    li{

      a{
        img{
          width: 20px;
        }
      }
    }
  }

</style>

