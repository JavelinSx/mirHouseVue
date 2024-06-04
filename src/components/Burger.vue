<template>
    <div class="burger-wrapper  flex-row-cen-bet shadow-down-light">
        <div class="burger-logo flex-row-cen-cen">
            <img class="burger-img" src="../img/favicon.png">
            <h1 class="burger-title">Город`Ок</h1>
        </div>

        <div class="burger-button" :class="{'burger-button-open': isBurgerOpen, 'burger-button-close': !isBurgerOpen}" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul class="burger-list flex-col-cen-cen shadow-down-light" :class="{'burger-list-open': isBurgerOpen, 'burger-list-close': !isBurgerOpen}">
            <li class="burger-list-item" >
                <a class="burger-list__link" href="#about" @click="scroll">О нас</a>
            </li>
            <li class="burger-list-item" >
                <a class="burger-list__link" href="#card-filter" @click="scroll">Подбор квартир</a>
            </li>
            <li class="burger-list-item">
                <a class="burger-list__link" href="#reviews" @click="scroll">Отзывы</a>
            </li>
            <li class="burger-list-item">
                <button class="burger-list-item__button" @click="openPopupPhone">Заказать звонок</button>
                <a class="burger-phone" href="tel:+79214794791"><span>+7(921) 479-479-1</span></a>
            </li>
            <li class="burger-list-item">
                <a class="social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://vk.com/im?peers=39084548_-142429394_12553679&sel=226682363">
                    <img class="social-icon" :src="vkIcon">
                </a>
                <a class="social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://telegram.im/@ArendaGorodOK">
                    <img class="social-icon" :src="telegramIcon">
                </a>
                <a class="social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=79214794791&text&type=phone_number&app_absent=0">
                    <img class="social-icon" :src="whatsUpIcon">
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject } from 'vue';
    import anime from 'animejs';
    import vkIcon from '@/img/vk1.png'
    import telegramIcon from '@/img/telegram.png'
    import whatsUpIcon from '@/img/whatsapp.png'
    // Реактивные данные
    const isBurgerOpen = ref(false);
    const openPopupPhone = inject<() => void>('openPopupPhone')

    // Методы
    const toggleBurger = () => {
        isBurgerOpen.value = !isBurgerOpen.value;
        anime({
            targets: '.burger-list-item',
            translateX: ['-=400px', 0], 
            direction: 'normal',
            duration: 600,
            delay: 0,
            loop: false,
            easing: 'easeInOutExpo'
        });
    };

    const scroll = () => {
        toggleBurger()
    }
</script>


<style lang="scss" scoped>
    .burger-wrapper{
        width: 100%;
        height: 70px;
        position: relative;
        justify-content: space-between;
    }
    .burger-title{
        font-size: 24px;
    }
    .burger-img{
        height: 75px;
    }
    .burger-logo{
    }
    .burger-phone{
        padding-top: 10px;
        color: $common;
        text-decoration: underline;
    }
    .burger-list-item__button{
        margin-top: 10px;
        min-width: 70vw;
        background-color: $additionaly;
        color: $white;
        animation: shadow-light ease-in-out infinite 2s;
        transition: background-color .3s, color .3s, transform .1s;
        &:active{
            background-color: $white;
            color: $additionaly;
            transform: scale(0.97);
        }
    }
    .burger-button{
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border: 2px solid $common;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: .5rem;
        opacity: 1;
        span{
            background-color: $common;
            height: 2px;
            width: 80%;
            border-radius: 9px;
            transition: .4s ease-in-out;
            &:nth-child(1){
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    position: relative;
                }
                &:nth-child(2){
                    position: relative;
                    left: 0px;
                    opacity: 0;
                }
                &:nth-child(3){
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    position: relative;
                }
        }
    }
    .burger-button-open{
            span{
                &:nth-child(1){
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    top: 12px;
                }
                &:nth-child(2){
                    left: 50px;
                    opacity: 0;
                }
                &:nth-child(3){
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                    top: -12px;
                }

            }
        }
        .burger-button-close{
            span{
                &:nth-child(1){
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    top: 0px;
                }
                &:nth-child(2){
                    right: 0px;
                    opacity: 1;
                }
                &:nth-child(3){
                    -webkit-transform: rotate(0deg);
                    -moz-transform: rotate(0deg);
                    -o-transform: rotate(0deg);
                    transform: rotate(0deg);
                    top: 0px;
                }

            }
        }

    .burger-list{
        position: fixed;
        top: 70px;
        background-color: $secondary;
        min-width: 100vw;
        height: 0px;
        transition: .3s ease-in-out;
        gap: 10px;
        justify-content: flex-start;
        padding-top: 30px;
        .social-link{
            width: 40px;
            height: 40px;
            border-radius: 1rem;
        }
        .social-icon{
            width: 100%;
            height: 100%;
        }
        .burger-list-item{
            position: relative;
            display: flex;
            align-items: center;
            font-size: 18px;
            justify-content: center;
            transform: translateX(-400px);
            &:nth-child(4){
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding-top: 50px;
                padding-bottom: 50px;
            }
            &:nth-child(5){
                padding-top: 50px;
                gap: 60px;
            }
        }
    }
    .burger-list__link{
        font-weight: 400;
    }
    .burger-list-open{
        height: 400px;
        pointer-events: all;
        .burger-list-item{
            height: 40px;
            opacity: 1;
        }
    }
    .burger-list-close{
        pointer-events: none;
        height: 0px;
        padding-top: 0px;
        .burger-list-item{
            height: 0px;
            opacity: 0;
        }
    }
</style>