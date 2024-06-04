<template>
    <div class="navbar flex-row-cen-bet">
        <div class="navbar-logo flex-column-cen-bet">
            <img class="navbar-img" src="../img/favicon.png">
            <h1 class="navbar-title">Город`Ок</h1>
        </div>
        <ul class="navbar-list flex-row-cen-bet">
            <li class="navbar-item">
                <a class="navbar-item__link" href="#about">О нас</a>
            </li>
            <li class="navbar-item">
                <a class="navbar-item__link" href="#card-filter">Подбор квартир</a>
            </li>
            <li class="navbar-item">
                <a class="navbar-item__link" href="#reviews">Отзывы</a>
            </li>
        </ul>
        <div class="navbar-social flex-row-cen-bet">
            <a class="navbar-social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://vk.com/im?peers=39084548_-142429394_12553679&sel=226682363">
                <img class="navbar-social-icon" :src="vkIcon">
            </a>
            <a class="navbar-social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://telegram.im/@ArendaGorodOK">
                <img class="navbar-social-icon" :src="telegramIcon">
            </a>
            <a class="navbar-social-link shadow-down-light" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=79214794791&text&type=phone_number&app_absent=0">
                <img class="navbar-social-icon" :src="whatsUpIcon">
            </a>
        </div>
        <div class="navbar-service flex-col-cen-bet">
            <button class="navbar-button" @click="openPopupPhone">Заказать звонок</button>
            <a class="navbar-phone" href="tel:+79214794791"><span>+7(921) 479-479-1</span></a>
        </div>

    </div>
</template>

<script lang="ts" setup>
    import { inject} from 'vue';
    import vkIcon from '@/img/vk1.png'
    import telegramIcon from '@/img/telegram.png'
    import whatsUpIcon from '@/img/whatsapp.png'
    const openPopupPhone = inject<() => void>('openPopupPhone')

</script>

<style lang="scss" scoped>

    .navbar{
        max-width: 1024px;
        width: 100%;
        height: 120px;
        padding: 20px;
        box-sizing: border-box;
    }
    .navbar-logo{
        &:hover{
            cursor: pointer;
            .navbar-img{
                filter: drop-shadow(0px 5px 5px #223c50);
            }
            .navbar-title{
                text-shadow: 0px 5px 5px #223c50;
            }
        }
    }
    .navbar-img{
        width: 80px;
        filter: none;
        transition: .3s;
    }
    .navbar-title{
        margin-top: -9px;
        font-size: 18px;
        text-shadow: none;
        transition: .3s;
    }
    .navbar-list{
        gap: 15px;
    }
    .navbar-item{
        font-size: 16px;
        text-shadow: none;
        transition: .3s;
        background-color: inherit;
        border-bottom: 1px solid;
        &:hover{
            cursor: pointer;
            text-shadow: 0px 9px 10px #223c50;
        }
    }
    .navbar-social{
        gap: 20px;
    }
    .navbar-social-link{
        width: 30px;
        border-radius: 1rem;

    }
    .navbar-social-icon{
        transition: .3s;
        transform: scale(1);
        &:hover{
            transform: scale(0.97);
        }
    }
    .navbar-button{
        background-color: $additionaly;
        color: $white;
        border: none;
        border-radius: .5rem;
        animation: shadow-light ease-in-out infinite 2s;
        transition: background-color .3s, color .3s, transform .1s; 
        transform: scale(1);
        &:hover{
            background-color: $white;
            color: $additionaly;
        }
        &:active{
            background-color: $white;
            color: $additionaly;
            border: none;
            outline: none;
            transform: scale(0.97);
        }
    }
    .navbar-service{
        gap: 10px;
    }
    .navbar-phone{
        color: $common;
        text-decoration: underline;
    }

@media (min-width: 1024px) and (max-width: 100vw) {
    .navbar{
        padding: 20px;
    }
    .navbar-title{
        font-size: 18px;
    }
    .navbar-service{
        flex-direction: row-reverse;
        gap: 20px;
    }
    .navbar-item{
        font-size: 16px;
    }
    .navbar-list{
        gap: 30px;
    }
    .navbar-social-link{
        width: 30px;
    }
    .navbar-button{
        margin-right: 0px;
    }
}
</style>