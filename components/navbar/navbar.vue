<template>
  <header>
    <div id="top">
        <div class="top-1">
            <flags @flag-clicked="flagClicked($event
            )" />
        </div>
        <div class="top-2">
            <NuxtLink to="/">
                <logo :width="150" />
            </NuxtLink>
        </div>
        <div class="top-3">
            <nav>
                <ul>
                    <li><NuxtLink class="menu link" to="/fale-connosco">Fale Connosco</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/sobre-nos">Sobre Nós</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/">Case Studies</NuxtLink></li>
                    <li><NuxtLink class="menu link" to="/">Marketplace</NuxtLink></li>
                    <li><NuxtLink class="btn btn-primary btn-menu" to="/">eLearning</NuxtLink></li>
                </ul>
            </nav>
        </div>
    </div>
    <div id="bottom">
        <ul>
            <li class="drop-parent"><NuxtLink to="/plataformas-elearning" class="menu link">{{$translate().menus.plataformas_elearning}}</NuxtLink>
                <div class="drop-down">
                    <ul>
                        <li><NuxtLink class="menu link" to="/plataformas-elearning/plataformas-open-source">Plataformas Open-source</NuxtLink></li>
                        <li><a class="menu link" href="#">Plataformas Totara</a></li>
                        <li><a class="menu link" href="#">Hosting Gerido & Cloud</a></li>
                    </ul>
                </div>
            </li>
            <li><a class="menu link" href="#">{{$translate().menus.cursos_de_elearning_a_medida}}</a></li>
            <li><a class="menu link" href="#">{{$translate().menus.formacao_certificada}}</a></li>
            <li><a class="menu link" href="#">{{$translate().menus.apps_e_servicos_web}}</a></li>
            <li><a class="menu link" href="#">{{$translate().menus.softwares_academicos}}</a></li>
        </ul>
    </div>
  </header>
</template>

<script>
import Flags from '../flags.vue'
import logo from '../logo.vue'
export default {
  components: { logo, Flags },

  methods:{
    flagClicked($event){
        console.log($event,"navbar");
        this.$emit("flag-clicked",$event);
    }
  }

}
</script>

<style scoped lang="scss">
.btn-menu{
    padding: 10px 40px;
}

header{
    display: grid;
    height: 150px;

    grid-template-rows: 3fr 2fr;
    grid-template-columns: 1fr;

    box-shadow: var(--shadow-md);

    div{
        display: flex;
        padding: 5px 10px;
    }


    // z-index: 999;
}

#bottom{
    background: var(--color-light);
    ul{
        display: flex;
        width: 100%;
        flex-direction: row;
        // border: 1px solid red;
        justify-content: space-around;
        list-style: none;
        align-items: center;

        li {
            display: flex;
            justify-content: center;
            flex: 1;
            text-align: center;
            a{
                width: 100%;
                color: var(--color-verde);
                font-size: 0.9rem;
            }
        }
    }
        // box-shadow: 1px 3px 6px var(--color-cinza-light);
}


#top{
    flex-direction: row;
    div{
        display: flex;
        // border: 1px solid red;
    }

    .top-1{
        flex: 1;
        align-items: center;
    }

    .top-2{
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-3{
        flex: 6;
        align-items: center;
        nav{
            width:100%; 
            ul{
                display: flex;
                justify-content: space-around;
                
                li{
                    border-bottom: 3px solid transparent;
                    box-sizing: border-box;

                    &:hover{
                        border-bottom-color: var(--color-vermelho);
                    }
                }
            }
        }
    }


}

</style>