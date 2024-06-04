<template>
  <Header />
  <MainSection />
  <About />
  <FlatGrid />
  <Reviews />
  <PhonePopup v-if="isPopupPhone"/>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue'
  import MainSection from './components/MainSection.vue';
  import About from './components/About.vue';
  import FlatGrid from './components/FlatGrid.vue';
  import PhonePopup from './components/PhonePopup.vue';
  import Reviews from './components/Reviews.vue';
  import {ref, provide} from 'vue'

  const isPopupPhone = ref(false)

  const openPopupPhone = (event: MouseEvent) => {
    event.stopPropagation();
    isPopupPhone.value = true
  }
  const closePopupPhone = () => {
    isPopupPhone.value = false
  }

  provide('openPopupPhone', openPopupPhone)
  provide('closePopupPhone', closePopupPhone)
  provide('isPopupPhone', isPopupPhone)

</script>

<style lang="scss" scoped>

</style>
