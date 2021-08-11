<template>
  <div class="main container">
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">─ 版權宣告 ─</h2>
    <div class="row justify-content-center mb-6">
      <div class="col-md-10">
        <ul class="list-unstyled">
          <li class='fontSizeBase fontSize-md-S mb-3'>
            Original
            高山部落蔬果的<strong>網站圖片</strong>及<strong>文字</strong>，
            僅供個人作品使用，不提供轉載、引用及商業用途。
          </li>
          <li class='fontSizeBase fontSize-md-S mb-3'>
            圖片來源:
            <a href="https://unsplash.com/" class="ms-2 text-decoration-underline">
              Unsplash
            </a>
            、
            <a href="https://www.pexels.com/zh-tw/" class="ms-2 text-decoration-underline">
              Pexels
            </a>
            、
            <a href="https://www.flaticon.com/" class="ms-2 text-decoration-underline">
              Flaticon
            </a>
          </li>
          <li class='fontSizeBase fontSize-md-S mb-3'>
            圖片拍攝者:
            <PhotoBy></PhotoBy>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t">
      <div class="ldio-u3364un719">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
</template>

<script>
import PhotoBy from '@/components/front/PhotoBy.vue';

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    PhotoBy,
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>
