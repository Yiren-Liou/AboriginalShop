<template>
  <div class="col-md-4" v-for="(num) in 6" :key="num">
    <div class="mb-3">
      <label :for="`recommendImg${num}`" class="form-label">推薦商品{{ num }}</label>
      <select
        :id="`recommendImg${num}`"
        class="form-select recommendSelect"
      >
        <option value="" selected disabled>請選擇一個推薦商品</option>
        <option v-for="item in productList" :key="item.id" :value="item.id">
          {{ item.title }}
        </option>
      </select>
    </div>
  </div>
  <button type="button" class="btn btn-warning"
          @click="emitRecommendList()">確定</button>
</template>

<script>
export default {
  data() {
    return {
      productList: '',
      recommendList: [],
    };
  },
  emits: ['emit-recommend'],
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
      const recommendSelect = document.querySelectorAll('.recommendSelect');
      recommendSelect.forEach((item) => {
        const recommendItem = {
          productId: item.value,
        };
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
