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
        沖泡飲品: ['茶葉', '咖啡'],
        天然果醬: ['手工果醬'],
        手工編織: ['圍巾', '置物籃', '包包'],
      },
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
      const mainCategoryValue = document.querySelector('#mainCategory').value;
      const subCategoryValue = document.querySelector('#subCategory').value;
      this.$emit('emit-category', mainCategoryValue, subCategoryValue);
    },
  },
};
</script>
