<template>
  <div class="main container d-center flex-column mt-4">
    <div class="row">
      <div class="col-md-6">
        <h2 class="fontSizeM fw-bold mb-3">訂單資訊</h2>
        <div class="border rounded bg-white fontSizeS fontSize-lg-Base p-2 px-md-3 mb-5">
          <div class="row">
            <label for="orderId" class="col-3 col-md-2 col-form-label">訂單編號</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="text" readonly class="form-control-plaintext"
              id="orderId" :value="order.id">
            </div>
            <label for="orderDate" class="col-3 col-md-2 col-form-label">訂單日期</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="text" readonly class="form-control-plaintext"
              id="orderDate" :value="$date.toDate(order.create_at)">
            </div>
            <label for="orderTotal" class="col-3 col-md-2 col-form-label">訂單金額</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="text" readonly class="form-control-plaintext"
              id="orderTotal" :value="`NT ${order.total}`">
            </div>
            <label for="orderPaidMethod" class="col-3 col-md-2 col-form-label">付款方式</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="text" readonly class="form-control-plaintext"
              id="orderPaidMethod" :value="user.paymentMethod">
            </div>
            <label for="orderPaid" class="col-3 col-md-2 col-form-label">付款狀態</label>
            <div class="col-9 col-md-4">
              <input type="text" readonly class="form-control-plaintext"
              id="orderPaid" :value="order.is_paid? '已付款' : '未付款'">
            </div>
          </div>
        </div>
        <h2 class="fontSizeM fw-bold mb-3">買家資訊</h2>
        <div class="border rounded bg-white fontSizeS fontSize-lg-Base p-2 px-md-3 mb-5">
          <div class="row">
            <label for="userName" class="col-3 col-md-2 col-form-label">買家姓名</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="text" readonly class="form-control-plaintext"
              id="userName" :value="user.name">
            </div>
            <label for="userTell" class="col-3 col-md-2 col-form-label">買家手機</label>
            <div class="col-9 col-md-4 mb-2">
              <input type="tel" readonly class="form-control-plaintext"
              id="userTell" :value="user.tel">
            </div>
            <label for="userEmail" class="col-3 col-md-2 col-form-label">買家信箱</label>
            <div class="col-9 col-md-4 mb-2 mb-md-0">
              <input type="email" readonly class="form-control-plaintext"
              id="userEmail" :value="user.email">
            </div>
            <label for="userAddress" class="col-3 col-md-2 col-form-label">買家地址</label>
            <div class="col-9 col-md-4">
              <input type="text" readonly class="form-control-plaintext"
              id="userAddress" :value="user.address">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2 class="fontSizeM fw-bold mb-3">訂購商品</h2>
        <div class="card rounded bg-white mb-6 px-2 pb-2 px-md-3 pb-md-3">
          <!-- <div class="row pb-3" v-for='(item, i) in products' :key='item.id'>
            <div class="col-5 col-md-4">
              <div :style="{ backgroundImage: 'url(' + item.product.imagesUrl[0].imgUrl + ')' }"
                    class="cartImg img-fluid bg-cover bg-center w-100">
              </div>
            </div>
            <div class="col-7 col-md-8 py-2">
              <div class="d-flex align-items-center mb-2">
                <label :for="`productTitle${i}`" class="form-label mb-0 me-3">商品名稱</label>
                <input type="text" readonly class="border-0"
                :id="`productTitle${i}`" :value="item.product.title">
              </div>
              <div class="d-flex align-items-center mb-2">
                <label :for="`productPrice${i}`" class="form-label mb-0 me-3">商品售價</label>
                <input type="text" readonly class="border-0"
                :id="`productPrice${i}`" :value="`NT ${$toCurrency(item.product.price)}`">
              </div>
              <div class="d-flex align-items-center mb-2">
                <label :for="`productQty${i}`" class="form-label mb-0 me-3">商品數量</label>
                <input type="text" readonly class="border-0"
                :id="`productQty${i}`" :value="item.qty">
              </div>
              <div class="d-flex align-items-center mb-2">
                <label :for="`totalPrice${i}`" class="form-label mb-0 me-3">商品總價</label>
                <input type="text" readonly class="border-0"
                :id="`totalPrice${i}`" :value="`NT ${$toCurrency(item.final_total)}`">
              </div>
            </div>
          </div> -->
          <div v-for='(item) in products' :key='item.id'
          class="row align-items-center g-0 mt-2 mt-md-3">
            <div class="col-4">
              <div :style="{ backgroundImage: 'url(' + item.product.imagesUrl[0].imgUrl + ')' }"
                    class="cardImg bg-cover bg-center">
              </div>
            </div>
            <div class="col-7">
              <div class="card-body py-0">
                <ul class='list-unstyled'>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS fontSize-lg-Base">
                      商品名稱:
                      <span class='ms-1'>{{ item.product.title }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS fontSize-lg-Base">
                      商品售價:
                      <span class='ms-1'>NT {{ $toCurrency(item.product.price) }}</span>
                    </p>
                  </li>
                  <li class='d-flex align-items-center mb-2'>
                    <p class="card-text fontSizeS fontSize-lg-Base mb-0">
                      商品數量:
                      <span class='ms-1'>{{ item.qty }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS fontSize-lg-Base">
                      商品總價:
                      <span class='ms-1'>NT {{ $toCurrency(item.final_total) }}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to='/orders' class='btn btn-primary mb-6'>返回訂單列表</router-link>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
export default {
  data() {
    return {
      routeId: this.$route.params.id,
      order: '',
      user: '',
      products: '',
      isLoading: false,
    };
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  methods: {
    getOrder() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${this.routeId}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.order.total = this.$toCurrency(this.order.total);
            this.products = Object.values(this.order.products);
            this.user = this.order.user;
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error', confirmButtonColor: '#ffbc1f' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.isLoading = true;
    this.getOrder();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
