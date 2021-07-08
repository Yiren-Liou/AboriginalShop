<template>
  <div v-if="checkUser" class="container">
    <h2 class="py-4">上傳照片</h2>
    <div class="row justify-content-between">
      <div class="col-md-5">
        <h3 class="fs-4">商品首頁</h3>
        <label for="productIndex" class="form-label">圖片檔案</label>
        <input type="file" class="form-control mb-3" id="productIndex">
        <label for="productIndexTitle" class="form-label">圖片名稱</label>
        <input type="text" class="form-control mb-3" id="productIndexTitle">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary btn-sm me-3"
                @click="upload('productIndex')">上傳
          </button>
          <button type="button" class="btn btn-primary btn-sm"
                @click="pushImages">更新頁面圖片
          </button>
        </div>
      </div>
      <div class="col-md-5">
        <h3 class="fs-4">訂購完成</h3>
        <label for="orderCompleted" class="form-label">圖片檔案</label>
        <input type="file" class="form-control mb-3" id="orderCompleted">
        <label for="orderCompletedTitle" class="form-label">圖片名稱</label>
        <input type="text" class="form-control mb-3" id="orderCompletedTitle">
        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-primary btn-sm me-3"
                @click="upload('orderCompleted')">上傳
          </button>
          <button type="button" class="btn btn-primary btn-sm"
                @click="pushImages">更新頁面圖片
          </button>
        </div>
      </div>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
// import emitter from '..methods/emitter';

export default {
  data() {
    return {
      checkUser: '',
      isLoading: false,
      productIndex: [],
      orderCompleted: [],
    };
  },
  methods: {
    upload(location) {
      this.isLoading = true;
      let imgInput = '';
      let imgInputTitle = '';
      switch (location) {
        case 'productIndex':
          imgInput = document.querySelector('#productIndex');
          imgInputTitle = document.querySelector('#productIndexTitle');
          break;
        case 'orderCompleted':
          imgInput = document.querySelector('#orderCompleted');
          imgInputTitle = document.querySelector('#orderCompletedTitle');
          break;
        default:
          console.log('no');
          break;
      }
      const file = imgInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', file);
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(apiUrl, formData)
        .then((res) => {
          if (res.data.success) {
            const img = {
              title: imgInputTitle.value,
              imgUrl: res.data.imageUrl,
            };
            if (location === 'productIndex') {
              this.productIndex.push(img);
              console.log(this.productIndex);
            } else if (location === 'orderCompleted') {
              this.orderCompleted.push(img);
              console.log(this.orderCompleted);
            }
            this.isLoading = false;
            this.$swal({ text: '上傳成功', icon: 'success' });
          } else {
            this.isLoading = false;
            console.log(res);
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.dir(err);
        });
    },
    pushImages() {
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      this.$http.defaults.headers.common.Authorization = token;
      const apiUrl = `${process.env.VUE_APP_URL}api/user/check`;
      this.$http.post(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.checkUser = true;
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
            this.$router.push('/login');
          }
        });
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
