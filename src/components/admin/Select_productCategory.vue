<template>
  <div class="col-md-6 mb-3">
    <label for="mainCategory" class="form-label">分類<sup>*</sup></label>
      <select v-if="add" id="mainCategory" class="form-select"
            v-model="mainIndex" @change="resetSubIndex">
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="(item) in mainCategory"
      :key=item :value=item> {{ item }} </option>
    </select>
    <select v-else id="mainCategory" class="form-select"
            :disabled="isReadonly"
            v-model="tempMain" @change="resetSubIndex">
      <option value="" disabled>請選擇一個分類</option>
      <option v-for="(item) in mainCategory" :key='item'
              :value='item' :selected="item === 'tempMain'">
              {{ item }}
      </option>
    </select>
  </div>
  <div class="col-md-6 mb-3">
    <label for="subCategory" class="form-label">次分類<sup>*</sup></label>
    <select v-if="add" id="subCategory" class="form-select"
            v-model="subIndex" @change="emitCategory()">
      <option value="" disabled>請選擇一個次分類</option>
      <option v-for="(item) in sub" :key=item
              :value=item>{{ item }}
      </option>
    </select>
    <select v-else :disabled="isReadonly"
            id="subCategory" class="form-select"
            v-model="tempSub" @change="emitCategory()">
      <option value="" disabled>請選擇一個次分類</option>
      <option v-for="(item) in sub" :key='item'
              :value='item' :selected="item === 'tempSub'">
              {{ item }}
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
      isReadonly: '',
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
    readonly() {
      this.isReadonly = this.readonly;
    },
  },
  computed: {
    mainCategory() {
      return Object.keys(this.category);
    },
    sub() {
      if (this.add) {
        return this.category[this.mainIndex];
      }
      return this.category[this.tempMain];
    },
  },
  methods: {
    resetSubIndex() {
      if (this.add) {
        this.subIndex = '';
      }
      this.tempSub = '';
    },
    emitCategory() {
      const mainCategoryValue = document.querySelector('#mainCategory').value;
      const subCategoryValue = document.querySelector('#subCategory').value;
      this.$emit('emit-category', mainCategoryValue, subCategoryValue);
    },
  },
  created() {
  },
};
</script>
