<template>
  <div
    class="bgImg align-items-center"
    style="
      background-image: url(https://images.pexels.com/photos/235925/pexels-photo-235925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1920);
    "
  >
    <Navbar :nav-light="isNavLight"></Navbar>
    <div class="d-flex flex-column align-items-center mt-7 mt-md-6 position-relative">
      <h2 class="fontSizeL fontSize-md-XL fw-bold text-white mt-3 mt-md-5 mb-3">
        <span class="material-icons">sentiment_very_satisfied</span>
        訂購成功
      </h2>
      <p class="fontSize-md-S text-white text-center mb-4">訂單確認信已寄至您的信箱，<br>謝謝支持!</p>
      <div class="d-center">
        <router-link
          to="/orders"
          role="button"
          class="btn btn-light fontSize-md-S fw-bold px-4 me-3 me-md-4"
        >
          查詢訂單
        </router-link>
        <router-link
          to="/products"
          role="button"
          class="btn btn-light fontSize-md-S fw-bold px-4"
        >
          繼續購物
        </router-link>
      </div>
      <img class="tagImg d-none d-lg-block" src="@/assets/images/tag.png">
    </div>
    <Footer class="position-fixed bottom-0"></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      isNavLight: true,
      isFooterDark: true,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
