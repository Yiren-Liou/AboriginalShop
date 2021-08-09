<template>
  <ul class="subNav list-unstyled mb-0 py-2"
      :class="{ 'shadow-sm': scroll }">
    <li>
      <button
        class="subNavBtn btn d-center"
        :class="{ active: active === '全部商品' }"
        type="button"
        data-category="全部商品"
        @click="emitCategory('全部商品')"
      >
        <img src="@/assets/images/全部商品.png" class="iconImg me-2" />
        全部商品
      </button>
    </li>
    <li>
      <button
        class="subNavBtn btn d-center"
        :class="{ active: active === '季節限定' }"
        type="button"
        data-category="季節限定"
        @click="emitCategory('季節限定');"
      >
        <img src="@/assets/images/季節限定.png" class="iconImg me-2" />
        {{ windowSmallWidth ? '季節' : '季節限定' }}
      </button>
    </li>
    <li v-for="item in categoryList" :key="item">
      <button
        class="subNavBtn btn d-center"
        :class="{ active: active === item }"
        type="button"
        :data-category="item"
        @click="emitCategory(item)"
      >
        <img
          :src="require(`@/assets/images/${item}.png`)"
          :alt="item"
          class="iconImg me-2"
        />
        {{ windowSmallWidth ? item.substr(-2) : item }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: '全部商品',
      scroll: '',
    };
  },
  emits: ['emit-category'],
  props: {
    categoryList: {
      required: true,
    },
    isActive: {
      type: String,
      required: true,
    },
  },
  watch: {
    isActive() {
      this.active = this.isActive;
    },
  },
  computed: {
    windowSmallWidth() {
      if (window.screen.width < 576) {
        return true;
      }
      return false;
    },
  },
  methods: {
    emitCategory(item) {
      this.$emit('emit-category', item);
    },
  },
  created() {
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
};
</script>
