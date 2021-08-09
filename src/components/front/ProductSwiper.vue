<template>
  <Swiper
    :slidesPerView="windowSize"
    :spaceBetween="30"
    :freeMode="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper mb-4 mb-md-7"
  >
    <Swiper-slide v-for="item in products" :key="item.id">
      <router-link :to="`/product/${item.id}`" class="productCard px-3">
        <div class="card-img-top mb-2">
          <img
            :src="item.imagesUrl[0].imgUrl"
            :alt="item.title"
            class="img-fluid"
          />
        </div>
        <div class="card-body px-0">
          <div class="d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="fontSizeBase fontSize-md-M">{{ item.title }}</h2>
            <p
              class="fontSize-md-S fw-bold mb-0"
              :class="{ 'text-primary': item.is_sell }"
            >
              NT {{ item.is_sell ? item.price : item.origin_price }}
              <span
                v-if="item.is_sell"
                class="fontSizeXS text-decoration-line-through text-dark ms-1"
              >
                NT {{ item.origin_price }}
              </span>
            </p>
          </div>
        </div>
      </router-link>
    </Swiper-slide>
  </Swiper>
</template>

<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Pagination, Autoplay]);

export default {
  props: ['products'],
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    windowSize() {
      if (window.screen.width <= 576) {
        return 2;
      }
      return 3;
    },
  },
};
</script>
