<template>
  <div class="container mt-4">
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-dark p-2 mb-3"></div>
            <span class="text-center">確認購物車</span>
          </div>
          <div class="progressLine border-dark"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">填寫訂購資訊</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">確認結帳</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">訂購成功</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="fw-bold fontSize-lg-L text-center">購物車</h2>
    <p v-if='cart.carts'>總共有件<span class="fw-bold mx-1">{{ cart.carts.length }}</span>商品</p>
    <p v-else>目前購物車是空的呦</p>
    <table class="table align-middle">
      <thead>
        <tr class="text-center">
          <th scope="col"></th>
          <th scope="col" width="200">商品圖片</th>
          <th scope="col">商品名稱 / 編號</th>
          <th scope="col">規格</th>
          <th scope="col">購買數量</th>
          <th scope="col">售價</th>
          <th scope="col">小計</th>
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key='item.product_id' class="text-center">
          <th scope="row">
            <input type="checkbox" class="form-check-input" :id="item.id">
          </th>
          <td>
            <div :style="{ backgroundImage: 'url(' + item.product.imagesUrl[0].imgUrl + ')' }"
                class="cartImg bg-cover bg-center">
            </div>
          </td>
          <td>
            {{ item.product.title }}/{{item.product_id}}
          </td>
          <td>
            {{ item.product.unit }}
          </td>
          <td>
            {{ item.qty }}
          </td>
          <td>
            NT {{ $toCurrency(item.product.price) }}
          </td>
          <td>
            NT {{ $toCurrency(item.final_total) }}
          </td>
          <td>
            <button type="button" class="btn" @click='delNotice(item)'>
              <span class="material-icons">delete_outline</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex mb-3">
      <button type="button" class="btn btn-outline-secondary me-3">刪除勾選商品</button>
      <button type="button" class="btn btn-outline-secondary">刪除全部商品</button>
    </div>
    <div class="row justify-content-end mb-5">
      <div class="col-md-4">
        <div class="d-flex justify-content-between mb-2">
          <p class="mb-0">折扣前總金額:</p>
          <!-- <span>NT.{{ $toCurrency(cart.total) }}</span> -->
        </div>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <select class="form-select form-select-sm w-50">
            <option selected>請選擇優惠券</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <!-- <span>NT.{{ $toCurrency(cart.total) }}</span> -->
        </div>
        <div class="d-flex justify-content-between">
          <p>折扣後總金額:</p>
          <!-- <span class="fontSizeM fw-bold">NT.{{ $toCurrency(cart.final_total) }}</span> -->
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center mb-4">
      <button type="button" class="btn btn-outline-secondary me-3">我想繼續購物</button>
      <button type="button" class="btn btn-outline-secondary">我要去結帳</button>
    </div>
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
      cart: '',
      coupons: '',
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            console.log(this.cart);
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getCoupons(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.coupons = res.data.coupons;
            console.log(this.coupons);
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    delNotice(product) {
      this.$swal.fire({
        title: `確定不想買${product.product.title}嗎?`,
        text: '刪除後無法復原呦',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.delOneCart(product);
          // this.$swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success',
          // );
        }
      });
    },
    delOneCart(product) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${product.id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'success' });
            this.getCart();
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
    this.getCart();
  },
};
</script>
