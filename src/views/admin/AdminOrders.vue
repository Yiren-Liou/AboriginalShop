<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">訂單</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to='/admin/products'>全部訂單</router-link>
      </li>
    </ol>
  </nav>
  <div class="row justify-content-end mb-3">
    <div class="col-md-3">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="請輸入訂單編號"
              aria-label="search" aria-describedby="searchBtn"
              v-model="search">
        <span class="input-group-text material-icons bg-transparent me-3">search</span>
        <div class="dropdown">
          <button class="material-icons btn btn-outline-secondary
                  d-flex justify-content-center align-items-center me-2"
                  type="button" id="filterBtn"
                  data-bs-toggle="dropdown" aria-expanded="false">sort
          </button>
          <ul class="dropdown-menu" aria-labelledby="filterBtn">
            <li class="mb-2">
              <a class="dropdown-item" href="#"
                  data-field="create_new_old" @click.prevent='filterItem'>
                  訂購時間新到舊
              </a>
            </li>
            <li class="mb-2">
              <a class="dropdown-item" href="#"
                  data-field="create_old_new" @click.prevent='filterItem'>
                  訂購時間舊到新
              </a>
            </li>
            <li class="mb-2">
              <a class="dropdown-item" href="#"
                  data-field="total_low_high" @click.prevent='filterItem'>
                  總金額低到高
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#"
                  data-field="total_high_low" @click.prevent='filterItem'>
                  總金額高到低
              </a>
            </li>
          </ul>
        </div>
      </div>
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
      <tr v-for="(order, i) in filterOrder" :key="order.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ order.id }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ $date.toDate(order.create_at) }}</td>
        <td>NT {{ $toCurrency(order.total) }}</td>
        <td>{{ order.is_paid? '已付款' : '未付款' }}</td>
        <td>未出貨</td>
        <td>
          <router-link :to="`order/${order.id}`" @click="emitReadonly(true)"
                       class="material-icons btn">
            remove_red_eye
          </router-link>
        </td>
        <td>
          <router-link :to="`order/${order.id}`" @click="emitReadonly(false)"
                       class="material-icons btn">
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
export default {
  data() {
    return {
      orderList: '',
      isLoading: false,
      search: '',
    };
  },
  components: {
  },
  computed: {
    filterOrder() {
      return this.orderList.filter((item) => item.id.match(this.search));
    },
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
    filterItem(e) {
      e.preventDefault();
      const action = e.target.getAttribute('data-field');
      switch (action) {
        case 'total_low_high':
          this.orderList.sort((a, b) => a.total - b.total);
          break;
        case 'total_high_low':
          this.orderList.sort((a, b) => b.total - a.total);
          break;
        case 'create_new_old':
          this.orderList.sort((a, b) => {
            const date1 = this.$date.toUnix(a.create_at);
            const date2 = this.$date.toUnix(b.create_at);
            return date2 - date1;
          });
          break;
        case 'create_old_new':
          this.orderList.sort((a, b) => {
            const date1 = this.$date.toUnix(a.create_at);
            const date2 = this.$date.toUnix(b.create_at);
            return date1 - date2;
          });
          break;
        default:
          break;
      }
    },
    emitReadonly(status) {
      this.$emit('emit-readonly', status);
    },
  },
  mounted() {
    this.getOrderList();
  },
};
</script>
