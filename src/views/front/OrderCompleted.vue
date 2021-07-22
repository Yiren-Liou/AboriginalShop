<template>
  <div class="bgImg align-items-center"
    style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625847458370.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qIATLmeTh8f3ULxoiAT3NxALn8OFpFFxokXD5ESGINxKUbS2BGMAsDRQjWUaHcyXt3fZJaSOlmlC%2FaoM2lUcZTz6izSQtB7uNb3L75Rk6GzNDcGAtPtQ3ztrW%2F122xjmhBxCHVHjwLZ0fHTzGZeBPTaEpde2qA1YJQGlSPyJq30fD69guO9cbmDzO324eenT4bkw0%2FPKC0AGJLyjrFlX%2By3I21WjaIf4hjZg5G7NVoWKWGplpPZ7YBQGaLxTBb%2FPUioUvLmXl2rSbggFATGQtk1GvREQprXD68nqd3k5v4bVEaDx3v%2BHwuvqpegt7R2X9G%2B00UkNSWrckpJI9rGo8A%3D%3D)">
    <Navbar :nav-light='isNavLight'></Navbar>
    <div class="d-flex flex-column align-items-center mt-6">
      <h2 class="text-white fontSize-lg-L fw-bold">訂購成功，來杯咖啡吧</h2>
      <p class="text-white">訂單資訊已寄送至您的信箱，謝謝支持</p>
      <div class="d-flex">
        <router-link to='/product/-Meidwal0yluLh617uZz'
              role="button" class="btn btn-light fontSizeM fw-bold px-4 me-3">
          我要美式
        </router-link>
        <router-link to='/product/-Meidwal0yluLh617uZz'
              role="button" class="btn btn-light fontSizeM fw-bold px-4">
          我要拿鐵
        </router-link>
      </div>
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
