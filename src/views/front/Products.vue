<template>
  <div class="container">
    <div class="d-flex flex-column align-items-center mb-5">
      <button type="button" class='btn btn-text fontSizeM text-center' @click='getProducts'>
          全部商品
      </button>
      <div class="d-flex">
        <div class="dropdown">
          <button class="btn btn-text" type="button"
                  id="vegetables" data-bs-toggle="dropdown" aria-expanded="false">
            新鮮蔬果
          </button>
          <ul class="dropdown-menu" aria-labelledby="vegetables">
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='水果' @click='filterProduct'>水果</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='蔬菜' @click='filterProduct'>蔬菜</button>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn btn-text" type="button"
                  id="drinks" data-bs-toggle="dropdown" aria-expanded="false">
            沖泡飲品
          </button>
          <ul class="dropdown-menu" aria-labelledby="drinks">
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='咖啡' @click='filterProduct'>咖啡</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='茶葉' @click='filterProduct'>茶葉</button>
            </li>
          </ul>
        </div>
        <button class="btn btn-text" type="button" id="jam"
                data-subCategory='手工果醬' @click='filterProduct'>
          天然果醬
        </button>
        <div class="dropdown">
          <button class="btn btn-text" type="button"
                  id="weave" data-bs-toggle="dropdown" aria-expanded="false">
            手工編織
          </button>
          <ul class="dropdown-menu" aria-labelledby="weave">
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='置物籃' @click='filterProduct'>置物籃</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button"
                      data-subCategory='圍巾' @click='filterProduct'>圍巾</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mb-6">
      <div v-for='(item,i ) in filterProducts' :key="item.id" class="col-sm-6 col-lg-4">
        <button type="button" class="btn" @click='getProduct(item, i)'>
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
            <div class="card-footer bg-transparent p-0">
              <div class="d-flex">
                <button type="button"
                        class="favoriteBtn btn px-0 w-50"
                        @click.stop="addToFavorite(item)">
                  <p class="d-center border-end mb-0 w-100">
                    <span class="material-icons me-2">favorite_border</span>
                    我喜歡
                  </p>
                </button>
                <button type="button"
                        class="addCartBtn btn d-center w-50"
                        @click.stop="addToCart(item.id)">
                  <p class="d-center mb-0 w-100">
                  <span class="material-icons me-2">add_shopping_cart</span>
                    我要買
                  </p>
                </button>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dropdown-menu{
    min-width: 8rem;
  }
  .card{
    border-radius: 1rem;
  }
  .card:hover{
    border-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  .card-img-top{
    border-radius: 1rem 1rem 0 0;
  }
</style>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      products: '',
      favorite: [],
      filterProducts: '',
    };
  },
  props: ['pushOrder', 'pushProducts', 'productIndex'],
  methods: {
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.filterProducts = this.products;
            // this.pagination = res.data.pagination;
            console.log(this.products);
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
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
    addToFavorite(item) {
      this.favorite = [];
      const isSave = localStorage.getItem('favorite');
      if (isSave) {
        this.favorite = JSON.parse(isSave);
      }
      this.favorite.push(item);
      this.favorite = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', this.favorite);
      emitter.emit('update-favorite');
    },
    filterProduct(e) {
      this.filterProducts = this.products;
      const filterCategory = e.target.getAttribute('data-subCategory');
      this.filterProducts = this.products.filter((item) => item.sub_category === filterCategory);
    },
  },
  created() {
    this.getProducts();
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
