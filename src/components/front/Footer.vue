<template>
  <footer class="container">
    <nav class="navbar navbar-expand-lg justify-content-center justify-content-lg-between">
      <ul class="navbar-nav d-none d-lg-flex">
        <li class="nav-item">
          <a class="nav-link ps-0" href="#"
            :class="{'text-white': footerLight}">關於我們
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            :class="{'text-white': footerLight}">聯絡我們
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            :class="{'text-white': footerLight}">版權申明
          </a>
        </li>
      </ul>
      <span class="fontSizeS" :class="{'text-white': footerLight}">Copyright ©</span>
    </nav>
  </footer>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['footerLight'],
  components: {},
  methods: {},
  created() {},
};
</script>
