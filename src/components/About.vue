<template>
    <v-row>
        <v-col>
            <div class="about" id="about">
            <h1 class="about-title">О нашем агентстве</h1>
            <h3 class="about-text">
                Мы на рынке в г. Мирный уже более 5 лет. Наши квартиры – это идеальный выбор для посуточной аренды. Более сотни довольных клиентов уже оценили неизменную заботу о качестве и комфорте. Мы не просто предоставляем жилье - мы создаём домашний уют. 
            </h3>
            <span class="about-line"></span>
                <v-row>
                    <v-col cols="12" sm="6" md="4" v-for="item in items" :key="item.id">
                        <div class="about-item">
                            {{ item.description }}
                            <img class="about-img" :src="item.src">
                        </div>
                    </v-col>
                </v-row>
            <span class="about-line"></span>
            </div>
        </v-col>
    </v-row>
    
</template>

<script setup lang="ts">
import comfortFlat from '../img/icon/comfort-flat.png'
import clining from '../img/icon/clining.png'
import wifi from '../img/icon/wifi.png'
import linen from '../img/icon/linen.png'
import transfer from '../img/icon/transfer.png'
import document from '../img/icon/document.png'
import pay from '../img/icon/pay.png'
import ScrollReveal from 'scrollreveal'
import { onMounted } from 'vue'
onMounted(() => {
    const sr = ScrollReveal({
                distance: '1px',
                duration: 500,
                delay: 400,
                reset: true
            });

sr.reveal('.about-title', {delay: 200, origin: 'left' })
sr.reveal('.about-text', {delay: 200, origin: 'right' })
sr.reveal('.about-item:nth-child(even)', {delay: 200, origin: 'left' })
sr.reveal('.about-item:nth-child(odd)', {delay: 200, origin: 'right' })
})
const items = [
    {id:1, description: 'Комфортные квартиры от эконом до премиум-класса', src: comfortFlat},
    {id:2, description: 'Оказание клининговых услуг 1 раз в неделю по договоренности', src: clining},
    {id:3, description: 'Скоростной интернет Wi-Fi', src: wifi},
    {id:4, description: 'Текстиль для дома', src: linen},
    {id:5, description: 'Возможен трансфер с вокзала в Плесецке по договоренности', src: transfer},
    {id:6, description: 'Официальное оформление проживания', src: document},
    {id:7, description: 'Наличный и безналичный расчет', src: pay},
]
</script>

<style lang="scss" scoped>
    .about{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
    .about-title{
        font-size: 28px;
        padding-bottom: 20px;
    }
    .about-item{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        width: 100%;
        text-align: left;
        justify-content: flex-end;
    }

    .about-img{
        width: 55px;
        margin-right: 20px;
    }
    .about-line{
        display: block;
        background-color: $common;
        height: 1px;
        opacity: .5;
        width: 100%;
        &:nth-child(3){
            margin-top: 20px;
            margin-bottom: 10px;
        }
        &:nth-child(5){
            margin-top: 10px;
        }
    }
    .about-text{
        text-align: center;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
        .about{
            padding-top: 70px;
            max-width: 700px;
        }
        .about-title{
            font-size: 32px;
        }
        .about-text{
            width: 85%;
            font-size: 18px;
        }
        .about-item{
            width: 100%;
            text-align: left;
            justify-content: flex-end;
        }
    }
    @media (min-width: 1024px) and (max-width: 100vw) {
        .about{
            max-width: 1024px;
        }
        .about-item{
            width: 90%;
        }
    }
</style>