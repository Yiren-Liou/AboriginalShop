<template>
  <div class="main container">
    <h2 class="text-center mb-5">訂單資訊</h2>
    <div class="card p-2">
      <div class="row mb-3">
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
        <label for="orderPaid" class="col-3 col-md-2 col-form-label">付款狀態</label>
        <div class="col-9 col-md-4 mb-3">
          <input type="text" readonly class="form-control-plaintext"
          id="orderPaid" :value="order.is_paid? '已付款' : '未付款'">
        </div>
      </div>
    </div>
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
