<template>
  <div class="container">
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class='mb-4'>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to='/products'>全部商品</router-link>
        </li>
        <li class="breadcrumb-item">{{ product.category }}
        </li>
        <li class="breadcrumb-item">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-between align-items-center mb-5">
      <div class="col-md-7">
        <img v-if='product.imagesUrl[0].imgUrl' :src="product.imagesUrl[0].imgUrl"
            class='img-fluid rounded' :alt="product.title">
      </div>
      <div class="col-md-4">
        <span class="badge text-dark ps-0">{{ product.category }}</span>
        <h2 class='fontSizeL'>{{ product.title }}</h2>
        <p v-html="product.description"></p>
        <span class="badge bg-secondary">適用優惠券</span>
        <p class='fontSizeM fw-bold'>
          NT {{ product.price }}
          <span class="fontSizeS text-decoration-line-through ms-1">
            NT {{ product.origin_price }}
          </span>
        </p>
        <div class="d-flex">
          <div class="input-group me-3 w-50">
            <button class="btn btn-outline-dark material-icons" type="button"
                    @click="updateProductNum('minus')">remove
            </button>
            <input type="number" class="form-control text-center bg-white"
                   v-model.number="qty" min=1 disabled>
            <button class="btn btn-outline-dark material-icons" type="button"
                    @click="updateProductNum('add')">add
            </button>
          </div>
          <button class="btn btn-primary d-center" type="button"
                  @click="addToCart(product.id, qty)">
            <span class="material-icons">add_shopping_cart</span>
            加入購物車
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-between align-items-center mb-5">
      <div class="col-md-5 order-1 order-md-0">
        <p v-html="product.main_content"></p>
      </div>
      <div class="col-md-6 mb-3 mb-md-0">
        <div class="row">
          <div class="col">
            <img :src="product.imagesUrl[1].imgUrl"
                  class='img-fluid rounded' alt="新鮮現採">
          </div>
          <div class="col">
            <img :src="product.imagesUrl[2].imgUrl"
                  class='img-fluid rounded' alt="無毒栽種">
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between align-items-center mb-5">
    <div class="col-md-6 mb-3 mb-md-0">
      <img :src="product.imagesUrl[3].imgUrl"
           class='img-fluid rounded mb-4' alt="新鮮現採">
      <div class="row">
        <div class="col">
          <img :src="product.imagesUrl[4].imgUrl"
              class='img-fluid rounded' alt="新鮮現採">
        </div>
        <div class="col">
          <img :src="product.imagesUrl[5].imgUrl"
              class='img-fluid rounded' alt="新鮮現採">
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <p v-html="product.sub_content"></p>
    </div>
    </div>
    <h4 class='fontSizeS'>注意事項</h4>
    <p v-html="product.precautions" class='fontSizeS mb-5'></p>
    <h3 class='fontSizeM text-center'>推薦商品</h3>
    <swiper :slidesPerView="windowSize"
            :spaceBetween="30"
            :freeMode="true"
            :autoplay='{
              "delay": 2500,
              "disableOnInteraction": false
            }'
            :pagination='{
              "clickable": true
            }'
            class="mySwiper mb-5">
      <template v-for="(item, i) in recommend" :key='item.id'>
        <swiper-slide>
          <button type="button" class="btn" @click='changeProduct(item, i)'>
            <div class="card h-100">
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
            </div>
          </button>
        </swiper-slide>
      </template>
    </swiper>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import emitter from '@/methods/Emitter';
import SwiperCore, {
  Pagination, Autoplay,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

SwiperCore.use([Pagination, Autoplay]);

export default {
  data() {
    return {
      routeId: '',
      product: '',
      qty: 1,
      recommend: [],
      isLoading: false,
    };
  },
  props: ['pushOrder', 'pushProducts', 'productIndex'],
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    windowSize() {
      if (window.screen.width <= 576) {
        return 1;
      }
      return 3;
    },
  },
  methods: {
    getProduct() {
      this.routeId = this.$route.params.id;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.routeId}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.product.description = this.product.description.replace(/\n/g, '<br/>');
            this.product.precautions = this.product.precautions.replace(/\n/g, '<br/>');
            this.product.main_content = this.product.main_content.replace(/\n/g, '<br/>');
            this.product.sub_content = this.product.sub_content.replace(/\n/g, '<br/>');
            this.product.price = this.$toCurrency(this.product.price);
            this.product.origin_price = this.$toCurrency(this.product.origin_price);
            this.getRecommend();
            console.log(this.product);
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getRecommend() {
      console.log(this.productIndex);
      const maxSize = this.pushProducts.length < 7 ? this.pushProducts.length : 6;
      const arrSet = new Set([]);
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        let num = Math.floor(Math.random() * this.pushProducts.length);
        if (num === this.productIndex) {
          num = Math.floor(Math.random() * this.pushProducts.length);
        }
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.recommend.push(this.pushProducts[i]);
      });
    },
    updateProductNum(action) {
      if (action === 'add') {
        this.qty += 1;
      } else if (action === 'minus' && this.qty === 1) {
        this.$swal({ text: '購買商品數量最低為 1 個呦', icon: 'warning' });
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
    changeProduct(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
