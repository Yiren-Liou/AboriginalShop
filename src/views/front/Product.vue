<template>
  <ul class="subNav list-unstyled mb-4"
      :class="{ 'shadow-sm': scroll }">
    <li>
      <router-link
        class="subNavBtn btn d-center"
        data-category="全部商品"
        :to="{ path: '/products', query: { category: '全部商品', page: 1 } }"
      >
        <img src="@/assets/images/全部商品.png" class="iconImg me-2" />
        全部商品
      </router-link>
    </li>
    <li>
      <router-link
        class="subNavBtn btn d-center"
        data-category="季節限定"
        :to="{ path: '/products', query: { category: '季節限定', page: 1 } }"
      >
        <img src="@/assets/images/季節限定.png" class="iconImg me-2" />
        {{ windowSmallWidth? '季節' : '季節限定' }}
      </router-link>
    </li>
    <li v-for="item in categoryList" :key="item">
      <router-link
        :to="{ path: '/products', query: { category: item, page: 1 } }"
        class="subNavBtn btn d-center"
        :class="{'active': $route.query.category === item}"
      >
        <img
          :src="require(`@/assets/images/${item}.png`)"
          :alt="item"
          class="iconImg me-2"
        />
        {{ windowSmallWidth ? item.substr(-2) : item }}
      </router-link>
    </li>
  </ul>
  <div class="container mt-7">
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
      class="mb-3"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products">全部商品</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="{ path: '/products', query: { category: product.category } }"
          >
            {{ product.category }}
          </router-link>
        </li>
        <li class="breadcrumb-item">{{ product.title }}</li>
      </ol>
    </nav>
    <template v-if="product && products">
      <div class="row align-items-center mb-4 mb-md-6" data-aos="fade-up">
        <div class="col-md-7">
          <img
            v-if="product.imagesUrl[0].imgUrl"
            :src="product.imagesUrl[0].imgUrl"
            class="img-fluid rounded mb-3"
            :alt="product.title"
            id="mainImage"
          />
          <div class="row">
            <div class="col-3">
              <img
                class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[0].imgUrl"
              />
            </div>
            <div class="col-3">
              <img
                class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[1].imgUrl"
              />
            </div>
            <div class="col-3">
              <img
                class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[2].imgUrl"
              />
            </div>
            <div class="col-3">
              <img
                class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[3].imgUrl"
              />
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="ps-md-5">
            <div
              v-if="product.is_season || product.is_sell"
              class="d-flex mb-3"
            >
              <span
                v-if="product.is_season"
                class="border border-primary text-primary px-2 me-2"
                >季節限定</span
              >
              <span
                v-if="product.is_sell"
                class="border border-primary text-primary px-2"
                >限時特惠</span
              >
            </div>
            <h2 class="fontSize-md-XL fw-bold mb-3">{{ product.title }}</h2>
            <p v-html="product.description" class="fontSize-md-S"></p>
            <ul class="list-unstyled fontSize-md-S">
              <li class="d-flex align-items-center">
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627983311154.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gHanTyjYhPDamkMB61wYL8IUlYfk4XNrAHYq08r9dadQihLmbQehqgqteEz7UijDeta%2BsyRI9c4MOFuTJYQYlIzPHuHNCNAZlc%2BSlRYQ%2FkcWPaoO42PKkTDMvuu4SxC48npdVrpiK9BigbL2uSwvQEsDmZC03E9QgslnuCVjDA0%2FvGEAiNJ%2FfmD%2F90%2Bzee0zCeviICytducbpWAhKyv8syIlcqeELJMmwkM7nTQcIFO%2FbgLnC8h1ZaX%2BW4p5C2PKuYx5szLCwvzJ0x2V3g3SqWqTJFO11mJPKafQ6DVGW1MJa2rAKHXFlmGQzOprVMbBOgz57T9bEsHQBsBsYXnajQ%3D%3D"
                  alt="全店不限金額免運費"
                  class="iconImg me-3"
                />
                <p class="mb-0">全店不限金額免運費</p>
              </li>
              <li class="d-flex align-items-center">
                <img
                  src="https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627983365606.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SoDjA3kNN8enwN0TdpYoKr7v4ZGvBVA50HL20wosIzfZMUR6WwVyCoXxKrnMAkQR%2BR2xdnUcYvbxb56LbWuYFGwZR1JQ4Uh6CEmNnf%2BuhfG6U66QDEBWAarkDA4xZqD1Bwj1K7%2Fdqa%2BirlrKefqQ%2BuqP4u%2Bd3yBbnsyFFJwk%2BcU7OFNgnRFGViJpoFRBP%2FNz3SVGqwRGjvjsvgD5r2outXCjq6KJQMKKXWXUUevFmxLO4mUmIwHV3BjlzoraS02txMm71ogtRF71l3P%2Bh86ekh2KRpzLSNVo427SruGzNr9ahW4O%2Fnl9%2B4JfPk1bYr9coRg1qF20bLEfk1zygXenxw%3D%3D"
                  alt="使用優惠券省更多"
                  class="iconImg me-3"
                />
                <p class="mb-0">使用優惠券省更多</p>
              </li>
            </ul>
            <div  v-if="product.title === '編織素色圓形包' || product.title === '編織圖騰圓形包'"
                  class="d-flex mb-3">
              <router-link class="btn btn-outline-secondary btn-sm me-2"
                    to="/product/-MfODcoAtcxlijlJ_XQl?category=手工編織&title=編織圖騰圓形包">
                    圖騰款
              </router-link>
              <router-link class="btn btn-outline-secondary btn-sm"
                    to="/product/-MfNxHtJWtTv0WA2tsGY?category=手工編織&title=編織素色圓形包">
                    素色款
              </router-link>
            </div>
            <p class="fontSize-md-XL fw-bold text-primary">
              NT {{ product.is_sell ? product.price : product.origin_price }}
              <span
                v-if="product.is_sell"
                class="fontSizeBase text-decoration-line-through text-dark ms-1"
              >
                NT {{ product.origin_price }}
              </span>
            </p>
            <div class="input-group w-50 mb-3">
              <button
                class="btn btn-outline-dark material-icons"
                type="button"
                @click="updateProductNum('minus')"
              >
                remove
              </button>
              <input
                type="number"
                class="form-control text-center bg-white"
                v-model.number="qty"
                min="1"
                disabled
              />
              <button
                class="btn btn-outline-dark material-icons"
                type="button"
                @click="updateProductNum('add')"
              >
                add
              </button>
            </div>
            <div class="d-flex mb-4">
              <button
                class="btn btn-secondary d-center w-50 py-2 me-1"
                type="button"
                @click="addToCart(product.id, qty)"
              >
                <span class="material-icons">add_shopping_cart</span>
                加入購物車
              </button>
              <button
                type="button"
                class="
                  favoriteBtn
                  d-center
                  btn btn-outline-secondary
                  w-50
                  py-2
                  ms-1
                "
                @click="addToFavorite(product)"
              >
                <span class="material-icons">favorite_border</span>
                加入收藏
              </button>
            </div>
            <div class="d-flex">
              <span class="me-3">分享至:</span>
              <ul class="list-unstyled d-flex">
                <li class="me-3">
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li class="me-3">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li class="me-3">
                  <a href="hhttps://twitter.com/?lang=zh-tw" target="_blank">
                    <i class="bi bi-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ProductInfo :product='product'></ProductInfo>
      <h3 class="fontSize-md-L mb-3">買了此商品的人也買了...</h3>
      <ProductSwiper :products='recommends'></ProductSwiper>
    </template>
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
import ProductInfo from '@/components/front/ProductInfo.vue';
import ProductSwiper from '@/components/front/ProductSwiper.vue';

