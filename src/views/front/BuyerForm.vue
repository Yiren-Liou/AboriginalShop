<template>
  <div class="main container mb-6 mb-md-0">
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div
              class="border border-2 rounded-circle bg-primary p-2 mb-3"
            ></div>
            <span class="text-center">確認購物車</span>
          </div>
          <div class="progressLine border-primary"></div>
          <div class="d-flex flex-column align-items-center">
            <div
              class="border border-2 rounded-circle bg-primary p-2 mb-3"
            ></div>
            <span class="text-center">填寫訂購資訊</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">確認結帳</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">訂購成功</span>
          </div>
        </div>
      </div>
    </div>
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
import BuyerInfo from '@/components/front/BuyerInfo.vue';

export default {
  data() {
    return {
      user: {},
      message: '',
      order: {},
      isLoading: false,
    };
  },
  components: {
    BuyerInfo,
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
