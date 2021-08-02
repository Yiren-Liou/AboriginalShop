<template>
  <div
    class="border-bottom border-secondary bg-light fixed-top zindexTop w-100"
    :class="{ 'shadow-sm': scroll }"
  >
    <Navbar></Navbar>
  </div>
  <router-view
    @emit-order="getOrder"
    :push-order="order"
    @emit-carts="getCarts"
    :push-carts="carts"
  />
  <!-- <router-view />
  <router-view name='orderConfirm' :push-carts="carts" :push-order="order"></router-view>
  <router-view name='cart' @emit-carts="getCarts"></router-view>
  <router-view name='buyerForm' @emit-order="getOrder"></router-view> -->
  <div class="bg-secondary">
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      order: '',
      carts: '',
      favoriteNum: '',
      scroll: '',
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getOrder(order) {
      this.order = order;
      console.log(this.order);
    },
    getCarts(carts) {
      this.carts = carts;
      console.log(this.carts);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
};
</script>
