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
  <SubNav :category-list="categoryList" :currentPath="currentPath"
          @emit-category="filterProduct">
  </SubNav>
  <div class="main container mt-3 mt-md-4 px-md-7">
    <div class="row mb-6">
      <div v-for="item in filterProducts" :key="item.id"
          class="col-6 col-lg-4 mb-6 mt-1 mt-md-3">
        <router-link :to="{ path: `/product/${item.id}`,
                            query: { category: item.category,
                                    title : item.title}}"
                class="productCard">
          <div class="card-img-top position-relative mb-2 mb-md-3">
            <span v-if="item.is_season" class="tag">限定</span>
            <span v-if="item.is_sell" class="tag">特價</span>
            <img
              :src="item.imagesUrl[0].imgUrl"
              :alt="item.title"
              class="img-fluid"
            />
          </div>
          <div class="d-md-flex justify-content-md-between align-items-md-center mb-2 mb-md-3">
            <h2 class="fontSizeBase fontSize-md-M mb-1 mb-md-0">{{ item.title }}</h2>
            <p class="fontSize-md-M fw-bold mb-0"
              :class="{'text-primary': item.is_sell}">
              NT {{ item.is_sell? item.price : item.origin_price }}
              <span v-if="item.is_sell"
                  class="fontSizeXS text-decoration-line-through text-dark ms-1">
                NT {{ item.origin_price }}
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between">
            <button
              type="button"
              class="favoriteBtn d-center btn btn-outline-secondary me-3"
              @click.prevent="addToFavorite(item)"
            >
              <span class="material-icons">favorite_border</span>
            </button>
            <button
              type="button"
              class="addCartBtn btn btn-secondary d-center material-icons"
              @click.prevent="addToCart(item.id)"
            >
              <span class="material-icons">
                add_shopping_cart
              </span>
              <p class="d-none d-lg-block fontSize-md-M ms-2 mb-0">加入購物車</p>
            </button>
          </div>
        </router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <Pagination :page="pagination" @emit-page="filterPages"></Pagination>
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
import newPages from '@/methods/newPagination';
import SubNav from '@/components/front/SubNav.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      currentPath: this.$route.name,
      products: '',
      categoryList: '',
      isActive: '全部商品',
      scroll: '',
      favorite: [],
      filterProducts: '',
      pagination: '',
      path: {
        category: '',
        page: '',
      },
      tempProduct: '',
      isLoading: false,
    };
  },
  components: {
    SubNav,
    Pagination,
  },
  methods: {
    getProducts() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products.sort((a, b) => a.categorySort - b.categorySort);
            this.getCategoryList();
            this.filterPages(this.path.page, this.path.category);
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
    filterProduct(category) {
      this.isLoading = true;
      this.path.category = category;
      this.isActive = category;
      this.filterPages();
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push({ path: '/products', query: { category: this.path.category, page: 1 } });
      }, 500);
    },
    filterPages(page = 1) {
      this.filterCategory(this.path.category);
      const newPage = newPages(page, this.tempProduct);
      this.pagination = newPage.pages;
      this.filterProducts = newPage.filterData;
      this.$router.push({ path: '/products', query: { category: this.path.category, page } });
    },
    filterCategory(category) {
      switch (category) {
        case '全部商品':
          this.tempProduct = this.products;
          break;
        case '季節限定':
          this.tempProduct = this.products.filter((item) => item.is_season);
          break;
        default:
          this.tempProduct = this.products.filter(
            (item) => item.category === category,
          );
          break;
      }
    },
    getCategoryList() {
      const temp = new Set();
      this.products.forEach((item) => (temp.has(item.category) ? '' : temp.add(item.category)));
      this.categoryList = [...temp];
    },
    getPath() {
      this.path.category = this.$route.query.category ? this.$route.query.category : '全部商品';
      this.path.page = this.$route.query.page ? this.$route.query.page : 1;
    },
  },
  created() {
    this.isLoading = true;
    this.getPath();
    this.getProducts();
  },
};
</script>
