<template>
  <div class="col-md-6 mb-3">
    <label for="isEnabled" class="form-label">上架狀態</label>
    <select id="isEnabled" class="form-select" v-model="isSell">
      <option value="" disabled>請選擇上架狀態</option>
      <option v-for="item in enabled" :key="item">{{ item }}</option>
    </select>
  </div>
  <div class="col-md-6 mb-3" v-if="isSell == '上架'">
    <label for="productSellTime" class="form-label">上架時間</label>
    <input type="date" class="form-control"
            id="productSellTime" v-model="sellTime">
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabled: ['上架', '未上架'],
      isSell: '',
      sellTime: '',
    };
  },
  methods: {
    emitSellTime() {
      this.$emit('emit-selltime', this.isSell, this.sellTime);
    },
  },
};
</script>
