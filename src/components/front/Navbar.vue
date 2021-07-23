<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <h1>
        <router-link to="/" class="navbar-brand d-center"
              :class="{'text-white': navLight}">
          <span class="material-icons me-1">park</span>Original
        </router-link>
      </h1>
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#topNav"
              aria-controls="topNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="material-icons"
                  :class="{'text-white': navLight}">menu
              </span>
      </button>
      <div class="collapse navbar-collapse zindexTop" id="topNav" ref='topNav'>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/products" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              全部商品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              查詢訂單
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/questions" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              常見問題
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorite"
                        :class="{'text-white': navLight, 'change-bgc': navLight}">
              <span class="material-icons d-none d-lg-block">favorite_border</span>
              <span class="d-lg-none">收藏清單</span>
              <span v-if='favoriteNum'
                    class='favoriteNum numCircle rounded-circle d-none d-lg-block'>
                    {{ favoriteNum }}
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link"
                      :class="{'text-white': navLight, 'change-bgc': navLight}">
              <span class="material-icons d-none d-lg-block">shopping_cart</span>
              <span class="d-lg-none">購物車</span>
              <span v-if='cart.carts'
                    class='numCircle rounded-circle d-none d-lg-block'>
                    {{ cart.carts.length }}
              </span>
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <router-link to='/'
                        class="nav-link"
                       :class="{'text-white': navLight, 'change-bgc': navLight}">
                        關於我們
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <router-link to='/contact'
                        class="nav-link"
                       :class="{'text-white': navLight, 'change-bgc': navLight}">
                        聯絡我們
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <router-link to='/copyright'
                        class="nav-link"
                        :class="{'text-white': navLight, 'change-bgc': navLight}">
                        版權宣告
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');
  .navbar-brand{
    font-family: 'Otomanopee One', sans-serif;
  }
</style>

<script>
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      cart: '',
      favoriteNum: 0,
    };
  },
  props: ['navLight'],
  components: {},
  methods: {
    getCart() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getFavoriteNum() {
      if (localStorage.getItem('favorite')) {
        this.favoriteNum = JSON.parse(localStorage.getItem('favorite'));
        this.favoriteNum = this.favoriteNum.length;
      }
    },
  },
  mounted() {
    this.getCart();
    this.getFavoriteNum();
    emitter.on('update-cart', () => {
      this.getCart();
    });
    emitter.on('update-favorite', () => {
      this.getFavoriteNum();
    });
  },
};
</script>
