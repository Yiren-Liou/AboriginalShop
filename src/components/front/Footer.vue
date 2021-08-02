<template>
  <footer class="container">
    <nav
      class="
        navbar navbar-expand-lg
        justify-content-center justify-content-lg-between
        p-1 p-md-0
      "
    >
      <ul class="navbar-nav d-none d-lg-flex">
        <li class="nav-item">
          <router-link
            to="/about"
            class="nav-link"
            :class="{ 'text-dark': footerDark }"
          >
            關於我們
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/contact"
            class="nav-link"
            :class="{ 'text-dark': footerDark }"
          >
            聯絡我們
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/copyright"
            class="nav-link"
            :class="{ 'text-dark': footerDark }"
          >
            版權宣告
          </router-link>
        </li>
      </ul>
      <span class="nav-link" :class="{ 'text-dark': footerDark }"
        >Copyright ©
      </span>
    </nav>
  </footer>
</template>

<style scoped>
.nav-link {
  color: #fff;
}
</style>

<script>
export default {
  props: ['footerDark'],
};
</script>
