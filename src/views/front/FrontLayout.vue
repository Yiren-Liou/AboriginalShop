<template>
  <div class="border-bottom border-secondary">
    <Navbar></Navbar>
  </div>
  <!-- <router-view/>
  <router-view name='buyerForm' @emit-order='getOrder' :push-order='order'></router-view>
  <router-view name='orderConfirm' @emit-order='getOrder' :push-order='order'></router-view> -->
  <router-view @emit-order='getOrder' :push-order='order'
               @emit-carts='getCarts' :push-carts='carts'>
  </router-view>
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
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getOrder(order) {
      this.order = order;
    },
    getCarts(carts) {
      this.carts = carts;
    },
  },
  created() {},
};
</script>
