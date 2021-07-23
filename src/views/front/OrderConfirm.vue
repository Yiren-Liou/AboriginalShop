<template>
  <div class="container mb-6">
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-primary p-2 mb-3"></div>
            <span class="text-center">確認購物車</span>
          </div>
          <div class="progressLine border-primary"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-primary p-2 mb-3"></div>
            <span class="text-center">填寫訂購資訊</span>
          </div>
          <div class="progressLine border-primary"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-primary p-2 mb-3"></div>
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
    <p class="text-center text-danger mb-5">
      請確認購買商品和買家資訊，確認無誤後點選頁面下方確認結帳按鈕，訂單才會成功送出呦
    </p>
    <h2 class='fontSizeM mb-4'>購買的商品</h2>
    <div class="px-4 mb-5 d-none d-md-block">
      <table class="table align-middle">
        <thead>
          <tr class="text-center">
            <th scope="col"></th>
            <th scope="col" width="200">商品圖片</th>
            <th scope="col">商品名稱</th>
            <th scope="col">規格</th>
            <th scope="col">購買數量</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in cart.carts" :key='item.product_id' class="text-center">
            <th scope="row">{{ i + 1 }}</th>
            <td>
              <div :style="{ backgroundImage: 'url(' + item.product.imagesUrl[0].imgUrl + ')' }"
                  class="cartImg bg-cover bg-center">
              </div>
            </td>
            <td>
              {{ item.product.title }}
            </td>
            <td>
              {{ item.product.unit }}
            </td>
            <td>
              {{ item.qty }}
            </td>
            <td>
              NT {{ $toCurrency(item.final_total) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-end">
        <p>
          總金額
          <span class='ms-2'>NT {{ $toCurrency(finalTotal) }}</span>
        </p>
      </div>
    </div>
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
                      商品總價:
                      <span class='ms-1'>NT {{ $toCurrency(item.final_total) }}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
    </ul>
    <h2 class='fontSizeM mb-4'>訂購人資訊</h2>
    <div class="px-4 mb-4">
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerName" class="form-label">訂購人姓名</label>
            <input type="text" class="form-control" id="buyerName" :value='pushOrder.user.name'
                   aria-describedby="buyerName" disabled>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerTell" class="form-label">訂購人手機</label>
            <input type="text" class="form-control" id="buyerTell" :value='pushOrder.user.tel'
                   aria-describedby="buyerTell" disabled>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="buyerEmail" class="form-label">訂購人信箱</label>
            <input type="email" class="form-control" id="buyerEmail" :value='pushOrder.user.email'
                   aria-describedby="buyerEmail" disabled>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="payment" class="form-label">付款方式</label>
            <input type="text" class="form-control" id="payment"
                   :value='pushOrder.user.paymentMethod'
                   aria-describedby="payment" disabled>
          </div>
        </div>
        <div v-if='pushOrder.payment_method ==="信用卡"' class="col-md-4">
          <div class="mb-3">
            <label for="address" class="form-label">收件地址</label>
            <input type="text" class="form-control" id="address" :value='pushOrder.user.address'
                  aria-describedby="address" disabled>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="message" class="form-label">備註</label>
            <input type="text" class="form-control" id="message" :value='pushOrder.message'
                   aria-describedby="message" disabled>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type='button' class="btn btn-outline-secondary me-3" @click="emitOrder">重新填寫</button>
      <!-- <router-link to='/buyerForm' class='btn btn-outline-primary me-3'>重新填寫</router-link> -->
      <button type='button' class="btn btn-secondary me-3" @click='sendOrder'>確認結帳</button>
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
      finalTotal: '',
      isLoading: false,
    };
  },
  props: ['pushOrder'],
  methods: {
    getCart() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            this.finalTotal = this.$toCurrency(this.cart.final_total);
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
    sendOrder() {
      console.log(this.pushOrder);
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(apiUrl, { data: this.pushOrder })
        .then((res) => {
          if (res.data.success) {
            console.log(res);
            this.$router.push('/orderCompleted');
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    emitOrder() {
      this.$router.push('/buyerForm');
    },
  },
  created() {
    this.isLoading = true;
    this.getCart();
    setTimeout(() => {
      this.isLoading = false;
      this.$swal({ text: '請確認「購買商品」和「買家資訊」後，點選頁面下方「確認結帳按鈕」，訂單才會成功送出呦', icon: 'warning' });
    }, 2000);
  },
};
</script>
