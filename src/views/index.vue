<template>
  <div class="m-5">
    <n-carousel autoplay class="flex h-96">
      <div
        class=""
        v-for="slide in images"
        :key="slide.id">
        <img
          class="w-full h-96 object-cover"
          :src="slide.image"
          :alt="slide.alt"
        >
        </img>
      </div>
    </n-carousel>
    <div class="flex justify-between items-center">
      <div class="flex m-5 items-center">
        <div class="flex items-center mr-5 h-10 w-20">
          <img src="../assets/new.png" alt="">
        </div class="text-center">售后服务</div>
      <div class="m-5"><router-link to="/afterSales" class="text-white no-underline shadow-lg hover:text-teal-500">更多 ></router-link></div>
    </div>
    <div class="">
      <img class="w-full h-1/6 object-cover" src="../assets/image4.jpg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCarousel } from 'naive-ui'
import { Slide } from '../types/types';
import { reactive } from 'vue';
import image1 from '../assets/image3.jpg'
import image2 from '../assets/new2.jpg'

const images: Slide[] = reactive([
  { id: 1, image: image1, alt:"image"},
  { id: 2, image: image2, alt:"image"},
  { id: 3, image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg', alt:"image"},
  { id: 4, image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg', alt:"image"}
])
console.log(images[0].image)
</script>
