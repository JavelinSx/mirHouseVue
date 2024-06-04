<template>
    <div class="flat-card flex-col-cen-cen">
        <FlatFilter @updateCards="handleUpdatedCards"/>
        <ul class="flat-card__feauter">
            <FlatCard :currentCards="currentCards"/>
        </ul>
    </div>
    <FlatCardPopup v-if="isOpen" @closeFlatCardPopup="togglePopup" :card="currentCard"></FlatCardPopup>
</template>

<script setup lang="ts">
import FlatCard from './FlatCard.vue';
import FlatFilter from './FlatFilter.vue';
import FlatCardPopup from './FlatCardPopup.vue';
import { Card, cards } from '../utils/utils.ts';
import { ref,provide } from 'vue';

// Реактивное состояние
const isOpen = ref(false);
const currentCard = ref<Card>({} as Card);
const currentCards = ref(cards)
// Методы
const togglePopup = (card: Card) => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    currentCard.value = card;
  }
};
const handleUpdatedCards = (updatedCards:Card[]) => {
    currentCards.value = updatedCards;
};

provide('togglePopup', togglePopup)
</script>

<style lang="scss" scoped>
.flat-card{
    width: 100%;
    height: 100%;
    max-width: 390px;
}
.flat-card__title{
    font-family: 'Montserrat';
    font-size: 1.7rem;
    padding-bottom: 40px;
    text-align: left;
}
.flat-card__feauter{
    // display: grid;
    // grid-template-columns: 1fr;
    // justify-items: center;
    // gap: 30px;
    width: 90%;
    padding-top: 50px;
}
@media (min-width: 767px) and (max-width: 1024px) {
    .flat-card{
        max-width: 758px;
    }
    .flat-card__feauter{
        // grid-template-columns: 1fr 1fr; 
    }
}
@media (min-width: 1024px) and (max-width: 1366px) {
    .flat-card{
        max-width: 990px;
    }
}
@media (min-width: 1366px) and (max-width: 100vw) {
    .flat-card{
        max-width: 1024px;
    }
}
</style>