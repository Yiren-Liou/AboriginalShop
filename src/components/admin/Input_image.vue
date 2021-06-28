<template>
  <div class="col-md-4" v-for="(num, i) in 6" :key="num">
    <div class="mb-3">
      <template v-if="i == 0">
        <label for="productMainImg" class="form-label">商品首圖<sup>*</sup></label>
        <input type="file" class="form-control mb-3" id="productMainImg" @change="previewImage">
      </template>
      <template v-else>
        <label :for="`productImg${i}`" class="form-label">說明圖片{{ i }}<sup>*</sup></label>
        <input type="file" class="form-control mb-3" :id="`productImg${i}`" @change="previewImage">
      </template>
      <div v-if="previewImg[i]" class="img-fluid editImg bg-cover bg-center"
           :style="{ backgroundImage: 'url(' + previewImg[i] + ')' }">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImg: [],
      images: [],
    };
  },
  methods: {
    previewImage(event) {
      const img = event.target;
      if (img.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewImg.push(e.target.result);
        };
        reader.readAsDataURL(img.files[0]);
        this.images.push(img.files[0]);
      }
    },
    emitImgFiles() {
      this.$emit('emit-img-files', this.images);
    },
  },
};
</script>
