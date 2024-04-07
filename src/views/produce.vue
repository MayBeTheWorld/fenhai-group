<template>
  <div class="max-w-4xl my-5 mx-auto shadow-2xl rounded-md p-6 bg-neutral-800">
    <h1 class="text-2xl font-bold mb-4">商品展示</h1>
    <div class="mb-4" >
      <h2 class="text-xl font-semibold mb-2">1. 定制橄榄球出口</h2>
      <n-carousel
        key="card"
        effect="card"
        :centered-slidestrue='isCard'
        slides-per-view="auto"
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        draggable
        autoplay
        class="h-96"
      >
        <n-carousel-item class="max-w-2xl" v-for="slide in footbalImage" :key="slide.id">
          <img
            class="w-full h-full mx-auto object-cover"
            :src="slide.image"
            :alt="slide.alt"
          >
        </n-carousel-item>
      </n-carousel>
    </div>
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">2. 梵海vango</h2>
      <n-carousel
        key="card"
        effect="card"
        :centered-slidestrue='isCard'
        slides-per-view="auto"
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        draggable
        autoplay
        class="h-96"
      >
        <n-carousel-item class="max-w-2xl" v-for="slide in vangoImage" :key="slide.id">
          <img
            class="w-full h-full mx-auto object-cover"
            :src="slide.image"
            :alt="slide.alt"
          >
        </n-carousel-item>
      </n-carousel>
    </div>
    <div>
      <h2 class="text-xl font-semibold mb-2">3 家庭礼物：家庭公仔</h2>
      <n-carousel
        key="card"
        effect="card"
        :centered-slidestrue='isCard'
        slides-per-view="auto"
        prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
        next-slide-style="transform: translateX(50%) translateZ(-800px);"
        draggable
        autoplay
        class="h-96"
      >
        <n-carousel-item class="max-w-2xl" v-for="slide in dollImage" :key="slide.id">
          <img
            class="w-full h-full mx-auto object-cover"
            :src="slide.image"
            :alt="slide.alt"
          >
        </n-carousel-item>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCarousel, NCarouselItem } from 'naive-ui'
import { ref, reactive } from 'vue';
import { Slide } from '../types/types';
import football1 from '../assets/football1.jpg'
import football2 from '../assets/football2.jpg'
import football3 from '../assets/football3.jpg'
import vango1 from '../assets/vango1.jpg'
import vango2 from '../assets/vango2.jpg'
import doll1 from '../assets/doll1.jpg'
import doll2 from '../assets/doll2.jpg'

const isCard = ref(true)

const footbalImage: Slide[] = reactive([
  { id: 1, image: football1, alt:"image"},
  { id: 2, image: football2, alt:"image"},
  { id: 3, image: football3, alt:"image"},
])

const vangoImage: Slide[] = reactive([
  { id: 1, image: vango1, alt:"image"},
  { id: 2, image: vango2, alt:"image"},
])

const dollImage: Slide[] = reactive([
  {id: 1, image: doll1, alt:'image'},
  {id: 2, image: doll2, alt: 'image'}
])
</script>
