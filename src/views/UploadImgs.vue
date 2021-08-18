<template>
  <div v-if="checkUser" class="container">
    <h2 class="py-4">上傳照片</h2>
    <div class="row justify-content-between">
      <div class="col-md-5">
        <h3 class="fs-4">商品首頁</h3>
        <label for="images" class="form-label">圖片檔案</label>
        <input type="file" class="form-control mb-3" id="images" />
        <button
          type="button"
          class="btn btn-primary btn-sm mb-5"
          @click="upload"
        >
          上傳
        </button>
      </div>
    </div>
    <p class="p-4">
      {{ imgUrl }}
    </p>
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
export default {
  data() {
    return {
      checkUser: '',
      isLoading: false,
      images: [],
      imgUrl: '',
      orderCompleted: [],
    };
  },
  methods: {
    upload() {
      this.isLoading = true;
      const imgInput = document.querySelector('#images');
      const file = imgInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http
        .post(apiUrl, formData)
        .then((res) => {
          if (res.data.success) {
            this.imgUrl = res.data.imageUrl;
            this.isLoading = false;
            this.$swal({ text: '上傳成功', icon: 'success', confirmButtonColor: '#ffbc1f' });
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data, icon: 'warning', confirmButtonColor: '#ffbc1f' });
          }
        })
        .catch(() => {
          this.isLoading = false;
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    if (token) {
      this.$http.defaults.headers.common.Authorization = token;
      const apiUrl = `${process.env.VUE_APP_URL}api/user/check`;
      this.$http.post(apiUrl).then((res) => {
        if (res.data.success) {
          this.checkUser = true;
        } else {
          this.$swal({
            text: res.data.message,
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
          this.$router.push('/login');
        }
      });
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
