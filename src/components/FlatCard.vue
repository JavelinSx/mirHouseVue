<template>
    <v-row>
        <v-col
            cols="12"
            sm="6"
            md="4"
            v-for="(card, index) in currentCards" :key="index"
        >
                <li class="flat-card__item flex-col-cen-cen shadow-down-light"  @click="togglePopup(card)">
                    <Carousel 
                        :images="card.images" 
                        :classCarousel="'flat-card__carousel'" 
                        :classImg="'flat-card__carousel-img'" 
                        :paginationNeed="true" 
                        :autoplayTime="0"
                    />
                    <div class="flat-card__info">
                    <h4 class="flat-card__room-count" >{{ card.room===1 ? '1-комнатная квартира' : '2-комнатная квартира' }}</h4>
                    <h4 class="flat-card__iten-address">{{ card.address }}</h4>
                    <ul class="flat-card__options" v-for="(option, indexO) in card.options" :key="indexO">
                        <li class="flat-card__options-item" >
                            {{ option.scale }} м2
                        </li>
                        <li class="flat-card__options-item" >
                            {{ option.floor }}/{{ option.floorMax }} эт.
                        </li>

                    </ul>
                    <div class="flat-card__nearby" v-if="card.nearby && card.nearby?.length>0">
                        Рядом 
                        <img class="flat-card__nearby-img" :src="card.nearby[0]">
                        <img class="flat-card__nearby-img" :src="card.nearby[1]">
                    </div>
                    </div>
                    <div class="flat-card__service">
                        <button class="flat-card__button flat-card__reservation shadow-button" @click="openPhonePopup">Забронировать</button>
                        <button class=" flat-card__button flat-card__button-map shadow-button" @click="openMap">
                            <a class="flat-card__map-link" target="_blank" rel="noreferrer" :href="card.mapRoute">На карте</a>
                        </button>
                    </div>
                </li>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import Carousel from './Carousel.vue';
import { Card } from '../utils/utils.ts';

defineProps<{
    currentCards: Card[]
}>()

const openPhonePopup = inject<() => void>('openPopupPhone')
const togglePopup = inject<(card: Card) => void>('togglePopup')!
const openMap = (event: MouseEvent) => {
  event.stopPropagation();
};


</script>

<style lang="scss">

.flat-card__item{
    height: 100%;
    width: 100%;
    border-radius: .5rem;
    align-items: flex-start !important;
    transform: scale(1);
    transition: .3s ease-in-out;
    &:hover{
        cursor: pointer;
        transform: scale(0.98);
    }
}
.flat-card__carousel{
    width: 100%;
    .carousel__pagination{
        position: relative;
        top: -35px;
    }
}
.flat-card__carousel-img{
    object-fit: cover;
    width: 100%;
    height: 270px;
    border-radius: .5rem;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
}
.flat-card__info{
    padding-left: 8%;
    padding-bottom: 5%;
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    position: relative;
    margin-top: -20px;
}
.flat-card__feauters{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: absolute;
    top: 20px;
    right: -50px;
}
.flat-card__item-description{
    width: 80%;
    text-align: left;
}
.flat-card__room-count{
    font-size: 20px;
}
.flat-card__iten-address{
    margin-top: -10px;
}
.flat-card__item-feauters-img{
    width: 25px;

}
.flat-card__options{
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 40px;
}
.flat-card__nearby{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
.flat-card__nearby-img{
    width: 35px;
}
.flat-card__service{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    padding: 20px;
    padding-top: 0px;
}
.flat-card__button{
    background-color: #16ad13;
    color: $white;
    transition: .3s;
    transform: scale(1);
    padding: 0.4em 0.85em;

    font-size: 0.9em;
    &:active{
        transform: scale(0.97);
    }
    &:hover{
        background-color: $common;
        color: $white;
        .flat-card__map-link{
            color: $white;
        }
    }
}
.flat-card__button-map{
    background-color: inherit;

}
.flat-card__map-link{
    color: $common;
    font-weight: 400;
}
@media (min-width: 767px) and (max-width: 100vw) {

    .flat-card__item{
        min-height: 510px;
        justify-content: space-between !important;
    }
    .flat-card__info{
        min-height: 180px;
    }
}

</style>