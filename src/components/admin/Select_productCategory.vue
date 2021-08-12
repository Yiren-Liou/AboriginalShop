<template>
  <div class="col-md-6 mb-3">
    <label for="mainCategory" class="form-label">分類<sup>*</sup></label>
    <select
      id="mainCategory"
      class="form-select"
      v-model="tempMain"
      @change="resetSubIndex"
      :disabled="readonly"
    >
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="item in mainCategory" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
  <div class="col-md-6 mb-3">
    <label for="subCategory" class="form-label">次分類<sup>*</sup></label>
    <select
      id="subCategory"
      class="form-select"
      v-model="tempSub"
      @change="emitCategory()"
      :disabled="readonly"
    >
      <option value="" disabled>請選擇一個次分類</option>
      <option v-for="item in sub" :key="item" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempMain: '',
      tempSub: '',
      category: {
        新鮮蔬果: ['水果', '蔬菜'],
        沖泡飲品: ['茶葉', '咖啡', '果乾水'],
        天然果醬: ['手工果醬'],
        手工編織: ['置物籃', '包包', '帽子', '圍巾'],
      },
      categorySort: '',
    };
  },
  props: ['readonly', 'editMain', 'editSub', 'add'],
  emits: ['emit-category'],
  watch: {
    editMain() {
      this.tempMain = this.editMain;
    },
    editSub() {
      this.tempSub = this.editSub;
    },
  },
  computed: {
    mainCategory() {
      return Object.keys(this.category);
    },
    sub() {
      return this.category[this.tempMain];
    },
  },
  methods: {
    resetSubIndex() {
      this.tempSub = '';
    },
    emitCategory() {
      // const mainCategoryValue = document.querySelector('#mainCategory').value;
      const subCategoryValue = document.querySelector('#subCategory').value;
      switch (subCategoryValue) {
        case '水果':
          this.categorySort = 1;
          break;
        case '蔬菜':
          this.categorySort = 2;
          break;
        case '茶葉':
          this.categorySort = 3;
          break;
        case '咖啡':
          this.categorySort = 4;
          break;
        case '果乾水':
          this.categorySort = 5;
          break;
        case '手工果醬':
          this.categorySort = 6;
          break;
        case '置物籃':
          this.categorySort = 7;
          break;
        case '包包':
          this.categorySort = 8;
          break;
        case '帽子':
          this.categorySort = 9;
          break;
        case '圍巾':
          this.categorySort = 10;
          break;
        default: break;
      }
      this.$emit('emit-category', this.categorySort);
    },
  },
};
</script>
