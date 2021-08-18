<template>
  <Swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :breakpoints='{
      "@0.00": {
        "slidesPerView": 2,
        "spaceBetween": 10
      },
      "@0.75": {
        "slidesPerView": 3,
        "spaceBetween": 20
      },
      "@1.00": {
        "slidesPerView": 3,
        "spaceBetween": 25
      },
      "@1.50": {
        "slidesPerView": 4,
        "spaceBetween": 25
      }
    }'
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
        <div class="card-body p-0">
          <div class="d-md-flex justify-content-between align-items-center mb-3">
            <h2 class="fontSizeBase fontSize-md-M mb-0">{{ item.title }}</h2>
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
};
</script>
