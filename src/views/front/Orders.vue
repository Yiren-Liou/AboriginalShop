<template>
  <div class="container">
    <h2 class="text-center mb-5">全部訂單</h2>
    <table class="table align-middle">
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
            console.log(res.data);
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
