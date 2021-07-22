<template>
  聯絡我們
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
