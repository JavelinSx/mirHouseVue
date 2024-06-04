<template>
    <v-row>
        <v-col style="padding: 0;">
            <section class="main-section">
        <h1 class="main-section__title">ПОСУТОЧНАЯ АРЕНДА КВАРТИР<br/> В МИРНОМ</h1>
        <Carousel 
            :images="images" 
            :classCarousel="'main-section_carousel'" 
            :classImg="'main-section__carousel-img'" 
            :paginationNeed="false" 
            :autoplayTime="0"
        />
        <!-- <div class="main-section__empty"></div> -->
        <ul class="main-section__benefit">
            <li class="main-section__benefit-item">Аренда от 2500</li>
            <li class="main-section__benefit-item">Квартиры с ремонтом</li>
            <li class="main-section__benefit-item">Безупречная репутация</li>
            <li class="main-section__benefit-item">Официальное оформление</li>
        </ul>
    </section>
        </v-col>

</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from './Carousel.vue'
import ScrollReveal from 'scrollreveal'
import img1 from '../img/main-img.png'
import img2 from '../img/main-img1.png'
import img3 from '../img/main-img2.png'
    export default defineComponent({
        components:{Carousel},
        data() {
            return {
                images: [img1, img2, img3]
            }
        },
        mounted(){
            const sr = ScrollReveal({
                distance: '60px',
                duration: 500,
                delay: 400,
                reset: true
            });
            sr.reveal('.main-section__title', { delay: 200, origin: 'left' });
            sr.reveal('.main-section_carousel', { delay: 200, origin: 'right' });
            sr.reveal('.main-section__benefit', { delay: 400, origin: 'right' })
        },
        beforeUnmount(){
            
        },
        methods: {
            
        }
    });
</script>

<style lang="scss" >
    .main-section{
        position: relative;
        top: 70px;
        width: 100%;
        height: 100%;
        padding-bottom: 30px;
        margin-bottom: 40px;
        z-index: 10;
    }
    .main-section__title{
        position: relative;
        font-size: 28px;
        padding: 30px;
        width: 300px;
        text-align: left;
        z-index: 10;
        background-color: $white;
        border-bottom-right-radius: 10rem;
        font-family: 'Montserrat';
    }
    .main-section_carousel{
        top: -80px;
    }
    .main-section__carousel-img{
        height: 450px;
        width: 100%;
        object-fit: cover;
    }
    .main-section__empty{
        width: 366px;
        height: 200px;
        background-color: #ffffff;
        position: absolute;
        top: 327px;
        left: 125px;
        border-radius: 10rem;

    }
    .main-section__benefit{
        position: absolute;
        width: 420px;
        bottom: 90px;
        left: 80px;
        z-index: 11;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 25px;
        background-color: #fff;
        border-top-left-radius: 10rem;
        padding-top: 30px;
        padding-left: 80px;
    }
    .main-section__benefit-item{
        list-style: disc;
        text-align: left;
        font-size: 15px;
        &:nth-child(1){
            margin-left: 40px;
        }
        &:nth-child(2){
            margin-left: 20px;
        }
        &:nth-child(3){
            margin-left: 0px;
        }
        &:nth-child(4){
            margin-left: -20px;
        }
    }
    @media (min-width: 767px) and (max-width: 1024px) {
        .main-section{
            top: 120px;
        }
        .main-section_carousel{
            top: -80px;
            width: 100vw;

        }
        .main-section__carousel-img{

        }
        .main-section__benefit{
            left: 450px;
        }
        .main-section__title{
            font-size: 32px;
            padding: 50px;
            width: 360px;
            border-bottom-right-radius: 9rem;
        }
        .main-section__benefit-item{
            font-size: 18px;
        }
    }
    @media (min-width: 1023px) and (max-width: 100vw) {
        .main-section{
            top: 70px;
            max-width: 1024px;
        }
        .main-section_carousel{
            top: -80px;
            width: 100vw;
            max-width: 1024px;
            left: 1px;
        }
        .main-section__carousel-img{

        }
        .main-section__benefit{
            padding-top: 40px;
            padding-bottom: 100px;
            bottom: 30px;
            left: 650px;
            width: 430px;
        }
        .main-section__title{
            font-size: 34px;
            padding: 58px;
            width: 400px;
            border-bottom-right-radius: 15rem;
            bottom: -50px;
        }
        .main-section__benefit-item{
            font-size: 22px;
        }
    }
</style>