<template>
  <div class="col-md-4" v-for="(num, i) in 6" :key="num">
    <div class="mb-3">
      <label :for="`recommendImg${num}`" class="form-label">推薦商品{{ num }}</label>
      <select v-if="add"
        :id="`recommendImg${num}`"
        class="form-select recommendSelect"
        :disabled="readonly"
        :data-id="num"
      >
        <option value="" selected disabled>請選擇一個推薦商品</option>
        <option v-for="(item) in productList" :key="item.id"
                :value="item.id">
          {{ item.title }}
        </option>
      </select>
      <select v-else
        :id="`recommendImg${num}`"
        class="form-select recommendSelect"
        :disabled="readonly"
        :data-id="num"
      >
        <option value="" disabled>請選擇一個推薦商品</option>
        <option v-for="(item) in productList" :key="item.id"
                :value="item.id" :selected="item.id === recommendList[i].productId">
          {{ item.title }}
        </option>
      </select>

    </div>
  </div>
  <div v-if="!readonly" class="col-md-4 mx-auto d-flex justify-content-center mt-3">
    <button type="button" class="btn btn-primary" @click="emitRecommendList()">
      儲存
    </button>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
export default {
  data() {
    return {
      productList: '',
      recommendList: [],
      isLoading: false,
    };
  },
  props: ['readonly', 'recommend', 'add'],
  emits: ['emit-recommend'],
  watch: {
    recommend() {
      this.recommendList = this.recommend;
    },
  },
  methods: {
    getProducts() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.productList = Object.values(res.data.products);
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getRecommendList() {
      this.recommendList = [];
      const recommendSelect = document.querySelectorAll('.recommendSelect');
      recommendSelect.forEach((item) => {
        const recommendItem = {
          id: item.getAttribute('data-id'),
          productId: item.value,
        };
        this.productList.forEach((productInfo) => {
          if (productInfo.id === recommendItem.productId) {
            recommendItem.productTitle = productInfo.title;
          }
        });
        this.recommendList.push(recommendItem);
      });
    },
    emitRecommendList() {
      this.getRecommendList();
      this.$emit('emit-recommend', this.recommendList);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
