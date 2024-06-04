<template>
    <div class="phone-popup flex-col-cen-cen" >
        <form @submit.prevent="sendForm" :class="{'phone-popup_anim': startAnim, 'phone-popup_anim-close': !startAnim}" class="phone-popup-wrapper flex-col-cen-cen">
            <button type="button" class="phone-popup-close" @click="closePopupPhone">
                <span></span>
                <span></span>
            </button>
            <h2 class="phone-popup-title">Форма обратной связи</h2>
            <Input label="Ваше имя" v-model="name" @update:value="val => name = val" inputId="nameInput" type="text"/>
            <Input label="Номер телефона" v-model="phone" @update:value="val => phone = val" inputId="phoneInput" type="text"/>
            <span class="phone-popup__message"  v-if="isMessageView">{{ messageResponse }}</span>
            <button type="submit" class="phone-popup-submit shadow-down-light" :disabled="isSubmitDisabled">Отправить заявку {{ isMessageView ? timerMessage : ''}}</button>

        </form>
    </div>
</template>

<script setup lang="ts">
import { onMounted, inject, ref , onBeforeUnmount } from 'vue';
import axios from 'axios'; // Импортируйте Axios
import Input from './Input.vue';
    const name = ref('')
    const phone = ref('')
    const startAnim = ref(false)
    const timeoutId = ref(null as number | null)
    const isOpen = inject('isPopupPhone')
    const isSubmitDisabled = ref(false)
    const messageResponse = ref('')
    const isMessageView = ref(false)
    const timerMessage = ref(60)
    const closePopupPhone = inject<() => void>('closePopupPhone')

    const delayAnim = () => {
        timeoutId.value = setTimeout(() => {startAnim.value=true}, 300) as unknown as number
    }
    onMounted(() => {
        if(isOpen){
            delayAnim()
        }
    })
    onBeforeUnmount(() => {
        if(timeoutId.value){
                clearTimeout(timeoutId.value)
            }
    })

    const sendForm = async() => {
        const intervalId = setInterval(() => {
            timerMessage.value--;
            if (timerMessage.value === 0) {
                clearInterval(intervalId); // Очистка интервала, когда таймер достигает 0
            }
        }, 1000); // Уменьшение значения каждую секунду
        isSubmitDisabled.value = true
        isMessageView.value = true
        try {

            const res = await axios.post('https://functions.yandexcloud.net/d4ef5ehd8pkjtt147chj',{
                name: name.value,
                phone: phone.value
            })
            if(res.status===200){

                messageResponse.value = 'Ваши данные успешно отправлены'
            }else{
                isMessageView.value = true
                messageResponse.value = 'Произошла ошибка'
            }
        } catch (error) {
            
        } finally {
            setTimeout(() => {
                isSubmitDisabled.value = false
                isMessageView.value = false
                clearInterval(intervalId);
            }, 60000)
        }
    }
</script>

<style lang="scss" scoped>
    .phone-popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.2);
        z-index: 1000;
    }
    .phone-popup_anim{
        transition: .3s;
        transform: translateX(0px);
    }
    .phone-popup_anim-close{
        transition: .3s;
        transform: translateX(400px);
    }
    .phone-popup__message{
        font-size: 12px;
    }
    .phone-popup-wrapper{
        padding-top: 20px;
        height: 350px;
        width: 80%;
        background-color: $white;
        border-radius: .5rem;
        position: relative;
        .input{
            border: 1px solid $common;
        }
    }
    .phone-popup-title{
        padding: 20px;
        font-size: 18px;
    }
    .phone-popup-submit{
        background-color: $additionaly;
        color: $white;
        border: none;
        margin-top: 30px;
        width: 80%;
        transition: background-color .3s, color .3s, transform .1s; 
        transform: scale(1);
        &:hover{
            transform: scale(0.97);
        }
        &:active{
            background-color: $additionaly;
            color: $white;
            border: none;
            outline: none;
            transform: scale(0.97);
        }
        &:active{
            outline: none;
        }
        &:disabled{
            cursor: wait;
            pointer-events: none;
        }
    }
    .phone-popup-close{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 40px;
        height: 40px;
        background-color: inherit;
        border: 2px solid $common;
        span{
            position: relative;
            display: block;
            height: 2px;
            width: 30px;
            background-color: $common;
            transition: .3s;
            &:nth-child(1){
                transform: rotate(45deg);
                left: -15px;
                top: 1px;
            }
            &:nth-child(2){
                transform: rotate(-45deg);
                left: -15px;
                top: -1px;
            }
        }
        &:hover{
            span{
                &:nth-child(1){
                transform: rotate(-45deg);
                left: -15px;
                top: 1px;
            }
            &:nth-child(2){
                transform: rotate(45deg);
                left: -15px;
                top: -1px;
            }
            }
        }
    }
    @media (min-width: 767px) and (max-width: 1366px) {
        .phone-popup-wrapper{
            height: 40%;
            width: 60%;
        }
        .phone-popup_anim{
            transition: .3s;
            transform: translateX(0px);
        }
        .phone-popup_anim-close{
            overflow: hidden;
            transition: .3s;
            transform: translateX(800px);
        }
    }
    @media (min-width: 1365px) and (max-width: 100vw) {
        .phone-popup-wrapper{
            height: 50%;
            width: 30%;
        }
        .phone-popup_anim{
            transition: .3s;
            transform: translateX(0px);
        }
        .phone-popup_anim-close{
            overflow: hidden;
            transition: .3s;
            transform: translateX(1500px);
        }
    }
</style>