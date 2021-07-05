<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="請輸入要搜尋的關鍵字"
           aria-label="search" aria-describedby="searchBtn"
           v-model="search">
    <button class="material-icons btn btn-outline-secondary"
            type="button" id="searchBtn" @click="emitSearch">search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serch: '',
      temp: '',
    };
  },
  props: ['products'],
  watch: {
    products() {
      this.temp = this.products;
      console.log(this.temp);
    },
  },
  computed: {
    list() {
      return this.products.filter((item) => {
        console.log(item);
        return item.title.match(this.search);
      });
    },
  },
  methods: {
    emitSearch() {
      this.$emit('emit-search', this.list);
    },
  },
};
</script>
