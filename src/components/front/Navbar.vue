<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <h1>
        <a class="navbar-brand" :class="{'text-white': navLight}" href="/">Navbar</a>
      </h1>
      <button class="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#topNav"
              aria-controls="topNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="material-icons" :class="{'text-white': navLight}">menu</span>
      </button>
      <div class="collapse navbar-collapse" id="topNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <a class="nav-link"
               :class="{'text-white': navLight}" href="/">首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
               :class="{'text-white': navLight}" href="#">全部商品</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              :class="{'text-white': navLight}" href="#">全部文章</a>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link"
              :class="{'text-white': navLight}" href="#">關於我們</a>
          </li>
          <li class="nav-item">
            <router-link to="/order" class="nav-link" :class="{'text-white': navLight}">
              查詢訂單
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link"
              :class="{'text-white': navLight}" href="#">
              <span class="material-icons d-none d-lg-block">favorite_border</span>
              <span class="d-lg-none">我的最愛</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" :class="{'text-white': navLight}">
              <span class="material-icons d-none d-lg-block">shopping_cart</span>
              <span class="d-lg-none">購物車</span>
            </router-link>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link"
              :class="{'text-white': navLight}" href="#">聯絡我們</a>
          </li>
          <li class="nav-item d-lg-none">
            <a class="nav-link"
              :class="{'text-white': navLight}" href="#">版權申明</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['navLight'],
  components: {},
  methods: {},
  created() {},
};
</script>
