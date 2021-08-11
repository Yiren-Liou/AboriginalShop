<template>
  <div class="main container">
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">─ 收藏清單 ─</h2>
    <template v-if="favorite == null || favorite.length == 0">
      <div class="d-flex flex-column align-items-center">
        <p class="fontSizeM text-center mb-5">
          目前沒有收藏任何商品呦<br />快點去逛逛吧
        </p>
        <router-link to="/products" role="button" class="btn btn-primary me-3">
          繼續購物
        </router-link>
      </div>
    </template>
    <div v-else class="row mb-6">
      <div v-for="item in favorite" :key="item.id" class="col-sm-6 col-lg-4">
        <router-link :to="{ path: `/product/${item.id}`,
                            query: { category: item.category,
                                    title : item.title}}"
                class="productCard px-3">
          <div class="card-img-top mb-2">
            <img
              :src="item.imagesUrl[0].imgUrl"
              :alt="item.title"
              class="img-fluid"
            />
          </div>
          <div class="card-body px-0">
            <div class="d-flex mb-3"
                :class="{'tagCard': !item.is_season && !item.is_sell}">
              <span v-if="item.is_season"
                    class="border border-primary text-primary px-2 me-2">季節限定</span>
              <span v-if="item.is_sell"
                    class="border border-primary text-primary px-2">限時特惠</span>
            </div>
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
            <div class="card-footer bg-transparent border-0 p-0">
              <div class="d-flex">
                <button
                  type="button"
                  class="favoriteBtn btn btn-outline-secondary d-center px-0 w-50 me-1"
                  @click.prevent="removeFavorite(item)"
                >
                  <span class="material-icons me-2">favorite</span>
                    移除收藏
                </button>
                <button
                  type="button"
                  class="addCartBtn btn btn-secondary d-center w-50 ms-1"
                  @click.prevent="addToCart(item.id)"
                >
                   <span class="material-icons me-2">add_shopping_cart</span>
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </router-link>
        <!-- <button type="button" class="btn" @click="getProduct(item)">
          <div class="productCard card h-100">
            <div class="card-img-top mb-2">
              <img
                :src="item.imagesUrl[0].imgUrl"
                :alt="item.title"
                class="img-fluid"
              />
            </div>
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
                <button
                  type="button"
                  class="favoriteBtn btn px-0 w-50"
                  @click.stop="removeFavorite(item)"
                >
                  <p class="d-center border-end mb-0 w-100">
                    <span class="material-icons me-2 text-primary"
                      >favorite</span
                    >
                    移除收藏
                  </p>
                </button>
                <button
                  type="button"
                  class="addCartBtn btn d-center w-50"
                  @click.stop="addToCart(item.id)"
                >
                  <p class="d-center mb-0 w-100">
                    <span class="material-icons me-2">add_shopping_cart</span>
                    加入購物車
                  </p>
                </button>
              </div>
            </div>
          </div>
        </button> -->
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
    },
    getProduct(item) {
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
    removeFavorite(item) {
      this.isLoading = true;
      const temp = this.favorite
        .map((favorite) => favorite.id)
        .indexOf(item.id);
      this.favorite.splice(temp, 1);
      this.favorite = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', this.favorite);
      emitter.emit('update-favorite');
      this.getFavorite();
      this.$swal({
        text: '成功移除收藏',
        icon: 'success',
        confirmButtonColor: '#ffbc1f',
      });
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.getFavorite();
    }, 1000);
  },
};
</script>
