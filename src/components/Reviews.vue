<template>
    <div class="reviews" id="reviews">
        <h1 class="reviews-title">Отзывы клиентов</h1>
        <Carousel :cards-reviews="cardsRewievs" :class-carousel="'rewievs'" :pagination-need="false" :autoplay-time="10000"/>
    </div>

</template>

<script lang="ts" setup>
import Carousel from './Carousel.vue';
import {cardsRewievs} from '../utils/utils'
</script>

<style lang="scss">
    .reviews{
        max-width: 1024px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
    .reviews-title{
        margin-bottom: -20px;
        padding-top: 30px;
        font-size: 28px;
        padding-left: 40px;
    }
    @media (min-width: 767px) and (max-width: 100vw) {
        .reviews-title{
            margin-bottom: -30px;
            padding-top: 50px;
            font-size: 34px;
            padding-left: 85px;
        }
    }
</style>