<template>
  <div class='sectionBg d-center bg-center' style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627055318168.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=eMeQzKPqc2FG11%2FBVg0kFFcMAUKU4QkN0OUOUJoH6AcqE1KE1ZiVdpsR%2BUKZvmNiJVSEZlVayFv4APRQYKHRn09luSwjpMJvbWEz3QwFuvLSeMpMx0645kqbahDycy3FPyxGz17PniwcohBQpi6EWI7OEeX9N1NYVHF4j%2Fydin0xEeWcZEYIfpAEbbcjZqrBr6mMf8bPNrgX9UkW0tdF%2FCGmP9r%2F17453uJZhmdbg0cZfUXDS35XLzD2LyiG8IBoSjj8YyniwLcBdFFLxbKpErOIAqnQ0eEf9dqvBg0fUwpqNZaSW4ir7O5b1P8ck42DenqC4Iwc4vVj6Tj47NfmcQ%3D%3D'>
    <span class='fs-2 fw-bold text-white mt-6'>探討大自然法則，實現永續耕種</span>
  </div>
  <div class="container">
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
