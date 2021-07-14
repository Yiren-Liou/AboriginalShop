<template>
  <Navbar></Navbar>
  <router-view @emit-order='getOrder' :order='order' :neworder='order'></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      order: '',
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
  },
  created() {},
};
</script>
