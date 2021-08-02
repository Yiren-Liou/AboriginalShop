<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page - 1)"
          >Prev</a
        >
      </li>
      <li
        class="page-item"
        :class="{ active: item === page.current_page }"
        v-for="item in page.total_pages"
        :key="'page' + item"
      >
        <a class="page-link" href="#" @click.prevent="emitPage(item)">{{
          item
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page + 1)"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    emitPage(item) {
      this.$emit('emit-page', item);
    },
  },
};
</script>
