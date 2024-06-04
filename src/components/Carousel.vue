<template>
    <carousel  :class="props.classCarousel" :items-to-show="props.itemToShow ? props.itemToShow : 1" :wrap-around="true" :autoplay="props.autoplayTime">
      
      <slide v-if="props.images && props.images.length > 0" v-for="(image, index) in props.images" :key="index">
        <img :class="props.classImg" :src="image" :alt="'Image'+(index+1)" loading="lazy"/>
      </slide>

      <slide class="reviews-slide " v-else-if="props.cardsReviews && props.cardsReviews.length > 0" v-for="(card, index) in props.cardsReviews" :key="'card-'+index">
        <div class="reviews-slide__wrapper shadow-down-light">
              
            <h3 class="review-text">{{ card.textReview }}</h3>
            <span class="review-name">{{ card.name }}</span>
        </div>

      </slide>
  
      <template #addons>
        <pagination v-if="props.paginationNeed" @click="handlePaginationClick"></pagination>
      </template>
    </carousel>
  </template>
  
  <script lang="ts" setup>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination} from 'vue3-carousel'
    import { defineProps } from 'vue'
    import {CardReview} from '../utils/utils'
    interface Props {
      cardsReviews?: CardReview[]
      images?: string[]
      classImg?: string
      itemToShow?: number;
      classCarousel: string
      paginationNeed: boolean
      autoplayTime: number
    }
    const handlePaginationClick = (event: Event) => {
      event.stopPropagation();
      // Дополнительная логика, если необходимо
    };
    const props = defineProps<Props>()
  </script>
  <style lang="scss">
    .rewievs{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .reviews-data{
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    .review-text{
      text-align: left;
      font-size: 14px;
      padding-bottom: 10px;
      padding-top: 10px;
    }
    .reviews-slide{
      min-height: 240px;
    }
    .review-const{
      font-size: 14px;
    }
    .review-name{
      font-weight: 800;
      font-size: 14px;
    }
    .reviews-slide__wrapper{
      padding: 20px;
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 1rem;
    }
  </style>
  