<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="請輸入要搜尋的商品"
           aria-label="search" aria-describedby="searchBtn" v-model="search">
    <button class="material-icons btn btn-outline-secondary"
            type="button" id="searchBtn">search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serch: '',
      list: '',
    };
  },
  props: ['products'],
  computed() {
    this.list = this.products;
    return this.list.filter((item) => {
      console.log(item);
      return item.title.match(this.serch);
    });
  },
};
</script>
