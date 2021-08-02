<template>
  <div class="main container">
    <div class="row justify-content-center mb-4 mb-md-6">
      <div class="col-md-5">
        <h2 class="fontSizeM fw-bold mb-3">訂單資訊</h2>
        <div
          class="
            border
            rounded
            bg-white
            p-2
            px-md-3
            mb-5
          "
        >
          <ul class="row list-unstyled mb-0">
            <li class="col-md-6">
              <p>
                訂單編號
                <span class="ms-3">{{ order.create_at }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                訂單日期
                <span class="ms-3">{{ $date.toDate(order.create_at) }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                訂單金額
                <span class="ms-3">NT {{ order.total }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                付款方式
                <span class="ms-3">{{ user.paymentMethod }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                付款狀態
                <span class="ms-3">{{
                  order.is_paid ? "已付款" : "未付款"
                }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                付款日期
                <span class="ms-3">
                  {{
                    order.paid_date ? $date.toDate(order.paid_date) : "未付款"
                  }}
                </span>
              </p>
            </li>
            <li class="col-md-6">
              <p>
                訂單狀態
                <span class="ms-3">{{
                  order.orderStatus ? order.orderStatus : "確認中"
                }}</span>
              </p>
            </li>
            <li class="col-md-6">
              <p class="mb-0">
                出貨日期
                <span class="ms-3">{{
                  order.deliveryDate ? order.deliveryDate : "未出貨"
                }}</span>
              </p>
            </li>
          </ul>
        </div>
        <h2 class="fontSizeM fw-bold mb-3">買家資訊</h2>
        <div
          class="
            border
            rounded
            bg-white
            p-2
            px-md-3
            mb-5
          "
        >
          <ul class="list-unstyled mb-0">
            <li>
              <p>
                買家姓名
                <span class="ms-3">{{ user.name }}</span>
              </p>
            </li>
            <li>
              <p>
                買家手機
                <span class="ms-3">{{ user.tel }}</span>
              </p>
            </li>
            <li>
              <p>
                買家信箱
                <span class="ms-3">{{ user.email }}</span>
              </p>
            </li>
            <li>
              <p>
                買家地址
                <span class="ms-3">{{ user.address }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-5">
        <h2 class="fontSizeM fw-bold mb-3">訂購商品</h2>
        <div class="card rounded bg-white mb-6 px-2 pb-2 px-md-3 pb-md-3">
          <div
            v-for="item in products"
            :key="item.id"
            class="row align-items-center g-0 mt-2 mt-md-3"
          >
            <div class="col-4">
              <div
                :style="{
                  backgroundImage:
                    'url(' + item.product.imagesUrl[0].imgUrl + ')',
                }"
                class="cardImg bg-cover bg-center"
              ></div>
            </div>
            <div class="col-7">
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <p class="card-text">
                      商品名稱:
                      <span class="ms-1">{{ item.product.title }}</span>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p class="card-text">
                      商品售價:
                      <span class="ms-1"
                        >NT {{ $toCurrency(item.product.price) }}</span
                      >
                    </p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <p class="card-text mb-0">
                      商品數量:
                      <span class="ms-1">{{ item.qty }}</span>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p class="card-text">
                      商品總價:
                      <span class="ms-1"
                        >NT {{ $toCurrency(item.final_total) }}</span
                      >
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-center">
      <router-link to="/orders" class="btn btn-primary mb-6"
        >返回訂單列表</router-link
      >
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
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            this.order.total = this.$toCurrency(this.order.total);
            this.products = Object.values(this.order.products);
            this.user = this.order.user;
            this.isLoading = false;
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
