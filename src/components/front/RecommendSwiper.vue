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
    class="mySwiper pb-6 mb-5"
  >
    <Swiper-slide v-for="item in recommends" :key="item.id">
      <router-link
        :to="{
          path: `/product/${item.id}`,
          query: { category: item.category, title: item.title },
        }"
        class="col-6 col-md-2 mb-2"
      >
        <img
          :src="item.imagesUrl[0].imgUrl"
          class="cardImg mb-2"
          :alt="item.title"
        />
        <div class="card-body p-0">
          <h2 class="fontSizeBase fontSize-md-M mb-2">{{ item.title }}</h2>
          <p
            class="fontSize-md-S fw-bold mb-2"
            :class="{ 'text-primary': item.is_sell }"
          >
            NT {{ item.is_sell ? item.price : item.origin_price }}
            <span
              v-if="item.is_sell"
              class="fontSizeBase text-decoration-line-through text-dark ms-1"
            >
              NT {{ item.origin_price }}
            </span>
          </p>
          <button
            type="button"
            class="addCartBtn btn btn-secondary d-center w-100"
            @click.prevent="addToCart(item.id)"
          >
            <p class="d-center mb-0 w-100">加入購物車</p>
          </button>
        </div>
      </router-link>
    </Swiper-slide>
  </Swiper>
</template>

<script>
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import emitter from '@/methods/Emitter';

SwiperCore.use([Pagination, Autoplay]);

export default {
  data() {
    return {
      recommends: '',
      cartList: '',
      products: '',
      docWidth: '',
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  emits: ['update-cart-list'],
  props: ['cart'],
  computed: {
    windowSmallWidth() {
      if (this.docWidth <= 576) {
        return 2;
      }
      if (this.docWidth <= 768) {
        return 4;
      }
      return 5;
    },
  },
  watch: {
    cart() {
      this.filterProduct(this.products);
    },
  },
  methods: {
    getProducts() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products.sort((a, b) => b.num - a.num);
            this.filterProduct(this.products);
          } else {
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
    filterProduct(products) {
      const cartId = [];
      this.cart.carts.forEach((item) => cartId.push(item.product.id));
      this.recommends = products.filter(
        (item) => cartId.indexOf(item.id) === -1,
      );
      this.recommends = this.recommends.filter((item) => item.is_season);
    },
    addToCart(productId) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        data: {
          product_id: productId,
          qty: 1,
        },
      };
      this.$http
        .post(apiUrl, cartData)
        .then((res) => {
          if (res.data.success) {
            this.$emit('update-cart-list');
            this.filterProduct(this.products);
            emitter.emit('update-cart');
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
          } else {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
  },
  mounted() {
    this.getProducts();
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
