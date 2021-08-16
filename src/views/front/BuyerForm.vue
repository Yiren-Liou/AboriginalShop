<template>
  <div class="main container mb-6 mb-md-0">
    <OrderProgress :progress="progress"></OrderProgress>
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">訂購資訊</h2>
    <div class="row justify-content-center">
      <div class="col-md-6 mb-4">
        <BuyerInfo></BuyerInfo>
      </div>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t">
      <div class="ldio-u3364un719">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
</template>

<script>
import OrderProgress from '@/components/front/orderProgress.vue';
import BuyerInfo from '@/components/front/BuyerInfo.vue';

export default {
  data() {
    return {
      progress: '訂購資訊',
      user: {},
      message: '',
      order: {},
      isLoading: false,
    };
  },
  components: {
    BuyerInfo,
    OrderProgress,
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.$swal({
        text: '請填寫真實姓名及手機號碼，以免無法領取包裹呦',
        icon: 'warning',
        confirmButtonColor: '#ffbc1f',
      });
    }, 500);
  },
};
</script>
