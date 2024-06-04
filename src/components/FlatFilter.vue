<template>
    <form class="card-filter" id="card-filter">
        <v-row style="width: 100%;">
            <v-col >
                <h2 class="card-filter__title">Подбор квартиры</h2>
                <v-checkbox
                    v-model="oneRoom"
                    label="1-комнатные"
                    color="primary"
                    value="primary"
                    hide-details
                    @change="handleFilterChange"
                ></v-checkbox>

                <v-checkbox
                    v-model="twoRoom"
                    label="2-комнатные"
                    color="primary"
                    value="primary"
                    hide-details
                    @change="handleFilterChange"
                ></v-checkbox>
                <v-checkbox
                    v-model="nearby"
                    label="Магазины рядом"
                    color="primary"
                    value="primary"
                    hide-details
                    @change="handleFilterChange"
                ></v-checkbox>
                <v-switch 
                    v-model="balcone"              
                    color="primary"
                    value="primary" 
                    label="Балкон">
                    @change="handleFilterChange"
                </v-switch>
                <v-range-slider
                    v-model="scale"
                    :max="56"
                    :min="28"
                    :step="1"
                    hide-details
                    class="align-center"
                    color="primary"
                    thumb-label="always"
                    @change="handleFilterChange"
                >
                </v-range-slider>
                <h4 class="card-filter__label-range">Площадь квартиры - м2</h4>
            </v-col>
        </v-row>
    </form>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits, watch } from 'vue';
import { cards, Card } from '../utils/utils.ts';

const nearby = ref(false)
const oneRoom = ref(false)
const twoRoom = ref(false)
const scale = ref([28,56])
const balcone = ref(false)
const emits = defineEmits(['updateCards']);
const importedCards = ref<Card[]>(cards)

// Определяем computed property для отфильтрованных квартир
const filteredCards = computed(() => {
    return importedCards.value.filter(card => {
        return (!oneRoom.value || card.room === 1) &&
               (!twoRoom.value || card.room === 2) &&
               (Number(card.options[0].scale) >= scale.value[0] && Number(card.options[0].scale) <= scale.value[1]) &&
               (!nearby.value || card.nearby?.length !== 0) &&
               (!balcone.value || card.options[0].balcony);
    });
});

// Отслеживаем изменения в параметрах фильтрации
watch([oneRoom, twoRoom, nearby, scale, balcone], () => {
    handleFilterChange();
});

const handleFilterChange = () => {
    emits('updateCards', filteredCards.value);
}
</script>

<style lang="scss">
:root{
    --v-medium-emphasis-opacity: 1 !important;
}
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v8.4.14,
* Autoprefixer: v10.4.7
* Browsers: last 4 version
*/

.v-label{
    opacity: 1;
}
.v-slider.v-input{
    width: 100%;
    margin-inline: 0px;
    padding-top: 30px;
}
.v-checkbox .v-selection-control__input input{
    opacity: 1;
    width: 60%;
}
.v-slider-thumb__label{
    font-size: 0.9rem !important;
}
.v-slider.v-input--horizontal{
    padding-left: 10px;
    padding-right: 20px;
}
.card-filter__label-range{
    position: relative;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    width: 100%;
}
.card-filter{
    max-width: 1024px;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 20px;
    padding-bottom: 0;
}
.card-filter__title{
    font-size: 28px;
    font-family: "Montserrat";
    padding-bottom: 10px;
    width: 100%;
}
@media (min-width: 767px) and (max-width: 1024px) {
    .card-filter{
        -ms-grid-column: 1;
            grid-column-start: 1;
        -ms-grid-column-span: 2;
        grid-column-end: 3;
    }
}
@media (min-width: 1024px) and (max-width: 100vw) {
    .card-filter{
        -ms-grid-column: 1;
            grid-column-start: 1;
        -ms-grid-column-span: 3;
        grid-column-end: 4;
        width: 70%;
    }
}
</style>