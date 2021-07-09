<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  created() {},
};
</script>
