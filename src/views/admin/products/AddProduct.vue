<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">商品</li>
      <li class="breadcrumb-item">
        <router-link to='/admin/products'>全部商品</router-link>
      </li>
      <li class="breadcrumb-item active">新增商品</li>
    </ol>
  </nav>
  <div class="d-flex justify-content-end mb-3">
    <button class="btn btn-primary btn-sm d-flex align-items-center me-3" @click="cancelAdd">
      取消
    </button>
    <button class="btn btn-primary btn-sm d-flex align-items-center">
      新增
    </button>
  </div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="info-tab" type="button" role="tab"
                data-bs-toggle="tab" data-bs-target="#info"
                aria-controls="info" aria-selected="true">
                商品資訊
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="content-tab" type="button" role="tab"
              data-bs-toggle="tab" data-bs-target="#content"
              aria-controls="content" aria-selected="false">
              商品內容
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="images-tab" type="button" role="tab"
              data-bs-toggle="tab" data-bs-target="#images"
              aria-controls="images" aria-selected="false">
              商品圖片
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="recommend-tab" type="button" role="tab"
              data-bs-toggle="tab" data-bs-target="#recommend"
              aria-controls="recommend" aria-selected="false">
              推薦商品
      </button>
    </li>
  </ul>
  <div class="tab-content border-bottom p-4" id="myTabContent">
    <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="productTitle" class="form-label">商品名稱<sup>*</sup></label>
            <input type="text" class="form-control" id="productTitle"
                  placeholder="請輸入商品標題" v-model="product.title">
          </div>
          <div class="mb-3">
            <label for="productDescription" class="form-label">商品描述<sup>*</sup></label>
            <textarea v-model="product.description" class="form-control" id="productDescription"
                      placeholder="請輸入商品描述" style="height: 210px">
            </textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <CategorySelect></CategorySelect>
            <div class="col-md-6 mb-3">
              <label for="productOriPrice" class="form-label">原價<sup>*</sup></label>
              <input v-model="product.origin_price" type="number"
                    class="form-control" id="productOriPrice" placeholder="請輸入商品原價">
            </div>
            <div class="col-md-6 mb-3">
              <label for="productPrice" class="form-label">售價<sup>*</sup></label>
              <input v-model="product.price" type="number" class="form-control"
                    id="productPrice" placeholder="請輸入商品售價">
            </div>
            <div class="col-md-6 mb-3">
              <label for="productUnit" class="form-label">單位<sup>*</sup></label>
              <input v-model="product.unit" type="text" class="form-control"
                    id="productUnit" placeholder="請輸入商品單位">
            </div>
            <div class="col-md-6 mb-3">
              <label for="coupon" class="form-label">適用折價券</label>
              <select id="coupon" class="form-select" v-model="product.coupons">
                <option value="" selected>請選擇一個折價券</option>
                <!-- <option v-for="(item, i) in subCategory" :key=item
                        :value=i>{{ item }}
                </option> -->
              </select>
            </div>
            <IsEnabledSelect></IsEnabledSelect>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="content" role="tabpanel" aria-labelledby="profile-tab">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="productMainContent" class="form-label">
              主要內容<span>( 搭配說明圖片1.2 )</span><sup>*</sup>
            </label>
            <textarea v-model="product.main_content" class="form-control" id="productMainContent"
                      placeholder="請輸入主要內容" style="height: 172px">
            </textarea>
          </div>
        </div>
        <div class="col">
          <div class="mb-3">
            <label for="productSubContent" class="form-label">
              說明內容<span>( 搭配說明圖片3.4.5 )</span><sup>*</sup>
            </label>
            <textarea v-model="product.sub_content" class="form-control" id="productSubContent"
                      placeholder="請輸入說明內容">
            </textarea>
          </div>
          <div class="mb-3">
            <label for="productPrecautions" class="form-label">注意事項</label>
            <textarea v-model="product.precautions" class="form-control" id="productPrecautions"
                      placeholder="請輸入注意事項">
            </textarea>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
      <div class="row">
        <ImagesInput @emit-images="getImages"></ImagesInput>
      </div>
    </div>
    <div class="tab-pane fade" id="recommend" role="tabpanel" aria-labelledby="recommend-tab">
      <div class="row">
        <Recommended @emit-recommend='getRecommend'></Recommended>
      </div>
    </div>
  </div>
  <!-- <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品資訊</h2>
  <div class="row">
    <div class="col-md-6">
      <div class="mb-3">
        <label for="productTitle" class="form-label">商品名稱<sup>*</sup></label>
        <input type="text" class="form-control" id="productTitle"
               placeholder="請輸入商品標題" v-model="product.title">
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">商品描述<sup>*</sup></label>
        <textarea v-model="product.description" class="form-control" id="productDescription"
                  placeholder="請輸入商品描述" style="height: 210px">
        </textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <CategorySelect></CategorySelect>
        <div class="col-md-6 mb-3">
          <label for="productOriPrice" class="form-label">原價<sup>*</sup></label>
          <input v-model="product.origin_price" type="number"
                 class="form-control" id="productOriPrice" placeholder="請輸入商品原價">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productPrice" class="form-label">售價<sup>*</sup></label>
          <input v-model="product.price" type="number" class="form-control"
                 id="productPrice" placeholder="請輸入商品售價">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productUnit" class="form-label">單位<sup>*</sup></label>
          <input v-model="product.unit" type="text" class="form-control"
                 id="productUnit" placeholder="請輸入商品單位">
        </div>
        <div class="col-md-6 mb-3">
          <label for="coupon" class="form-label">適用折價券</label>
          <select id="coupon" class="form-select" v-model="product.coupons">
            <option value="" selected>請選擇一個折價券</option>
          </select>
        </div>
        <IsEnabledSelect></IsEnabledSelect>
      </div>
    </div>
  </div>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品內容</h2>
  <div class="row mb-6">
    <div class="col">
      <div class="mb-3">
        <label for="productMainContent" class="form-label">
          主要內容<span>( 搭配說明圖片1.2 )</span><sup>*</sup>
        </label>
        <textarea v-model="product.main_content" class="form-control" id="productMainContent"
                  placeholder="請輸入主要內容" style="height: 172px">
        </textarea>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <label for="productSubContent" class="form-label">
          說明內容<span>( 搭配說明圖片3.4.5 )</span><sup>*</sup>
        </label>
        <textarea v-model="product.sub_content" class="form-control" id="productSubContent"
                  placeholder="請輸入說明內容">
        </textarea>
      </div>
      <div class="mb-3">
        <label for="productPrecautions" class="form-label">注意事項</label>
        <textarea v-model="product.precautions" class="form-control" id="productPrecautions"
                  placeholder="請輸入注意事項">
        </textarea>
      </div>
    </div>
  </div>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品圖片</h2>
  <div class="row mb-6">
    <ImagesInput></ImagesInput>
  </div>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">推薦商品</h2>
  <div class="row mb-6">
    <Recommended @emit-recommend='getRecommend'></Recommended>
  </div> -->
</template>

<script>
import CategorySelect from '@/components/admin/Select_productCategory.vue';
import IsEnabledSelect from '@/components/admin/Select_isEnabled.vue';
import ImagesInput from '@/components/admin/Input_image.vue';
import Recommended from '@/components/admin/Select_recommand.vue';

export default {
  data() {
    return {
      product: {},
    };
  },
  components: {
    CategorySelect,
    IsEnabledSelect,
    ImagesInput,
    Recommended,
  },
  methods: {
    cancelAdd() {
      this.product = {};
      this.$router.push('/admin/products');
    },
    getRecommend(list) {
      this.product.recommendList = list;
      console.log(this.product.recommendList);
    },
    getImages(img) {
      this.product.imagesUrl = img;
    },
  },
};
</script>
