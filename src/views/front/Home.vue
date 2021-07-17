<template>
  <div class="bgImg banner justify-content-between align-items-center">
    <div class="bgCover"></div>
    <Navbar :nav-light='isNavLight'></Navbar>
    <div class="bannerSlogan d-flex flex-column align-items-center">
      <h2 class="fontSizeL fontSize-lg-L fw-bold mb-3">你知道友善環境的美食嗎?</h2>
      <p class="text-center d-none d-lg-block mb-lg-0">
        原民部落使用永續循環的栽種方式，保持大自然的平衡，
      </p>
      <p class="text-center">
        不只能保護農民在安全環境下耕作，
        <br class="d-lg-none">
        也能讓消費者吃得安心又健康。
      </p>
      <router-link to='/products' role='button'
          class="btn btn-light fontSizeM fw-bold px-4">
          我現在就想吃
      </router-link>
    </div>
    <p class="d-flex flex-column align-items-center fontSizeS">
      我想知道
      <span class="material-icons">keyboard_arrow_down</span>
    </p>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      isNavLight: true,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  created() {
  },
};
</script>
