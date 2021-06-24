<template>
  <div class="col-md-6 mb-3">
    <label for="mainCategory" class="form-label">分類<sup>*</sup></label>
    <select v-if='isEdit == "readonly"' id="mainCategory" class="form-select" disabled>
      <option :value="editMain">{{ editMain }}</option>
    </select>
    <select v-else-if='isEdit == "edit"' id="mainCategory" class="form-select"
            v-model="tempMain" @change="changeIndex">
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="(item) in mainCategory" :key=item :value=item>
        {{ item === editMain? editMain : item }}
      </option>
    </select>
    <select v-else id="mainCategory" class="form-select"
            v-model="mainIndex" @change="resetSubIndex">
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="(item) in mainCategory"
      :key=item :value=item> {{ item }} </option>
    </select>
  </div>
  <div class="col-md-6 mb-3">
    <label for="subCategory" class="form-label">次分類<sup>*</sup></label>
    <select v-if='isEdit == "readonly"' id="subCategory" class="form-select" disabled>
      <option value="" disabled>請選擇一個次分類</option>
      <option :value='editSub'>{{ editSub }}</option>
    </select>
    <select v-else-if='isEdit == "edit"' id="subCategory" class="form-select"
            v-model="tempSub">
      <option value="" disabled>請選擇一個次分類</option>
      <option v-for="(item) in sub" :key=item
              :value=item>{{ item }}
      </option>
    </select>
    <select v-else id="subCategory" class="form-select" v-model="subIndex">
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
      tempMain: '',
      tempSub: '',
      mainIndex: '',
      subIndex: '',
      category: {
        新鮮蔬果: ['水果', '蔬菜', '手工果醬'],
        沖泡飲品: ['茶葉', '咖啡'],
        手工編織: ['圍巾', '置物籃'],
      },
      editMainTemp: '',
      editSubTemp: '',
    };
  },
  props: ['isEdit', 'editMain', 'editSub'],
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
      return this.category[this.mainIndex];
    },
  },
  methods: {
    changeIndex() {
      Object.keys(this.category).forEach((item, i) => {
        if (item === this.editMain) {
          console.log(item, i);
          this.mainIndex = i;
        }
      });
      console.log(this.mainIndex);
      this.resetSubIndex();
    },
    resetSubIndex() {
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
