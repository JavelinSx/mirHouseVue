<template>
    <v-row>
        <v-col>
            <div class="flat-card__popup-background"></div>
            <div class="flat-card__popup">
                <Carousel 
                    :images="props.card.images" 
                    :classCarousel="'flat-card__popup-carousel'" 
                    :classImg="'flat-card__popup-carousel-img'" 
                    :paginationNeed="true" 
                    :autoplayTime="0"
                    :item-to-show="countImg"
                />

                <div class="flat-card__popup-info">
                    <h4 class="flat-card__popup-room-count" >{{ props.card.room===1 ? '1-комнатная квартира' : '2-комнатная квартира' }}</h4>
                    <h4 class="flat-card__popup-iten-address">{{ props.card.address }}</h4>
                    <h4 class="flat-card__popup-item-description">{{ props.card.fullDescription }}</h4>
                    <ul class="flat-card__popup-options" v-for="(option, indexO) in props.card.options" :key="indexO">
                        <li class="flat-card__popup-options-item" >
                            {{ option.scale }} м2
                        </li>
                        <li class="flat-card__popup-options-item" >
                            {{ option.floor }}/{{ option.floorMax }} эт.
                        </li>
                        <li class="flat-card__popup-options-item" v-if="option.balcony">
                            Балкон
                        </li>
                    </ul>
                    <div class="flat-card__popup-nearby" v-if="props.card.nearby && props.card.nearby?.length>0">
                        Рядом 
                        <img class="flat-card__popup-nearby-img" :src="props.card.nearby[0]">
                        <img class="flat-card__popup-nearby-img" :src="props.card.nearby[1]">
                    </div>

                    <div class="flat-card__map">
                        <iframe :src="props.card.mapLink" 
                            width="100%" 
                            height="250" 
                            frameborder="0">
                        </iframe>
                    </div>
                </div>
                <div class="flat-card__popup-button-group" style="width: 100%;">
                    <button class="flat-card__popup-button flat-card__popup-button-white shadow-button">
                        <a target="_blank" rel="noreferrer" :href="props.card.mapRoute">Маршрут</a>
                    </button>
                    <button class="flat-card__popup-button flat-card__popup-reservation shadow-button" @click="openPhonePopup">Забронировать</button>
                </div>
                </div>
                <button class="flat-card__popup-close shadow-button" @click="closePopup">
                    <span></span>
                    <span></span>
                </button>
        </v-col>
    </v-row>
    
</template>

<script setup lang="ts">
import { PropType, inject, onMounted, ref} from 'vue';
import {Card} from '../utils/utils.ts';
import Carousel from './Carousel.vue';
import anime from 'animejs';

const emit = defineEmits(['closeFlatCardPopup']);
const openPhonePopup = inject<() => void>('openPopupPhone')
const windowWidth = ref(window.innerWidth);
const countImg = ref(1)
onMounted(() => {
    windowWidth.value>820? countImg.value = 2 : countImg.value = 1
})
// Пропсы
const props = defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true
  }
});

// Методы
const closePopup = () => {
    anime({
        targets: '.flat-card__popup',
        translateX: -400, 
        direction: 'normal',
        duration: 300,
        delay: 0,
        loop: false,
        easing: 'easeInOutExpo'
    });
    setTimeout(() => {
        emit('closeFlatCardPopup', false);
    }, 300)

};

onMounted(() => {

    anime({
        targets: '.flat-card__popup',
        translateX: ['-=400px', 0], 
        direction: 'normal',
        duration: 300,
        delay: 0,
        loop: false,
        easing: 'easeInOutExpo'
    });

});

</script>

<style lang="scss">
.flat-card__popup{
    max-width: 1024px;
    transform: translateX(-400px);
    position: fixed;
    width: 100vw; // ширина на весь экран
    max-height: 100vh; // максимальная высота равна высоте экрана
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: $white;
    overflow-y: auto; // включение вертикального скролла
    padding-bottom: 20px; // добавьте немного отступа внизу
}
.flat-card__popup-close{
    position: fixed;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: $white;
    z-index: 1111;
    span{
        position: relative;
        left: -15px;
        display: block;
        height: 2px;
        border-radius: 50%;
        width: 40px;
        background-color: black;
        &:nth-child(1){
            top: 1px;
            transform: rotate(45deg);
        }
        &:nth-child(2){
            transform: rotate(-45deg);
        }
    }
}

.flat-card__popup-carousel{
    margin-left: -20px;
    max-height: 500px;
    .carousel__pagination{
        position: relative;
        top: -40px;
    }
    .carousel__slide{
        padding-left: 20px;
    }
}
.flat-card__popup-options-item{
    font-size: 1.2rem;
}
.flat-card__popup-nearby{
    font-size: 1.2rem;
}
.flat-card__popup-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    padding-left: 20px;
    padding-top: 10px;
}
.flat-card__popup-item-description{
    text-align: left;
    padding-right: 20px;
}
.flat-card__popup-options{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}
.flat-card__popup-nearby{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}
.flat-card__popup-nearby-img{
    height: 50px;
}
.flat-card__popup-room-count{
    font-size: 1.3rem;
}
.flat-card__popup-service{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    align-self: center;
    padding: 20px;
    padding-top: 30px;
}
.flat-card__popup-button{
    background-color: #16ad13;
    color: $white;
    transition: .3s;
    transform: scale(1);
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    &:active{
        transform: scale(0.97);
    }
    &:hover{
        background-color: $common;
        color: $white;
    }
}
.flat-card__popup-button-white{
    background-color: $white;
    color: $common;
    margin: 0;
    margin-top: 20px;
}
.flat-card__map-title{
    font-size: 1.2rem;
}
.flat-card__map{
    width: 100%;
    margin-left: -10px;
}
.flat-card__popup-carousel-img{
        max-height: 500px;
        width: 100%;
        height: 100%;
        object-fit: cover;
}
@media (min-width: 767px) and (max-width: 1366px) {
    .flat-card__popup{
        right: 0;
        bottom: 0;
        margin: 0 auto;
    }
    .flat-card__popup-close{
        right: 3%;
    }
    .flat-card__popup-carousel-img{
        max-height: 600px;
        width: 100%;
        object-fit: cover;
    }
    .flat-card__popup-info{
        margin-top: 130px;
    }
    .flat-card__popup-background{
        position: fixed;
        top: 0;
        left: 0;

        z-index: 999;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
}
@media (min-width: 1366px) and (max-width: 100vw) {
    .flat-card__popup{
        right: 0;
        bottom: 0;
        margin: 0 auto;
    }
    .flat-card__popup-close{
        right: 15%;
    }
    .flat-card__popup-carousel-img{
        max-height: 600px;
        width: 100%;
        object-fit: cover;
    }
    .flat-card__popup-info{
        margin-top: 130px;
    }
    .flat-card__popup-background{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: 0.3);
    }
    .flat-card__map{
        padding-left: 20px;
    }
}
@media (min-width: 1920px) and (max-width: 100vw) {
    .flat-card__popup-close{
        right: 25%;
    }
}
</style>