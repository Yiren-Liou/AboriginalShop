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
      <div class="collapse navbar-collapse" id="topNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              全部商品
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link"
              :class="{'text-white': navLight, 'change-bgc': navLight}" href="#">關於我們</a>
          </li>
          <li class="nav-item">
            <router-link to="/order" class="nav-link"
                :class="{'text-white': navLight, 'change-bgc': navLight}">
              查詢訂單
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              :class="{'text-white': navLight, 'change-bgc': navLight}" href="#">
              <span class="material-icons d-none d-lg-block">favorite_border</span>
              <span class="d-lg-none">我的最愛</span>
              <span v-if='favoriteNum'
                    class='favoriteNum numCircle rounded-circle d-none d-lg-block'>
                    {{ favoriteNum }}
              </span>
            </a>
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
            <a class="nav-link"
              :class="{'text-white': navLight, 'change-bgc': navLight}" href="#">聯絡我們</a>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link"
              :class="{'text-white': navLight, 'change-bgc': navLight}" href="#">版權申明</a>
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
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      cart: '',
      favoriteNum: '',
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
      this.favoriteNum = JSON.parse(localStorage.getItem('favorite'));
      this.favoriteNum = this.favoriteNum.length;
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
    const nav = document.querySelector('#topNav');
    if (nav.className.indexOf('show') !== -1) {
      console.log('y');
    } else {
      console.log('n');
    }
  },
};
</script>
