<template>
  <div class="main container d-center flex-column">
    <h2 class="fontSizeM fw-bold mb-3">訂單資訊</h2>
    <div class="border rounded bg-white p-2 px-md-3 mb-5">
      <div class="row">
        <label for="orderId" class="col-3 col-md-2 col-form-label">訂單編號</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="text" readonly class="form-control-plaintext"
          id="orderId" :value="order.id">
        </div>
        <label for="orderDate" class="col-3 col-md-2 col-form-label">訂單日期</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="text" readonly class="form-control-plaintext"
          id="orderDate" :value="$date.toDate(order.create_at)">
        </div>
        <label for="orderTotal" class="col-3 col-md-2 col-form-label">訂單金額</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="text" readonly class="form-control-plaintext"
          id="orderTotal" :value="`NT ${order.total}`">
        </div>
        <label for="orderPaidMethod" class="col-3 col-md-2 col-form-label">付款方式</label>
        <div class="col-9 col-md-4 mb-3">
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
    <div class="border rounded bg-white p-2 px-md-3 mb-5">
      <div class="row">
        <label for="userName" class="col-3 col-md-2 col-form-label">買家姓名</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="text" readonly class="form-control-plaintext"
          id="userName" :value="user.name">
        </div>
        <label for="userTell" class="col-3 col-md-2 col-form-label">買家手機</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="tel" readonly class="form-control-plaintext"
          id="userTell" :value="user.tel">
        </div>
        <label for="userEmail" class="col-3 col-md-2 col-form-label">買家信箱</label>
        <div class="col-9 col-md-4 mb-3 mb-md-0">
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
    <h2 class="fontSizeM fw-bold mb-3">訂購商品</h2>
    <div class="border rounded bg-white p-3 px-md-3 mb-6">
      <div class="row">
        <div v-for='(item, i) in products' :key='item.id' class="col-md-6">
          <div class="row">
            <div class="col-md-4">
              <img :src="item.product.imagesUrl[0].imgUrl" :alt="item.product.title"
                        class='img-fluid'>
            </div>
            <div class="col-md-8">
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
          </div>
        </div>
      </div>
    </div>
    <router-link to='/orders' class='btn btn-primary mb-6'>返回訂單列表</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeId: this.$route.params.id,
      order: '',
      user: '',
      products: '',
    };
  },
  props: ['pushOrder', 'pushProducts', 'productIndex'],
  methods: {
    getOrder() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order/${this.routeId}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.order.total = this.$toCurrency(this.order.total);
            this.products = Object.values(this.order.products);
            this.user = this.order.user;
            this.isLoading = false;
            console.log(this.order);
            console.log(this.products);
            console.log(this.user);
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
