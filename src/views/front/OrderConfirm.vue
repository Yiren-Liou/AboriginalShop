<template>
  <div class="main container mb-6">
    <OrderProgress :progress="progress"></OrderProgress>
    <p class="text-center text-danger mb-5">
      請確認購買商品和買家資訊，確認無誤後點選頁面下方確認結帳按鈕，訂單才會成功送出呦
    </p>
    <template v-if="pushOrder && pushCarts">
      <div class="row justify-content-around mb-6">
        <div class="col-md-5">
          <h2 class="fontSizeM mb-4">購買的商品</h2>
          <ul class="list-unstyled mb-3">
            <li
              v-for="item in this.pushCarts.carts"
              :key="item.product_id"
              class="card mb-3"
            >
              <div class="row align-items-center g-0">
                <div class="col-6">
                  <div  class="cartImg bg-cover bg-center"
                    :style="{
                      backgroundImage:
                        'url(' + item.product.imagesUrl[0].imgUrl + ')',
                    }">
                  </div>
                </div>
                <div class="col-5">
                  <div class="card-body pe-2">
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <p class="card-text">{{ item.product.title }}</p>
                      </li>
                      <li class="mb-2">
                        <p class="card-text">
                          數量:
                          <span class="ms-1">{{ item.qty }}</span>
                        </p>
                      </li>
                      <li class="mb-2">
                        <p class="card-text">
                          總價:
                          <span class="ms-1">NT {{ $toCurrency(item.final_total) }}</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div class="d-flex justify-content-end">
            <p>
              總金額
              <span class="ms-2"
                >NT {{ $toCurrency(this.pushCarts.final_total) }}</span
              >
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h2 class="fontSizeM mb-4">訂購人資訊</h2>
          <div class="mb-3">
            <label for="buyerName" class="form-label">訂購人姓名</label>
            <input
              type="text"
              class="form-control"
              id="buyerName"
              :value="pushOrder.user.name"
              aria-describedby="buyerName"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="buyerTell" class="form-label">訂購人手機</label>
            <input
              type="text"
              class="form-control"
              id="buyerTell"
              :value="pushOrder.user.tel"
              aria-describedby="buyerTell"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="buyerEmail" class="form-label">訂購人信箱</label>
            <input
              type="email"
              class="form-control"
              id="buyerEmail"
              :value="pushOrder.user.email"
              aria-describedby="buyerEmail"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="payment" class="form-label">付款方式</label>
            <input
              type="text"
              class="form-control"
              id="payment"
              :value="pushOrder.user.paymentMethod"
              aria-describedby="payment"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="buyerUniformNum" class="form-label">統一編號</label>
            <input
              type="text"
              class="form-control"
              id="buyerUniformNum"
              :value="pushOrder.user.uniformNumbers"
              aria-describedby="uniformNumbers"
              disabled
            />
          </div>
          <div v-if="pushOrder.user.paymentMethod === '信用卡'" class="mb-3">
            <label for="address" class="form-label">收件地址</label>
            <input
              type="text"
              class="form-control"
              id="address"
              :value="pushOrder.user.address"
              aria-describedby="address"
              disabled
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">備註</label>
            <input
              type="text"
              class="form-control"
              id="message"
              :value="pushOrder.message"
              aria-describedby="message"
              disabled
            />
          </div>
        </div>
      </div>
    </template>
    <div class="d-flex justify-content-center">
      <button
        type="button"
        class="btn btn-outline-secondary me-3"
        @click="returnToForm"
      >
        重新填寫
      </button>
      <button
        v-if="pushOrder.user.paymentMethod === '信用卡'"
        type="button"
        class="btn btn-secondary me-3"
        @click="sendOrder"
      >
        前往付款
      </button>
      <button
        v-else
        type="button"
        class="btn btn-secondary me-3"
        @click="sendOrder"
      >
        確認下單
      </button>
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

export default {
  data() {
    return {
      progress: '確認結帳',
      orderList: [],
      pushOrder: '',
      pushCarts: '',
      isLoading: false,
    };
  },
  components: {
    OrderProgress,
  },
  methods: {
    sendOrder() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(apiUrl, { data: this.pushOrder })
        .then((res) => {
          if (res.data.success) {
            if (this.pushOrder.user.paymentMethod === '信用卡') {
              this.toPaid(res.data.orderId);
            } else {
              this.isLoading = false;
              this.$router.push('/orderCompleted');
            }
            this.recordList(res.data.create_at);
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
          });
        });
    },
    toPaid(orderId) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/pay/${orderId}`;
      this.$http
        .post(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'success' });
            this.$swal
              .fire({
                title: res.data.message,
                text: '感謝您的支持',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#ffbc1f',
                confirmButtonText: '確定',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  this.$router.push('/orderCompleted');
                }
              });
          } else {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
    returnToForm() {
      this.$emit('emit-order', this.pushOrder);
      this.$router.push('/buyerForm');
    },
    recordList(createAt) {
      const hasRecords = localStorage.getItem('orderList');
      if (hasRecords) {
        this.orderList = JSON.parse(hasRecords);
        this.orderList.push(createAt);
      } else {
        this.orderList.push(createAt);
      }
      this.orderList = JSON.stringify(this.orderList);
      localStorage.setItem('orderList', this.orderList);
    },
    renderTempOrder() {
      const tempOrder = localStorage.getItem('tempOrder');
      this.pushOrder = JSON.parse(tempOrder);
      const tempCarts = sessionStorage.getItem('tempCarts');
      this.pushCarts = JSON.parse(tempCarts);
    },
  },
  created() {
    this.isLoading = true;
    this.renderTempOrder();
    setTimeout(() => {
      this.isLoading = false;
      this.$swal({
        text: '請確認「購買商品」和「買家資訊」，訂單送出後無法修改呦',
        icon: 'warning',
        confirmButtonColor: '#ffbc1f',
      });
    }, 500);
  },
};
</script>
