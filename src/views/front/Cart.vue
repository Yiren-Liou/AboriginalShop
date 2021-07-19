<template>
  <div class="container mt-4">
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-dark p-1 p-md-2 mb-3"></div>
            <span class="text-center">確認購物車</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"></div>
            <span class="text-center">訂購資訊</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"></div>
            <span class="text-center">確認結帳</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"></div>
            <span class="text-center">訂購成功</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="fw-bold fontSize-lg-L text-center mb-5">購物車</h2>
    <template v-if='Array.isArray(cart.carts) && cart.carts[0]'>
      <p>總共有件<span class="fw-bold mx-1">{{ cart.carts.length }}</span>商品</p>
      <table class="table align-middle d-none d-md-table mb-5">
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
          <tr v-for="(item, i) in cart.carts" :key='item.product_id' class="text-center">
            <th scope="row">
              <!-- <input type="checkbox" class="form-check-input" :id="item.id"> -->
              {{ i + 1 }}
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
      <ul class='d-md-none list-unstyled mb-5'>
        <li v-for="item in cart.carts" :key='item.product_id' class='card mb-3'>
          <div class="row align-items-center g-0">
            <div class="col-5">
              <div :style="{ backgroundImage: 'url(' + item.product.imagesUrl[0].imgUrl + ')' }"
                    class="cartImg bg-cover bg-center">
              </div>
            </div>
            <div class="col-7">
              <div class="card-body">
                <ul class='list-unstyled'>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS">
                      商品名稱:
                      <span class='ms-1'>#{{ item.product.title }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS">
                      商品規格:
                      <span class='ms-1'>{{ item.product.unit }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS">
                      商品售價:
                      <span class='ms-1'>NT {{ $toCurrency(item.product.price) }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS">
                      商品數量:
                      <span class='ms-1'>{{ item.qty }}</span>
                    </p>
                  </li>
                  <li class='mb-2'>
                    <p class="card-text fontSizeS">
                      商品售價:
                      <span class='ms-1'>NT {{ $toCurrency(item.final_total) }}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="d-flex mb-5">
        <!-- <button type="button" class="btn btn-outline-secondary me-3">刪除勾選商品</button> -->
        <button type="button" class="btn btn-outline-secondary">刪除全部商品</button>
      </div>
      <div class="row justify-content-end mb-5">
        <div class="col-md-4">
          <div class="d-flex justify-content-between mb-2">
            <p class="mb-0">折扣前總金額:</p>
            <span>NT {{ $toCurrency(cart.total) }}</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <input type="text" id="couponCode" placeholder="請輸入折扣碼"
                  @blur = 'useCoupons'
                  class="form-control w-50" aria-describedby="couponCode">
            <button v-if='!final_total' @click = 'useCoupons'
                    type='button' class="btn btn-warning btn-sm">
              套用
            </button>
            <span v-if='final_total'>NT {{ $toCurrency(cart.total - final_total) }}</span>
          </div>
          <div v-if='final_total' class="d-flex justify-content-between">
            <p>折扣後總金額:</p>
            <span class="fontSizeM fw-bold">NT {{ $toCurrency(final_total) }}</span>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <p class="fontSizeM text-center mb-5">目前購物車是空的呦</p>
    </template>
    <div class="d-flex justify-content-center mb-4">
      <router-link to='/products' role="button"
                   class="btn btn-outline-secondary me-3">
        繼續購物
      </router-link>
      <router-link to='/buyerForm' role="button"
                   class="btn btn-outline-secondary me-3"
                   v-if='Array.isArray(cart.carts) && cart.carts[0]'>
        填寫訂購資訊
      </router-link>
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
      final_total: '',
      isLoading: false,
    };
  },
  methods: {
    getCart() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            console.log(this.cart);
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    useCoupons() {
      this.isLoading = true;
      const code = document.querySelector('#couponCode').value;
      console.log(code);
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http.post(apiUrl, { data: { code } })
        .then((res) => {
          if (res.data.success) {
            this.final_total = res.data.data.final_total;
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
  mounted() {
    this.getCart();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
