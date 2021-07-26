<template>
  <div class="main container mt-4">
    <h2 class="fontSizeM text-center mb-5">全部訂單</h2>
    <template v-if='!orders.length'>
      <div class="d-flex flex-column align-items-center">
        <p class='fontSizeM text-center mb-5'>你還沒有買任何東西?<br>快點去逛逛吧</p>
        <router-link to='/products' role="button"
                    class="btn btn-primary me-3">
          繼續購物
        </router-link>
      </div>
    </template>
    <table v-else class="table align-middle d-none d-md-table">
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
        <tr v-for='(order, i) in orders' :key='order.id' class="text-center">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ order.id }}</td>
          <td>{{ $date.toDate(order.create_at) }}</td>
          <td>NT {{ $toCurrency(order.total) }}</td>
          <td :class='{"text-secondary":order.is_paid}'>{{ order.is_paid? '已付款' : '未付款' }}</td>
          <td>{{ order.orderStatus? order.orderStatus : '處理中' }}</td>
          <td>{{ order.deliveryDate? $date.toDate(order.deliveryDate) : '-' }}</td>
          <td>
            <router-link :to="`/order/${order.id}`"
                       class="material-icons btn">
              description
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <ul v-if='orders.length' class='d-md-none list-unstyled'>
      <li v-for='(order) in orders' :key=order.id class='card mb-3'>
        <div class="row align-items-center">
          <div class="col-8">
            <div class="card-body">
              <ul class='list-unstyled'>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    <!-- 訂單編號: -->
                    <span class='ms-1'>#{{ order.id }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    訂單日期:
                    <span class='ms-1'>{{ $date.toDate(order.create_at) }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    商品數量:
                    <span class='ms-1'>{{ Object.keys(order.products).length }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    商品金額:
                    <span class='ms-1'>NT {{ $toCurrency(order.total) }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4">
            <router-link :to="`/order/${order.id}`"
                       class="btn btn-sm btn-primary">
              查看訂單
            </router-link>
            <!-- <button class="btn btn-sm btn-primary" type="button">查看訂單</button> -->
          </div>
        </div>
      </li>
    </ul>
    <Pagination v-if='pagination.total_pages > 1' :page="pagination"
                @emit-page='getOrders'>
    </Pagination>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: '',
      pagination: '',
      isLoading: false,
    };
  },
  components: {
    Pagination,
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  methods: {
    getOrders(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/orders?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
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
