<template>
  <Swiper
    :slidesPerView="windowSmallWidth"
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
  data() {
    return {
      docWidth: '',
    };
  },
  props: ['products'],
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    windowSmallWidth() {
      if (this.docWidth <= 576) {
        return 2;
      }
      if (this.docWidth <= 768) {
        return 3;
      }
      return 4;
    },
  },
  mounted() {
    this.docWidth = document.documentElement.scrollWidth;
    window.addEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
  unmounted() {
    window.removeEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
};
</script>
