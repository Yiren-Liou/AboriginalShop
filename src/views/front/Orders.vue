<template>
  <div class="main container">
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">─ 全部訂單 ─</h2>
    <template v-if="!localOrder.length">
      <div class="d-flex flex-column align-items-center">
        <p class="fontSizeM text-center mb-5">
          你還沒有買任何東西?<br />快點去逛逛吧
        </p>
        <router-link to="/products" role="button" class="btn btn-primary me-3">
          繼續購物
        </router-link>
      </div>
    </template>
    <template v-else>
      <div class="row justify-content-end mb-4">
        <div class="col-md-3">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入訂單編號"
              aria-label="search"
              aria-describedby="searchBtn"
              v-model.trim="search"
            />
            <span class="input-group-text material-icons bg-transparent me-3">search</span>
          </div>
        </div>
      </div>
      <table class="table align-middle d-none d-md-table mb-7">
        <thead>
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">訂單編號</th>
            <th scope="col">訂單日期</th>
            <th scope="col">總金額</th>
            <th scope="col">付款狀態</th>
            <th scope="col">訂單狀態</th>
            <th scope="col">出貨日期</th>
            <th scope="col">查看訂單</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, i) in filterOrder" :key="order.id" class="text-center">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ order.create_at }}</td>
            <td>{{ $date.toDate(order.create_at) }}</td>
            <td>NT {{ $toCurrency(order.total) }}</td>
            <td :class="{ 'text-secondary': !order.is_paid }">
              {{ order.is_paid ? "已付款" : "未付款" }}
            </td>
            <td :class="{ 'text-secondary': order.orderStatus === '已出貨' }">
              {{ order.orderStatus ? order.orderStatus : "確認中" }}
            </td>
            <td>{{ order.deliveryDate ? order.deliveryDate : "-" }}</td>
            <td>
              <router-link
                :to="`/order/${order.id}`"
                class="material-icons btn"
              >
                description
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="d-md-none list-unstyled mb-6">
        <li v-for="order in filterOrder" :key="order.id" class="card mb-3">
          <div class="row align-items-center">
            <div class="col-8">
              <div class="card-body">
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <p class="card-text">
                      <span class="ms-1">#{{ order.create_at }}</span>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p class="card-text">
                      訂單日期:
                      <span class="ms-1">{{
                        $date.toDate(order.create_at)
                      }}</span>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p class="card-text">
                      商品數量:
                      <span class="ms-1">{{
                        Object.keys(order.products).length
                      }}</span>
                    </p>
                  </li>
                  <li class="mb-2">
                    <p class="card-text">
                      商品金額:
                      <span class="ms-1"
                        >NT {{ $toCurrency(order.total) }}</span
                      >
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-4">
              <router-link
                :to="`/order/${order.id}`"
                class="btn btn-sm btn-primary"
              >
                查看訂單
              </router-link>
            </div>
          </div>
        </li>
      </ul>
      <div v-if="pagination.total_pages > 1" class="d-center">
        <Pagination :page="pagination" @emit-page="getOrders"></Pagination>
      </div>
    </template>
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
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: '',
      localOrder: '',
      pagination: '',
      search: '',
      isLoading: false,
    };
  },
  components: {
    Pagination,
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  computed: {
    filterOrder() {
      if (this.localOrder) {
        return this.localOrder.filter((item) => (item.create_at).toString().match(this.search));
      }
      return [];
    },
  },
  methods: {
    getOrders(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/orders?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            this.renderOrder(this.orders);
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
          this.isLoading = false;
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
    renderOrder(orders) {
      this.localOrder = JSON.parse(localStorage.getItem('orderList'));
      if (this.localOrder) {
        const compared = this.localOrder;
        this.localOrder = orders.filter((item) => this.localOrder.indexOf(item.create_at) !== -1);
        if (this.localOrder.length !== compared.length) {
          const newLocalOrder = [];
          this.localOrder.forEach((item) => newLocalOrder.push(item.create_at));
          localStorage.setItem('orderList', JSON.stringify(newLocalOrder));
        }
      }
    },
  },
  created() {
    this.isLoading = true;
    this.getOrders();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
