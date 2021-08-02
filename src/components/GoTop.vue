<template>
  <button
    class="topBtn btn btn-outline-primary btn-sm"
    type="button"
    :class="{ 'd-block': top }"
    @click="goTop"
  >
    <span class="material-icons">expand_less</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      pageY: '',
    };
  },
  computed: {
    top() {
      let show = false;
      if (this.pageY > 200) {
        show = true;
      }
      return show;
    },
  },
  methods: {
    goTop() {
      window.scroll(0, 0);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.pageY = window.pageYOffset;
    });
  },
};
</script>
