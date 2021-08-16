<template>
  <button
    class="topBtn btn material-icons rounded-circle"
    :class="{ 'd-block': top }"
    @click="goTop"
  >
    expand_less
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
