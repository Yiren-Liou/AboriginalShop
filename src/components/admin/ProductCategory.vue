<template>
  <div class="col-md-6 mb-3">
    <label for="mainCategory" class="form-label">分類</label>
    <select id="mainCategory" class="form-select" v-model="mainIndex" @change="getMainIndex">
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="(item) in mainCategory"
      :key=item :value=item> {{ item }} </option>
    </select>
  </div>
  <div class="col-md-6 mb-3">
    <label for="subCategory" class="form-label">次分類</label>
    <select id="subCategory" class="form-select" v-model="subIndex">
      <option value="" disabled>請選擇一個次分類</option>
      <option v-for="(item) in sub" :key=item
              :value=item>{{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainIndex: '',
      subIndex: '',
      category: {
        新鮮蔬果: ['水果', '蔬菜', '手工果醬'],
        沖泡飲品: ['茶葉', '咖啡'],
        手工編織: ['圍巾', '置物籃'],
      },
    };
  },
  computed: {
    mainCategory() {
      return Object.keys(this.category);
    },
    sub() {
      return this.category[this.mainIndex];
    },
  },
  methods: {
    getMainIndex() {
      this.subIndex = '';
    },
    emitCategory() {
      const mainCategoryValue = document.querySelector('#mainCategory');
      const subCategoryValue = document.querySelector('#subCategory');
      this.$emit(mainCategoryValue, subCategoryValue);
    },
  },
  created() {
  },
};
</script>
