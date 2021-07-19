<template>
  <Navbar class='mb-4'></Navbar>
  <router-view @emit-order='getOrder' @emit-products='getProducts'
               :push-order='order' :push-products='products' :product-index='productIndex'>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      order: '',
      products: '',
      productIndex: '',
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
      console.log(this.order);
    },
    getProducts(products, productIndex) {
      this.products = products;
      this.productIndex = productIndex;
    },
  },
  created() {},
};
</script>
