<template>
  <div class="main container">
    <h2 class="fontSizeL text-center mb-5">─ 收藏清單 ─</h2>
    <template v-if='!favorite.length'>
      <div class="d-flex flex-column align-items-center">
        <p class='fontSizeM text-center mb-5'>目前沒有收藏任何商品呦<br>快點去逛逛吧</p>
        <router-link to='/products' role="button"
                    class="btn btn-primary me-3">
          繼續購物
        </router-link>
      </div>
    </template>
    <div v-else class="row mb-6">
      <div v-for='(item,i ) in favorite' :key="item.id" class="col-sm-6 col-lg-4">
        <button type="button" class="btn" @click='getProduct(item, i)'>
          <div class="productCard card h-100">
            <img :src="item.imagesUrl[0].imgUrl" class="card-img-top" :alt="item.title">
            <div class="card-body text-center">
              <h2 class="fontSizeM card-title">{{ item.title }}</h2>
              <p class="card-text">
                NT {{ $toCurrency(item.price) }}
                <span class="fontSizeS text-decoration-line-through me-1">
                  NT {{ $toCurrency(item.origin_price) }}
                </span>
              </p>
            </div>
            <div class="card-footer bg-transparent p-0">
              <div class="d-flex">
                <button type="button"
                        class="favoriteBtn btn px-0 w-50"
                        @click.stop="removeFavorite(item)">
                  <p class="d-center border-end mb-0 w-100">
                    <span class="material-icons me-2 text-primary">favorite</span>
                    移除收藏
                  </p>
                </button>
                <button type="button"
                        class="addCartBtn btn d-center w-50"
                        @click.stop="addToCart(item.id)">
                  <p class="d-center mb-0 w-100">
                  <span class="material-icons me-2">add_shopping_cart</span>
                    加入購物車
                  </p>
                </button>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      favorite: '',
      isLoading: false,
    };
  },
  methods: {
    getFavorite() {
      this.favorite = JSON.parse(localStorage.getItem('favorite'));
      this.isLoading = false;
      console.log(this.favorite);
    },
    getProduct(item, i) {
      this.$emit('emit-products', this.products, i);
      this.$router.push(`/product/${item.id}`);
    },
    addToCart(productId) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        data: {
          product_id: productId,
          qty: 1,
        },
      };
      this.$http.post(apiUrl, cartData)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            emitter.emit('update-cart');
            this.$swal({ text: res.data.message, icon: 'success' });
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    removeFavorite(item) {
      this.isLoading = true;
      const temp = this.favorite.map((favorite) => favorite.id).indexOf(item.id);
      this.favorite.splice(temp, 1);
      this.favorite = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', this.favorite);
      emitter.emit('update-favorite');
      this.getFavorite();
      this.$swal({ text: '成功移除收藏', icon: 'success' });
    },
  },
  created() {
    this.isLoading = true;
    this.getFavorite();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
