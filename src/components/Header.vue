
<template>
    <header class="header shadow-down-light">
        <HeaderCompRender @update:isPopupOpen="togglePopup"/>
    </header>
    <PhonePopup v-if="isPopupOpen" @close="togglePopup"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderCompRender from '../utils/HeaderCompRender.vue'
import PhonePopup from './PhonePopup.vue';
    export default defineComponent({
        components: {HeaderCompRender, PhonePopup},
        data(){
            return{
                isPopupOpen: false,
            }
        },
        methods:{
            togglePopup(){
                this.isPopupOpen =! this.isPopupOpen
            }
        },

    });
</script>

<style lang="scss" scoped>
.header{
    z-index: 100;
    width: 100vw;
    min-height: 50px;
    background-color: $secondary;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: fixed;
}
@media (min-width: 767px) and (max-width: 1024px) {

}
@media (min-width: 1023px) and (max-width: 100vw) {

}
</style>