<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">訂單</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to='/admin/products'>全部訂單</router-link>
      </li>
    </ol>
  </nav>
  <div class="row justify-content-end">
    <div class="col-md-3">
      <Search></Search>
    </div>
    <div class="col-md-1">
      <Filter></Filter>
    </div>
  </div>
  <table class="table align-middle mb-3">
    <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">訂單編號</th>
        <th scope="col">訂購人</th>
        <th scope="col">訂購時間</th>
        <th scope="col">總金額</th>
        <th scope="col">付款狀態</th>
        <th scope="col">出貨狀態</th>
        <th scope="col">查看</th>
        <th scope="col">編輯</th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody v-if="!orderList.length">
      <tr>目前沒有訂單呦</tr>
    </tbody>
    <tbody v-else class="text-center">
      <tr v-for="(order, i) in orderList" :key="order.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ order.id }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ $toDate(order.create_at) }}</td>
        <td>NT {{ $toCurrency(order.total) }}</td>
        <td>{{ order.is_paid? '已付款' : '未付款' }}</td>
        <td>未出貨</td>
        <td>
          <router-link :to="`order/${order.id}`" class="material-icons btn">
            remove_red_eye
          </router-link>
        </td>
        <td>
          <router-link :to="`order/${order.id}`" class="material-icons btn">
            edit
          </router-link>
        </td>
        <td>
          <button class="material-icons btn" @click="delOrder(order.id)">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center">
    <button type="button" class="btn btn-primary" @click="delAll()">刪除全部訂單</button>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import Search from '@/components/Search.vue';
import Filter from '@/components/admin/Filter.vue';

export default {
  data() {
    return {
      orderList: '',
      isLoading: false,
    };
  },
  components: {
    Search,
    Filter,
  },
  methods: {
    getOrderList(page = 1) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.orderList = res.data.orders;
            this.isLoading = false;
            console.log(this.orderList);
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    delOrder(id) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'success' });
            this.getOrderList();
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        }).catch((err) => {
          console.dir(err);
        });
    },
    delAll() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/orders/all`;
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'success' });
            this.getOrderList();
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
  mounted() {
    this.getOrderList();
  },
};
</script>
