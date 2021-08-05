<template>
  <div class="container mt-7">
    <nav
      style="--bs-breadcrumb-divider: '>'"
      aria-label="breadcrumb"
      class="mb-4"
    >
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products">全部商品</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{ path: '/products', query: { category: product.category}}">
            {{ product.category }}
          </router-link>
        </li>
        <li class="breadcrumb-item">{{ product.title }}</li>
      </ol>
    </nav>
    <template v-if="product && products">
      <div
        class="row justify-content-between align-items-center border-bottom pb-4 mb-4"
        data-aos="fade-up"
      >
        <div class="col-md-6">
          <img
            v-if="product.imagesUrl[0].imgUrl"
            :src="product.imagesUrl[0].imgUrl"
            class="img-fluid rounded mb-3"
            :alt="product.title"
            id="mainImage"
          />
          <div class="row">
            <div class="col-3">
              <img class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[0].imgUrl">
            </div>
            <div class="col-3">
              <img class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[1].imgUrl">
            </div>
            <div class="col-3">
              <img class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[2].imgUrl">
            </div>
            <div class="col-3">
              <img class="thumbnail bg-cover bg-center mb-3"
                @click="changeImg"
                :src="product.imagesUrl[3].imgUrl">
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="ps-md-5">
            <div v-if="product.is_season || product.is_sell" class="d-flex mb-3">
              <span v-if="product.is_season"
                    class="border border-primary text-primary px-2 me-2">季節限定</span>
              <span v-if="product.is_sell"
                    class="border border-primary text-primary px-2">限時特惠</span>
            </div>
            <h2 class="fontSize-md-XL fw-bold mb-3">{{ product.title }}</h2>
            <p v-html="product.description" class="fontSize-md-S w-75"></p>
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
            <p class="fontSize-md-XL fw-bold text-primary">
              NT {{ product.is_sell? product.price : product.origin_price }}
              <span v-if="product.is_sell"
                  class="fontSizeBase text-decoration-line-through text-dark ms-1">
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
                class="favoriteBtn d-center btn btn-outline-secondary w-50 py-2 ms-1"
                @click.stop="addToFavorite(item)"
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
      <div class="fontSize-md-S mb-4 mb-md-7" data-aos="fade-up">
        <p v-html="product.main_content" class="mb-3"></p>
        <div class="largeImg bg-cover bg-center py-7 mb-3"
           :style="{ backgroundImage: 'url(' + product.imagesUrl[4].imgUrl + ')' }">
        </div>
        <p v-html="product.sub_content" class="mb-3"></p>
        <div class="largeImg bg-cover bg-center py-7 mb-3"
           :style="{ backgroundImage: 'url(' + product.imagesUrl[5].imgUrl + ')' }">
        </div>
        <p v-if="product.explanation" v-html="product.explanation"></p>
        <div class="largeImg bg-cover bg-center py-7 mb-3"
          :style="{ backgroundImage: 'url(' + product.imagesUrl[6].imgUrl + ')' }">
        </div>
      </div>
      <div class="row mb-4 mb-md-7">
        <div class="col-md-4 mb-4">
          <h4 class="fontSize-md-S d-flex align-items-center mb-3">
            <span class="material-icons me-2">description</span>
            商品規格
          </h4>
          <p v-html="product.spec" class="fontSize-md-S"></p>
        </div>
        <div class="col-md-4 mb-4">
          <h4 class="fontSize-md-S d-flex align-items-center mb-3">
            <span class="material-icons me-2">paid</span>
            付款方式
          </h4>
          <ul class="list-unstyled fontSize-md-S">
            <li class="d-flex align-items-center mb-3">
              信用卡 :
              <span class="ms-2">
                VISA、Master、JCB
              </span>
            </li>
            <li class="d-flex align-items-center">
              超商付款
              <span class="ms-2">
                7-11、全家、萊爾富、OK 超商
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-4">
          <h4 class="fontSize-md-S d-flex align-items-center mb-3">
            <span class="material-icons me-2">local_shipping</span>
            配送方式
          </h4>
          <p class="fontSize-md-S">
            {{ product.category === '新鮮蔬果'?
            '冷藏: 出貨後 1 - 2 天內會送達指定地點' :
            '常溫: 出貨後 2 - 3 天內會送達指定地點' }}
          </p>
        </div>
        <div class="col-md-12">
          <h4 class="fontSize-md-S d-flex align-items-center mb-3">
            <span class="material-icons me-2">warning</span>
            注意事項
          </h4>
          <p v-html="product.precautions" class="fontSize-md-S"></p>
        </div>
      </div>
      <h3 class="fontSize-md-L text-center mb-3">
        推薦商品
      </h3>
      <Swiper
        :slidesPerView="windowSize"
        :spaceBetween="30"
        :freeMode="true"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        class="mySwiper mb-4 mb-md-7 pb-6"
      >
        <Swiper-slide v-for="item in recommends" :key="item.id">
          <router-link :to="`/product/${item.id}`" class="productCard px-3">
            <div class="card-img-top mb-2">
              <img
                :src="item.imagesUrl[0].imgUrl"
                :alt="item.title"
                class="img-fluid"
              />
            </div>
            <div class="card-body px-0">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="fontSizeM">{{ item.title }}</h2>
                <p class="fontSize-md-S fw-bold mb-0"
                  :class="{'text-primary': item.is_sell}">
                  NT {{ item.is_sell? item.price : item.origin_price }}
                  <span v-if="item.is_sell"
                      class="fontSizeBase text-decoration-line-through text-dark ms-1">
                    NT {{ item.origin_price }}
                  </span>
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <button
                  type="button"
                  class="favoriteBtn d-center btn btn-outline-secondary me-3"
                  @click.stop="addToFavorite(item)"
                >
                  <span class="material-icons">favorite_border</span>
                </button>
                <button
                    type="button"
                    class="addCartBtn btn btn-secondary d-center w-100"
                    @click.stop="addToCart(item.id)"
                  >
                    <p class="d-center mb-0 w-100">
                      <span class="material-icons me-2">add_shopping_cart</span>
                      加入購物車
                    </p>
                  </button>
              </div>
            </div>
          </router-link>
        </Swiper-slide>
      </Swiper>
    </template>
  </div>
  <div class="position-relative d-none d-md-block">
    <GoTop></GoTop>
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
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import GoTop from '@/components/GoTop.vue';

SwiperCore.use([Pagination, Autoplay]);

export default {
  data() {
    return {
      routeId: '',
      product: '',
      qty: 1,
      products: '',
      isLoading: false,
    };
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  components: {
    Swiper,
    SwiperSlide,
    GoTop,
  },
  computed: {
    windowSize() {
      if (window.screen.width <= 576) {
        return 1;
      }
      return 3;
    },
    recommends() {
      return this.products.filter((item) => item.id !== this.product.id);
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
              this.product.spec = this.product.spec.replace(
                /\n/g,
                '<br/>',
              );
            }
            this.product.price = this.$toCurrency(this.product.price);
            this.product.origin_price = this.$toCurrency(this.product.origin_price);
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
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
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
  },
  created() {
    this.isLoading = true;
    this.routeId = this.$route.params.id;
    this.getProduct();
    this.getProducts();
  },
};
</script>

<style scoped lang="scss">
  .thumbnail{
    height: 56px;
    max-width: 100%;
    object-fit: cover;
    &:hover{
      cursor: pointer;
    }
    @media (min-width: 992px){
      height: 96px;
    }
  }
</style>