export default {
  data() {
    return {
      routeId: '',
      product: '',
      qty: 1,
      products: '',
      favorite: '',
      categoryList: '',
      scroll: '',
      isLoading: false,
    };
  },
  components: {
    ProductInfo,
    ProductSwiper,
  },
  computed: {
    windowSmallWidth() {
      if (window.screen.width < 576) {
        return true;
      }
      return false;
    },
    recommends() {
      const total = this.products.filter((item) => item.id !== this.product.id);
      return total;
    },
  },
  watch: {
    $route() {
      if (this.$route.name === 'product') {
        this.isLoading = true;
        this.routeId = this.$route.params.id;
        this.qty = 1;
        this.getProduct();
        window.scrollTo(0, 0);
      }
    },
  },
  methods: {
    getProduct() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.routeId}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.product.precautions = this.product.precautions.replace(
              /\n/g,
              '<br/>',
            );
            this.product.main_content = this.product.main_content.replace(
              /\n/g,
              '<br/>',
            );
            this.product.sub_content = this.product.sub_content.replace(
              /\n/g,
              '<br/>',
            );
            if (this.product.spec) {
              this.product.spec = this.product.spec.replace(/\n/g, '<br/>');
            }
            this.product.price = this.$toCurrency(this.product.price);
            this.product.origin_price = this.$toCurrency(
              this.product.origin_price,
            );
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
    getProducts() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.getCategoryList();
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
    updateProductNum(action) {
      if (action === 'add') {
        this.qty += 1;
      } else if (action === 'minus' && this.qty === 1) {
        this.$swal({
          text: '購買商品數量最低為 1 個呦',
          icon: 'warning',
          confirmButtonColor: '#ffbc1f',
        });
      } else if (action === 'minus') {
        this.qty -= 1;
      }
    },
    addToFavorite(product) {
      const hasFavorite = localStorage.getItem('favorite');
      if (hasFavorite) {
        this.favorite = JSON.parse(hasFavorite);
        const isSave = this.favorite
          .map((favorite) => favorite.id)
          .indexOf(product.id);
        if (isSave < 0) {
          this.favorite.push(product);
          this.$swal({
            text: '成功收藏',
            icon: 'success',
            confirmButtonColor: '#ffbc1f',
          });
        } else {
          this.$swal({
            text: '已經收藏過囉',
            icon: 'warning',
            confirmButtonColor: '#ffbc1f',
          });
        }
      } else {
        this.favorite.push(product);
        this.$swal({
          text: '成功收藏',
          icon: 'success',
          confirmButtonColor: '#ffbc1f',
        });
      }
      this.favorite = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', this.favorite);
      emitter.emit('update-favorite');
    },
    addToCart(productId, qty) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        data: {
          product_id: productId,
          qty,
        },
      };
      this.$http
        .post(apiUrl, cartData)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            emitter.emit('update-cart');
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
            this.qty = 1;
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
    changeImg(e) {
      const clickImg = e.target.getAttribute('src');
      const mainImage = document.getElementById('mainImage');
      mainImage.setAttribute('src', clickImg);
    },
    getCategoryList() {
      const temp = new Set();
      this.products.forEach((item) => (temp.has(item.category) ? '' : temp.add(item.category)));
      this.categoryList = [...temp];
    },
  },
  created() {
    if (this.$route.name === 'product') {
      this.isLoading = true;
      this.routeId = this.$route.params.id;
      this.getProduct();
      this.getProducts();
    }
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
};
</script>
