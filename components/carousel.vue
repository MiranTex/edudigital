<template>
    <div class="slider-container">
        <div class="inner-slider">
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
            <div class="card"> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" /></div>
        </div>
    </div>

</template>

<script>
export default {
    methods:{
        checkBoundary(sliderContainer,innerSlider){
            let outer = sliderContainer.getBoundingClientRect();
            let inner = innerSlider.getBoundingClientRect();

            if (parseInt(innerSlider.style.left) > 0) {
                innerSlider.style.left = "0px";
            }

            if (inner.right < outer.right) {
                innerSlider.style.left = `-${inner.width - outer.width}px`;
            }
        }

    },
    mounted(){
        let sliderContainer = document.querySelector('.slider-container');
        let innerSlider = document.querySelector('.inner-slider');

        let pressed = false;
        let startX;
        let x;

        sliderContainer.addEventListener('mousedown', (e) => {
            pressed = true;
            startX = e.offsetX - innerSlider.offsetLeft;
            sliderContainer.style.cursor = "grabbing";
        })

        sliderContainer.addEventListener("mouseenter", () => {
            sliderContainer.style.cursor = "grab";
        });

        sliderContainer.addEventListener("mouseup", () => {
            sliderContainer.style.cursor = "grab";
            pressed = false;
        });

        sliderContainer.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();

            x = e.offsetX;
        });

        sliderContainer.addEventListener("mousemove", (e) => {
            if (!pressed) return;
            e.preventDefault();

            x = e.offsetX;

            innerSlider.style.left = `${x - startX}px`;
        });

        sliderContainer.addEventListener("mousemove", (e) => {
         
            this.checkBoundary(sliderContainer,innerSlider);
        });

    }
}
</script>

<style scoped lang="scss">

   .card {
    height: 300px;
    width: 400px;
    border-radius: 5px;
}
// .card:nth-child(odd) {
//     background-color: blue;
// }
// .card:nth-child(even) {
//     background-color: rgb(0, 183, 255);
// }
.slider-container {
    // width: 80%;
    // height: 350px;
    // position: absolute;
    // transform: translate(-50%, -50%);
    // position: relative;
    // overflow: hidden;
}
.inner-slider {
    // width: 150%;
    // display: flex;
    // gap: 10px;
    // pointer-events: none;
    // position: absolute;
    // top: 0;
    // left: 0;
}


    @mixin white-gradient {
        background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
    }

    $animationSpeed: 40s;

    // Animation
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-250px * 7))}
    }


    // Styling
    .slider-container {
        background: white;
        // box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
        height: 100px;
        margin: auto;
        overflow:hidden;
        position: relative;
        width: 960px;
        
        &::before,
        &::after {
            @include white-gradient;
            content: "";
            height: 100px;
            position: absolute;
            width: 200px;
            z-index: 2;
        }
        
        &::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        &::before {
            left: 0;
            top: 0;
        }
        
        .inner-slider {
            animation: scroll $animationSpeed linear infinite!important;
            display: flex!important;
            width: calc(250px * 14);
        }
        
        .card {
            height: 100px;
            width: 250px;
        }
    }

   
</style>