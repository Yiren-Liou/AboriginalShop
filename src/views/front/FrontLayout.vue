<template>
  <div class="border-bottom border-secondary mb-2 mb-md-4">
    <Navbar></Navbar>
  </div>
  <router-view @emit-order='getOrder' :push-order='order'>
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
  },
  created() {},
};
</script>
