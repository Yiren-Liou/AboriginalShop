<template>
  <div class="main container">
    <OrderProgress :progress="progress"></OrderProgress>
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">購物車</h2>
    <template v-if="Array.isArray(cart.carts) && cart.carts[0]">
      <p>
        總共有<span class="fw-bold mx-1">{{ cart.carts.length }}</span
        >件商品
      </p>
      <table class="table align-middle d-none d-md-table mb-5">
        <thead>
          <tr class="text-center">
            <th></th>
            <th width="200">商品圖片</th>
            <th width="250">商品名稱</th>
            <th>規格</th>
            <th width="160">購買數量</th>
            <th>售價</th>
            <th>小計</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cart.carts"
            :key="item.product_id"
            class="text-center"
          >
            <th scope="row">
              <input
                type="checkbox"
                class="form-check-input"
                :id="item.id"
                @click="getDelId"
              />
            </th>
            <td>
              <img :src="item.product.imagesUrl[0].imgUrl"
                  class="img-fluid" :alt="item.product.title">
            </td>
            <td>{{ item.product.title }}</td>
            <td>{{ item.product.unit }}</td>
            <td>
              <div class="input-group">
                <button
                  class="btn btn-outline-dark btn-sm material-icons"
                  type="button"
                  @click="updateProductNum('minus', item)"
                >
                  remove
                </button>
                <input
                  type="number"
                  class="form-control text-center bg-white"
                  v-model.number="item.qty"
                  min="1"
                  disabled
                />
                <button
                  class="btn btn-outline-dark btn-sm material-icons"
                  type="button"
                  @click="updateProductNum('add', item)"
                >
                  add
                </button>
              </div>
            </td>
            <td>NT {{ $toCurrency(item.product.price) }}</td>
            <td>NT {{ $toCurrency(item.final_total) }}</td>
            <td>
              <button type="button" class="btn" @click="delNotice('one', item)">
                <span class="material-icons">delete_outline</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="d-md-none list-unstyled mb-5">
        <li v-for="item in cart.carts" :key="item.product_id" class="card mb-3">
          <div class="row align-items-center g-0">
            <div class="col-6">
              <div
                :style="{
                  backgroundImage:
                    'url(' + item.product.imagesUrl[0].imgUrl + ')',
                }"
                class="cartImg bg-cover bg-center"
              ></div>
            </div>
            <div class="col-6">
              <div class="card-body px-2">
                <ul class="list-unstyled">
                  <li class="mb-3">
                    <p class="card-text fontSizeS fw-bold">
                      {{ item.product.title }}
                    </p>
                  </li>
                  <li class="d-flex align-items-center mb-3">
                    <span class="card-text fontSizeS mb-2">數量:</span>
                    <div class="input-group mx-auto w-65 w-md-75">
                      <button
                        class="
                          btn btn-sm btn-outline-dark
                          material-icons
                          px-1 px-md-2
                        "
                        @click="updateProductNum('minus', item)"
                        type="button"
                      >
                        remove
                      </button>
                      <input
                        type="number"
                        class="form-control fontSizeS text-center bg-white py-1"
                        v-model.number="item.qty"
                        min="1"
                        disabled
                      />
                      <button
                        class="btn btn-sm btn-outline-dark material-icons p-1"
                        type="button"
                        @click="updateProductNum('add', item)"
                      >
                        add
                      </button>
                    </div>
                  </li>
                  <li class="mb-3">
                    <p class="card-text fontSizeS">
                      小計:
                      <span class="ms-1">NT {{ $toCurrency(item.final_total) }}</span>
                    </p>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="delNotice(item)"
                    >
                      刪除
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="d-flex mb-6 mb-md-7">
        <button
          v-if="delCart.length > 0"
          type="button"
          class="btn btn-outline-secondary d-none d-md-block me-3"
          @click="delNotice('checked')"
        >
          刪除勾選商品
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="delNotice()"
        >
          刪除全部商品
        </button>
      </div>
      <h3 class="fontSizeBase fontSize-md-L mb-3">
        其他人也將這些商品一起帶走囉 ...
      </h3>
      <RecommendSwiper :cart="cart" @update-cart-list="getCart"></RecommendSwiper>
      <div class="row justify-content-end mb-6 mb-md-7">
        <div class="col-md-5">
          <div class="d-flex justify-content-between mb-2">
            <p class="mb-0">折扣前總金額:</p>
            <span>NT {{ $toCurrency(cart.total) }}</span>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <button
              @click="showCoupons"
              type="button"
              class="btn btn-warning btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#showCoupons"
            >
              選擇優惠券
            </button>
            <input
              type="text"
              id="couponCode"
              placeholder="請選擇優惠券"
              v-model.trim="useCoupon"
              class="form-control w-50"
              aria-describedby="couponCode"
              disabled
            />
          </div>
          <template v-if="final_total">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <p class="mb-0">可折扣金額:</p>
              <span
                >NT
                {{ $toCurrency(Math.round(cart.total - final_total)) }}</span
              >
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0">折扣後總金額:</p>
              <span class="fontSizeM fw-bold"
                >NT {{ $toCurrency(Math.round(final_total)) }}</span
              >
            </div>
          </template>
        </div>
      </div>
    </template>
    <template v-else>
      <p class="fontSizeM text-center mb-5">目前購物車是空的呦</p>
    </template>
    <div class="d-flex justify-content-center mb-6">
      <router-link
        to="/products"
        role="button"
        class="btn btn-outline-secondary me-3"
      >
        繼續購物
      </router-link>
      <router-link
        to="/buyerForm"
        role="button"
        class="btn btn-secondary me-3"
        @click="pushTempCarts"
        v-if="Array.isArray(cart.carts) && cart.carts[0]"
      >
        填寫訂購資訊
      </router-link>
    </div>
  </div>
  <div
    class="modal fade show"
    id="showCoupons"
    tabindex="-1"
    aria-labelledby="showCouponsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="showCouponsLabel">
            請選擇要使用的折價券
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table align-middle">
            <thead>
              <tr class="text-center">
                <th scope="col">折價券名稱</th>
                <th scope="col">折扣數</th>
                <th scope="col">可折扣金額</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in coupons" :key="item" class="text-center">
                <td>{{ item.name }}</td>
                <td>{{ item.count }}</td>
                <td>
                  NT
                  {{
                    $toCurrency(
                      Math.round(cart.total - cart.total * item.percent)
                    )
                  }}
                </td>
                <td>
                  <button
                    @click="useCoupons(item.code, item.name)"
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-warning btn-sm"
                  >
                    使用
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
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
import emitter from '@/methods/Emitter';
import OrderProgress from '@/components/front/orderProgress.vue';
import RecommendSwiper from '@/components/front/RecommendSwiper.vue';

