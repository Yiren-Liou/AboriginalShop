<template>
  <div class="container">
    <h2 class="text-center mb-5">全部訂單</h2>
    <table class="table align-middle d-none d-md-table">
      <thead>
        <tr class="text-center">
          <th scope="col">#</th>
          <th scope="col">訂單編號</th>
          <th scope="col">訂單日期</th>
          <th scope="col">總金額</th>
          <th scope="col">付款狀態</th>
          <th scope="col">訂單狀態</th>
          <th scope="col">出貨日期</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(order, i) in orders' :key='order.id' class="text-center">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ order.id }}</td>
          <td>{{ $date.toDate(order.create_at) }}</td>
          <td>{{ $toCurrency(order.total) }}</td>
          <td>{{ order.is_paid? '已付款' : '未付款' }}</td>
          <td>{{ order.orderStatus? order.orderStatus : '處理中' }}</td>
          <td>{{ order.deliveryDate? $date.toDate(order.deliveryDate) : '-' }}</td>
        </tr>
      </tbody>
    </table>
    <ul class='d-md-none list-unstyled'>
      <li v-for='(item) in orders' :key=item.id class='card mb-3'>
        <div class="row align-items-center">
          <div class="col-8">
            <div class="card-body">
              <ul class='list-unstyled'>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    <!-- 訂單編號: -->
                    <span class='ms-1'>#{{ item.id }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    訂單日期:
                    <span class='ms-1'>{{ $date.toDate(item.create_at) }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    商品數量:
                    <span class='ms-1'>{{ Object.keys(item.products).length }}</span>
                  </p>
                </li>
                <li class='mb-2'>
                  <p class="card-text fontSizeS">
                    商品金額:
                    <span class='ms-1'>NT {{ $toCurrency(item.total) }}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-4">
            <button class="btn btn-sm btn-primary" type="button">查看訂單</button>
          </div>
        </div>
      </li>
    </ul>
    <Pagination v-if='pagination.total_pages > 1' :page="pagination"
                @emit-page='getOrders'>
    </Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      orders: '',
      pagination: '',
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/orders?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders;
            this.pagination = res.data.pagination;
            console.log(this.orders);
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
    this.getOrders();
  },
};
</script>
