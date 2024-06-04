<template>
  <component :is="renderComponent"></component>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, computed } from 'vue';
import Burger from '../components/Burger.vue';
import Navbar from '../components/Navbar.vue';
export default defineComponent({
  setup() {
    const windowWidth = ref(window.innerWidth);

    const onResize = () => {
      windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
      window.addEventListener('resize', onResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', onResize);
    });
    
    const renderComponent = computed(() => {
      return windowWidth.value <= 768 ? Burger : Navbar
    })

    return { renderComponent };
  },
});
</script>