export default {
  data() {
    return {
      progress: '確認購物車',
      cart: '',
      products: '',
      recommends: '',
      coupons: [
        {
          name: '新會員優惠',
          count: '9 折',
          percent: 0.9,
          code: 'wellcome90',
        },
      ],
      final_total: '',
      useCoupon: '',
      isOldCustomer: false,
      delCart: [],
      isLoading: false,
    };
  },
  components: {
    RecommendSwiper,
    OrderProgress,
  },
  methods: {
    getCart() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            this.isLoading = false;
          } else {
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
    getDelId(e) {
      if (e.target.checked) {
        this.delCart.push(e.target.id);
      } else {
        const delIndex = this.delCart.map((id) => id).indexOf(e.target.id);
        this.delCart.splice(delIndex, 1);
      }
    },
    updateProductNum(action, product) {
      if (action === 'add') {
        product.qty += 1;
      } else if (action === 'minus' && product.qty === 1) {
        this.$swal({
          text: '購買商品數量最低為 1 個呦',
          icon: 'warning',
          confirmButtonColor: '#ffbc1f',
        });
        return;
      } else if (action === 'minus') {
        product.qty -= 1;
      }
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${product.id}`;
      const cartData = {
        data: {
          product_id: product.product_id,
          qty: product.qty,
        },
      };
      this.$http
        .put(apiUrl, cartData)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
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
    isOld() {
      const oldOrder = JSON.parse(localStorage.getItem('orderList'));
      if (oldOrder && oldOrder.length > 0) {
        this.isOldCustomer = true;
        this.coupons = [
          {
            name: '老朋友優惠',
            count: '8 折',
            percent: 0.8,
            code: 'thank80',
          },
        ];
      }
    },
    useCoupons(code, coupon) {
      this.isLoading = true;
      this.useCoupon = coupon;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/coupon`;
      this.$http
        .post(apiUrl, { data: { code } })
        .then((res) => {
          if (res.data.success) {
            this.final_total = res.data.data.final_total;
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
    delNotice(status, product) {
      let title = '';
      let text = '刪除後無法復原呦';
      let delFunction = '';
      switch (status) {
        case 'one':
          title = `確定不想買${product.product.title}嗎?`;
          delFunction = this.delCarts;
          break;
        case 'checked':
          title = '確定不想買已勾選的商品嗎?';
          delFunction = this.delCheck;
          break;
        default:
          title = '確定要清空購物車嗎?';
          text = '清空後無法復原呦';
          delFunction = this.delCarts;
          break;
      }
      this.$swal
        .fire({
          title,
          text,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#6c757d',
          cancelButtonColor: '#ffbc1f',
          confirmButtonText: '確定',
          cancelButtonText: '取消',
        })
        .then((result) => {
          if (result.isConfirmed && status === 'one') {
            delFunction(product.id);
          } else if (result.isConfirmed) {
            delFunction();
          }
        });
    },
    delCarts(delId) {
      this.isLoading = true;
      let apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/carts`;
      if (delId) {
        apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart/${delId}`;
      }
      this.$http
        .delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.getCart();
            emitter.emit('update-cart');
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
    delCheck() {
      this.delCart.forEach((item) => this.delCarts(item));
      emitter.emit('update-cart');
    },
    pushTempCarts() {
      sessionStorage.setItem('tempCarts', JSON.stringify(this.cart));
    },
  },
  mounted() {
    this.isLoading = true;
    this.getCart();
    this.isOld();
  },
};
</script>
