<template>
  <!-- <div class="img-fluid"
  :style="{ backgroundImage: 'url(' + productInfo.imageUrl + ')' }"></div> -->
  <div class="col-md-4" v-for="(num, i) in 4" :key="num">
    <div class="mb-3">
      <label :for="`productImg${num}`" class="form-label">
        說明圖片{{ num }}<sup>*</sup>
      </label>
      <input type="file" class="form-control" :id="`productImg${num}`" @change="previewImage">
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
