<template>
  <div
    class="bgImg"
    style="
      background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1626773420522.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VVYq6Rh0feafPbhgRajOOTgmN1JoUo2bMRkMEsel7SdYDmHjwK9yUBvav7%2FHGYo2f7rjc1GsNH4iyzmV6oCV7CQkxmc4DPeIH84TPZYjlqpEUVYK6SCu9KYt8zf95zVYogDQpjuWU0hzRcAgY026YwIt%2BR6lMOG6dP1Zr4f1yvXJGOEPAuTU0N6sPt8qKyd3Ux1YoxDIUZpl%2F1K0v%2FnX%2Bgng2hlp1xXQs8IYL2QDRu077PCQTxgpXG0fzbXzX8R12yOpI9Vchw%2FI6QemR6dN%2BBzzXP3j%2Ba3Tj525En5JwIM9fnViPrMvSwhHNyCoCo1zyo%2FP%2BLW%2BffymbSRTC0rNyQ%3D%3D);
    "
  >
    <Navbar class="mb-5"></Navbar>
    <h2 class="fontSizeL fw-bold text-center mb-6">你迷路了嗎? 你想要 ~</h2>
    <div class="container">
      <div class="row justify-content-around py-6">
        <div class="col-md-2 py-6">
          <router-link to="/" class="btn btn-lg btn-secondary py-3 w-100">
            回到入口
          </router-link>
        </div>
        <div class="col-md-2 py-6">
          <router-link to="/products" class="btn btn-lg btn-primary py-3 w-100">
            繼續探險
          </router-link>
        </div>
      </div>
    </div>
    <Footer
      class="position-absolute bottom-0 start-50 translate-middle-x"
    ></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
