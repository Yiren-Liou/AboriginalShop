<template>
  <div class="col-md-6 mb-3">
    <label for="isEnabled" class="form-label">上架狀態<sup>*</sup></label>
    <select id="isEnabled" class="form-select"
            v-model="isSell" @change="emitIsEnabled()"
            :disabled="readonly">
      <option value="" disabled>請選擇上架狀態</option>
      <option v-for="item in enabled" :key="item" :value='item'>{{ item? '上架' : '未上架' }}</option>
    </select>
  </div>
  <div class="col-md-6 mb-3" >
    <label for="productSellTime" class="form-label">上架時間</label>
    <input type="date" class="form-control"
            id="productSellTime" v-model="sellTime"
            :disabled="readonly || !isSell" @change="emitIsEnabled()">
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: [0, 1],
      isSell: '',
      sellTime: '',
      tempSell: '',
      tempTime: '',
    };
  },
  props: ['readonly', 'editSell', 'editTime'],
  emits: ['emit-is-enabled'],
  watch: {
    editSell() {
      this.isSell = this.editSell;
    },
    editTime() {
      this.sellTime = this.editTime;
    },
  },
  methods: {
    emitIsEnabled() {
      if (this.isSell) {
        this.sellTime = '';
      }
      this.$emit('emit-is-enabled', this.isSell, this.sellTime);
    },
  },
  created() {
    // console.log(this.readonly);
  },
};
</script>
