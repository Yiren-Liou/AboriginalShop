<template>
  <ul class="subNav list-unstyled mb-0 py-2" :class="{ 'shadow-sm': scroll }">
    <template v-if="currentPath === 'products'">
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
          @click="emitCategory('季節限定')"
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
    </template>
    <template v-if="currentPath === 'product'">
      <li>
        <router-link
          class="subNavBtn btn d-center"
          data-category="全部商品"
          :to="{ path: '/products', query: { category: '全部商品', page: 1 } }"
        >
          <img src="@/assets/images/全部商品.png" class="iconImg me-2" />
          全部商品
        </router-link>
      </li>
      <li>
        <router-link
          class="subNavBtn btn d-center"
          data-category="季節限定"
          :to="{ path: '/products', query: { category: '季節限定', page: 1 } }"
        >
          <img src="@/assets/images/季節限定.png" class="iconImg me-2" />
          {{ windowSmallWidth ? '季節' : '季節限定' }}
        </router-link>
      </li>
      <li v-for="item in categoryList" :key="item">
        <router-link
          :to="{ path: '/products', query: { category: item, page: 1 } }"
          class="subNavBtn btn d-center"
          :class="{ active: $route.query.category === item }"
        >
          <img
            :src="require(`@/assets/images/${item}.png`)"
            :alt="item"
            class="iconImg me-2"
          />
          {{ windowSmallWidth ? item.substr(-2) : item }}
        </router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      active: '全部商品',
      scroll: '',
      docWidth: '',
    };
  },
  emits: ['emit-category'],
  props: {
    categoryList: {
      required: true,
    },
    currentPath: {
      required: true,
    },
  },
  watch: {
    isActive() {
      this.active = this.isActive;
    },
    docWidth() {
      this.docWidth = document.documentElement.scrollWidth;
    },
  },
  computed: {
    windowSmallWidth() {
      if (this.docWidth < 576) {
        return true;
      }
      return false;
    },
  },
  methods: {
    emitCategory(item) {
      this.$emit('emit-category', item);
      this.active = item;
    },
  },
  created() {
    this.docWidth = document.documentElement.scrollWidth;
    if (this.$route.query.category) {
      this.active = this.$route.query.category;
    }
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
    window.addEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
  unmounted() {
    window.removeEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
    window.removeEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
};
</script>
