<template>
  <div
    class="mainNav border-bottom border-secondary bg-light fixed-top zindexTop w-100"
    :class="{ 'shadow-sm': scroll }">
    <Navbar></Navbar>
  </div>
  <router-view />
  <div class="bg-secondary">
    <Footer></Footer>
  </div>
  <div class="position-relative">
    <GoTop></GoTop>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';
import GoTop from '@/components/GoTop.vue';

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
    GoTop,
  },
  watch: {
    $route() {
      if (this.$route.name !== 'layout') {
        this.$collapseNav();
      }
    },
  },
  methods: {
    getOrder(order) {
      this.order = order;
    },
    getCarts(carts) {
      this.carts = carts;
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
};
</script>
