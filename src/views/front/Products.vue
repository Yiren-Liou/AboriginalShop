<template>
  <div class="container">
    <div class="d-flex flex-column align-items-center mb-5">
      <router-link to='/products' class="fontSizeM text-center">全部商品</router-link>
      <div class="d-flex">
        <div class="dropdown">
          <button class="btn" type="button"
                  id="vegetables" data-bs-toggle="dropdown" aria-expanded="false">
            新鮮蔬果
          </button>
          <ul class="dropdown-menu" aria-labelledby="vegetables">
            <li>
              <button class="dropdown-item btn btn-sm" type="button">水果</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button">蔬菜</button>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button class="btn" type="button"
                  id="drinks" data-bs-toggle="dropdown" aria-expanded="false">
            沖泡飲品
          </button>
          <ul class="dropdown-menu" aria-labelledby="drinks">
            <li>
              <button class="dropdown-item btn btn-sm" type="button">咖啡豆</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button">高山茶葉</button>
            </li>
          </ul>
        </div>
        <button class="btn" type="button" id="jam">
          天然果醬
        </button>
        <div class="dropdown">
          <button class="btn" type="button"
                  id="weave" data-bs-toggle="dropdown" aria-expanded="false">
            手工編織
          </button>
          <ul class="dropdown-menu" aria-labelledby="weave">
            <li>
              <button class="dropdown-item btn btn-sm" type="button">置物籃</button>
            </li>
            <li>
              <button class="dropdown-item btn btn-sm" type="button">圍巾</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for='(item,i ) in products' :key="item.id" class="col-md-4">
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
                        class="favoriteBtn btn px-0 w-50">
                  <p class="d-center border-end mb-0 w-100">
                    <span class="material-icons me-2">favorite_border</span>
                    我喜歡
                  </p>
                </button>
                <button type="button"
                        class="addCartBtn btn d-center w-50">
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
  .favoriteBtn{
    border-radius: 0 0 0 .25rem;
  }
  .addCartBtn{
    border-radius: 0 0 .25rem 0;
  }
  .card{
    border-radius: 1rem;
  }
  .card-img-top{
    border-radius: 1rem 1rem 0 0;
  }
</style>

<script>
export default {
  data() {
    return {
      products: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
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
  },
  created() {
    this.getProducts();
  },
};
</script>
