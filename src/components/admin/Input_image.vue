<template>
  <div class="col-md-4">
    <div class="mb-3">
      <label for="productMainImg" class="form-label">商品首圖<sup>*</sup></label>
      <input type="file" class="imgInput form-control mb-3"
             id="productMainImg" data-id="0">
      <template v-for="item in images" :key="item.imgId">
         <div v-if="0 == item.imgId" class="img-fluid editImg bg-cover bg-center"
           :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
        </div>
       </template>
    </div>
  </div>
  <div class="col-md-4" v-for="(num) in 5" :key="num">
    <div class="mb-3">
      <label :for="`productImg${num}`" class="form-label">說明圖片{{ num }}<sup>*</sup></label>
      <input type="file" class="imgInput form-control mb-3"
             :id="`productImg${num}`" :data-id="num">
       <template v-for="item in images" :key="item.imgId">
         <div v-if="num == item.imgId" class="img-fluid editImg bg-cover bg-center"
           :style="{ backgroundImage: 'url(' + item.imgUrl + ')' }">
        </div>
       </template>
    </div>
  </div>
  <div class="col-md-4 mx-auto d-flex justify-content-center mt-3">
    <button type="button" class="btn btn-primary" @click="emitImages()">上傳</button>
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
      images: [],
      isLoading: false,
    };
  },
  emits: ['emit-images'],
  methods: {
    emitImages() {
      // 驗證
      // const token =
      // document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      // this.$http.defaults.headers.common.Authorization = token;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`;
      const temp = document.querySelectorAll('.imgInput');
      temp.forEach((item) => {
        this.isLoading = true;
        const imgId = item.getAttribute('data-id');
        const file = item.files[0];
        console.log(imgId, file);
        const formData = new FormData();
        formData.append('file-to-upload', file);
        this.$http.post(apiUrl, formData)
          .then((res) => {
            if (res.data.success) {
              const imgInfo = {
                imgId,
                imgUrl: res.data.imageUrl,
              };
              this.images.push(imgInfo);
              this.$emit('emit-images', this.images);
              this.isLoading = false;
            } else {
              console.log(res);
            }
          })
          .catch((err) => {
            console.dir(err);
          });
      });
    },
    check() {
      const temp = document.querySelectorAll('.imgInput');
      temp.forEach((item) => {
        if (item.value === '') {
          item.classList.add('border-danger', 'shadow');
        }
      });
    },
  },
};
</script>
