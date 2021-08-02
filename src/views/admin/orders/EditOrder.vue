<template>
  <nav
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
    class="mb-3"
  >
    <ol class="breadcrumb">
      <li class="breadcrumb-item">訂單</li>
      <li class="breadcrumb-item">
        <router-link to="/admin/orders">全部訂單</router-link>
      </li>
      <li v-if="readonly" class="breadcrumb-item active">
        {{ order.create_at }}
      </li>
      <li v-else class="breadcrumb-item active">{{ order.create_at }}</li>
      <li v-if="!readonly" class="breadcrumb-item active">編輯</li>
    </ol>
  </nav>
  <div v-if="readonly" class="d-flex justify-content-between mb-4">
    <router-link to="/admin/orders" class="btn btn-primary btn-sm"
      >返回</router-link
    >
    <div class="d-flex">
      <button
        type="button"
        class="btn btn-primary btn-sm me-3"
        @click="delOrder()"
      >
        刪除
      </button>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="emitReadonly(false)"
      >
        編輯
      </button>
    </div>
  </div>
  <div v-else class="d-flex justify-content-end mb-4">
    <button
      type="button"
      class="btn btn-primary btn-sm me-3"
      @click="cancelEdit"
    >
      取消
    </button>
    <button class="btn btn-primary btn-sm" @click="update(order.id)">
      確定
    </button>
  </div>
  <nav>
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link active"
        id="nav-basic-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-basic"
        type="button"
        role="tab"
        aria-controls="nav-basic"
        aria-selected="true"
      >
        訂單資訊
      </button>
      <button
        class="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="true"
      >
        訂購人資料
      </button>
      <button
        class="nav-link"
        id="nav-products-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-products"
        type="button"
        role="tab"
        aria-controls="nav-products"
        aria-selected="false"
      >
        訂購明細
      </button>
    </div>
  </nav>
  <div class="tab-content border-bottom p-4" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-basic"
      role="tabpanel"
      aria-labelledby="nav-basic-tab"
    >
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="orderId" class="form-label">訂單編號</label>
            <input
              type="text"
              class="form-control"
              id="orderId"
              :value="order.create_at"
              disabled
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="orderDate" class="form-label">訂單日期</label>
            <input
              type="date"
              class="form-control"
              id="orderDate"
              :value="$date.toDate(order.create_at)"
              disabled
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="orderTotal" class="form-label">總金額</label>
            <input
              type="text"
              class="form-control"
              id="orderTotal"
              :value="$toCurrency(parseInt(order.total))"
              disabled
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="orderStatus" class="form-label">訂單狀態</label>
            <select
              class="form-select"
              id="orderStatus"
              v-model="order.orderStatus"
              :disabled="readonly"
            >
              <option value="" disabled>請選擇訂單狀態</option>
              <option value="處理中">處理中</option>
              <option value="已出貨">已出貨</option>
              <option value="已完成">已完成</option>
            </select>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="paidStatus" class="form-label">付款狀態</label>
            <input
              type="text"
              class="form-control"
              id="paidStatus"
              :value="`${order.is_paid ? '已付款' : '未付款'}`"
              disabled
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="paidDate" class="form-label">付款日期</label>
            <input
              type="date"
              class="form-control"
              id="paidDate"
              :value="
                $date.toDate(order.paid_date)
                  ? $date.toDate(order.paid_date)
                  : ''
              "
              disabled
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="deliveryDate" class="form-label">出貨日期</label>
            <input
              type="date"
              class="form-control"
              :disabled="
                readonly ||
                order.orderStatus === '處理中' ||
                order.orderStatus === '已完成'
              "
              id="deliveryDate"
              v-model="order.deliveryDate"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="orderMessage" class="form-label">備註</label>
            <input
              type="text"
              class="form-control"
              id="orderMessage"
              :value="order.message"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerName" class="form-label">姓名</label>
            <input
              type="text"
              class="form-control"
              :disabled="readonly"
              id="buyerName"
              v-model="order.user.name"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerTel" class="form-label">電話</label>
            <input
              type="tel"
              class="form-control"
              :disabled="readonly"
              id="buyerTel"
              v-model="order.user.tel"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerEamil" class="form-label">信箱</label>
            <input
              type="email"
              class="form-control"
              :disabled="readonly"
              id="buyerEamil"
              v-model="order.user.email"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerAddress" class="form-label">地址</label>
            <input
              type="text"
              class="form-control"
              :disabled="readonly"
              id="buyerAddress"
              v-model="order.user.address"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerPaidMethod" class="form-label">付款方式</label>
            <input
              type="text"
              class="form-control"
              :value="order.user.paymentMethod"
              id="buyerPaidMethod"
              disabled
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="nav-products"
      role="tabpanel"
      aria-labelledby="nav-products-tab"
    >
      <table class="table align-middle">
        <thead class="text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">商品圖片</th>
            <th scope="col">商品編號</th>
            <th scope="col">商品名稱</th>
            <th scope="col">購買數量</th>
            <th scope="col">總金額</th>
          </tr>
        </thead>
        <tbody class="text-center">
          <tr v-for="(item, i) in products" :key="item.id">
            <th scope="row">{{ i + 1 }}</th>
            <td>
              <div
                class="productImg img-fluid bg-cover bg-center"
                :style="{
                  backgroundImage: `url(${item.product.imagesUrl[0].imgUrl})`,
                }"
              ></div>
            </td>
            <td>{{ item.product.id }}</td>
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.final_total }}</td>
          </tr>
        </tbody>
      </table>
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
      products: '',
      isLoading: false,
    };
  },
  emits: ['emit-readonly', 'emit-order'],
  props: ['readStatus', 'pushOrder'],
  computed: {
    readonly() {
      const readonly = this.readStatus;
      return readonly;
    },
  },
  methods: {
    getOrder() {
      this.order = JSON.parse(JSON.stringify(this.pushOrder));
      this.products = Object.values(this.order.products);
    },
    cancelEdit() {
      this.isLoading = true;
      this.emitReadonly(true);
      this.getOrder();
    },
    delOrder() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${this.routeId}}`;
      this.$http
        .delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
            this.$router.push('/admin/orders');
          } else {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    update(id) {
      if (this.order.orderStatus === '已出貨') {
        if (this.order.deliveryDate === '' || !this.order.deliveryDate) {
          this.$swal({
            text: '請填入出貨日期!',
            icon: 'warning',
            confirmButtonColor: '#ffbc1f',
          });
          return;
        }
      }
      this.isLoading = true;
      const updateOrder = { data: { ...this.order } };
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/order/${id}`;
      this.$http
        .put(apiUrl, updateOrder)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.emitReadonly(true);
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
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
    emitReadonly(status) {
      this.$emit('emit-readonly', status);
    },
  },
  created() {
    this.getOrder();
  },
};
</script>
