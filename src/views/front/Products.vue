<template>
  <div
    class="d-center bg-center bg-cover py-3 py-md-7 mt-4 mt-md-6"
    style="
      backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627570231212.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PpbArNs%2FBqoc3WTlfbDcs8SerAah3XqO1ak4TZC%2B2MfK8WFXOORSG4WrvUNzrjNu%2FQcKkb%2BUQSUMaIzlambwa0jR%2F5nyd%2BfN1TwW8lcajV%2Bh0OLqUfNzEEizVn%2FHclo35pbzfgxtfi5bMsDkBUdfm3TEEZr4W4Yz1AuXzBsPAP8OkpKRhG6Ywo35eSnWmXFhj9pFSA%2Bh720iwxW4DAGIGAu%2FHka%2Fof4bkJeTdo3qpx7OptgvSN6YDnZBaSQuoYb53ReAe6PT6cdk8BFyoIa8xqlNfb0ZaGOzfkS%2BAqCOQxooWDG13KcJ58wGc%2FLtqNT3izHG8%2FClL%2ByhUK1hAfkYVA%3D%3D);
    "
    data-aos="fade-up"
  >
    <div class="container mt-6 my-md-5">
      <p class="fontSizeM fontSize-md-XL text-white text-end">
        友善環境的美食
        <br>大自然的禮物
      </p>
    </div>
  </div>
  <div class="main container mt-4 px-md-7" data-aos="fade-up">
    <ul class="subNav list-unstyled mb-4">
      <li class="mb-2">
        <button
          class="subNavBtn btn d-center"
          :class="{'active': isActive === '全部商品'}"
          type="button"
          data-category="全部商品"
          @click="filterProduct"
        >
          <img src="@/assets/images/全部商品.png" class="iconImg me-2" />
          全部商品
        </button>
      </li>
      <li class="mb-2">
        <button
          class="subNavBtn btn d-center"
          :class="{'active': isActive === '季節限定'}"
          type="button"
          data-category="季節限定"
          @click="filterProduct"
        >
          <img src="@/assets/images/季節限定.png" class="iconImg me-2" />
          季節限定
        </button>
      </li>
      <li v-for="item in categoryList" :key="item" class="mb-2">
        <button
          class="subNavBtn btn d-center"
          :class="{'active': isActive === item}"
          type="button"
          :data-category="item"
          @click="filterProduct"
        >
          <img
            :src="require(`@/assets/images/${item}.png`)"
            :alt="item"
            class="iconImg me-2"
          />
          {{ item }}
        </button>
      </li>
    </ul>
    <div class="row mb-6">
      <div v-for="item in filterProducts" :key="item.id"
          class="col-md-6 col-lg-4 mb-4">
        <router-link :to="`/product/${item.id}`" class="productCard px-3">
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
              <div class="d-flex align-items-center">
                <span v-if="item.is_sell" class="text-decoration-line-through me-2">
                  NT {{ $toCurrency(item.origin_price) }}
                </span>
                <p class="fontSize-md-S fw-bold mb-0"
                  :class="{'text-primary': item.is_sell}">
                  NT {{ $toCurrency(item.price) }}
                </p>
              </div>
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
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <Pagination :page="pagination" @emit-page="getProducts"></Pagination>
    </div>
  </div>
  <div class="position-relative">
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
import Pagination from '@/components/Pagination.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  data() {
    return {
      products: '',
      categoryList: '',
      isActive: '全部商品',
      favorite: [],
      filterProducts: '',
      pagination: '',
      isLoading: false,
    };
  },
  components: {
    Pagination,
    GoTop,
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  methods: {
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products.sort((a, b) => b.num - a.num);
            this.pagination = res.data.pagination;
            this.filterProducts = this.products;
            this.getCategoryList();
            this.isLoading = false;
            console.log(this.products);
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
    sortCategory() {
      const result = new Set();
      this.products.forEach((item) => {
        if (!result.has(item.category)) {
          result.add(item.category);
        }
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
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
    addToFavorite(item) {
      const hasFavorite = localStorage.getItem('favorite');
      if (hasFavorite) {
        this.favorite = JSON.parse(hasFavorite);
        const isSave = this.favorite
          .map((favorite) => favorite.id)
          .indexOf(item.id);
        if (isSave < 0) {
          this.favorite.push(item);
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
        this.favorite.push(item);
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
    filterProduct(e) {
      this.isLoading = true;
      const target = e.target.getAttribute('data-category');
      this.isActive = target;
      setTimeout(() => {
        switch (target) {
          case '全部商品':
            this.filterProducts = this.products;
            break;
          case '季節限定':
            this.filterProducts = this.products.filter((item) => item.is_season);
            break;
          default:
            this.filterProducts = this.products.filter(
              (item) => item.category === target,
            );
            break;
        }
        this.isLoading = false;
      }, 500);
    },
    getCategoryList() {
      const temp = new Set();
      this.products.forEach((item) => (temp.has(item.category) ? '' : temp.add(item.category)));
      this.categoryList = [...temp];
    },
  },
  created() {
    this.isLoading = true;
    this.getProducts();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>

<style scoped lang="scss">
.subNav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 992px) {
    justify-content: center;
  }
}
</style>
