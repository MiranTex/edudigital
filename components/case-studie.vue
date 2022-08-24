<template>
  <div @click="()=>{console.log('holla')}" class="container">
    <div class="overlay">

    </div>
    <p>ZURICH</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

    .container{
        position: relative;
        background-image: url('~/assets/img/cartoon/case.jpeg');
        background-size: cover;
        width: 500px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;
        
        box-shadow: 1px 1px 10px rgba(65, 65, 65, 0.459);

        transition: all, 400ms ease;

        &:hover{
            box-shadow: 1px 5px 10px rgba(65, 65, 65, 0.87);
            height: 500px;
        }
        
        p{
            color: #fff;
            font-weight: bolder;
            font-size: 2rem;
            z-index: 999;
        }
    }

    .overlay{
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--color-verde);;
        opacity: 0.7;
    }
</style>