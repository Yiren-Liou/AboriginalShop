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
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品資訊</h2>
  <div class="row mb-6">
    <div class="col-md-6">
      <div class="mb-3">
        <label for="productTitle" class="form-label">商品名稱<sup>*</sup></label>
        <input type="text" class="form-control" id="productTitle" placeholder="請輸入商品標題">
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">商品描述<sup>*</sup></label>
        <textarea class="form-control" id="productDescription"
                  placeholder="請輸入商品描述" style="height: 210px">
        </textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <CategorySelect></CategorySelect>
        <div class="col-md-6 mb-3">
          <label for="productOriPrice" class="form-label">原價<sup>*</sup></label>
          <input type="number" class="form-control" id="productOriPrice" placeholder="請輸入商品原價">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productPrice" class="form-label">售價<sup>*</sup></label>
          <input type="number" class="form-control" id="productPrice" placeholder="請輸入商品售價">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productUnit" class="form-label">單位<sup>*</sup></label>
          <input type="text" class="form-control" id="productUnit" placeholder="請輸入商品單位">
        </div>
        <div class="col-md-6 mb-3">
          <label for="coupon" class="form-label">適用折價券</label>
          <select id="coupon" class="form-select">
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
    <div class="col-md-4">
       <div class="mb-3">
        <label for="productMainImg" class="form-label">商品首圖<sup>*</sup></label>
        <input type="file" class="form-control" id="productMainImg">
        <div class="img-fluid"></div>
      </div>
    </div>
    <SubContentImg></SubContentImg>
  </div>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">推薦商品</h2>
  <div class="row mb-6">
    <div class="col-md-4">
       <div class="mb-3">
        <label for="recommendImg1" class="form-label">推薦商品1<sup>*</sup></label>
        <select id="recommendImg1" class="form-select">
          <option value="" selected>請選擇一個推薦商品</option>
          <!-- <option v-for="(item, i) in subCategory" :key=item
                  :value=i>{{ item }}
          </option> -->
        </select>
      </div>
    </div>
    <div class="col-md-4">
      <div class="mb-3">
        <label for="recommendImg2" class="form-label">推薦商品2<sup>*</sup></label>
        <select id="recommendImg2" class="form-select">
          <option value="" selected>請選擇一個推薦商品</option>
          <!-- <option v-for="(item, i) in subCategory" :key=item
                  :value=i>{{ item }}
          </option> -->
        </select>
        <div class="img-fluid"></div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="mb-3">
        <label for="recommendImg3" class="form-label">推薦商品3<sup>*</sup></label>
        <select id="recommendImg3" class="form-select">
          <option value="" selected>請選擇一個推薦商品</option>
          <!-- <option v-for="(item, i) in subCategory" :key=item
                  :value=i>{{ item }}
          </option> -->
        </select>
        <div class="img-fluid"></div>
      </div>
    </div>
    <div class="col-md-4 d-flex align-items-center">
      <button class="btn btn-primary d-flex align-items-center me-2">
        <span class="material-icons">add</span>
        新增推薦商品
      </button>
      <strong class="me-2 text-danger">最多推薦 6 項商品喔!</strong>
    </div>
  </div>
  <div class="d-flex justify-content-end">
    <button class="btn btn-primary d-flex align-items-center me-3">
      <span class="material-icons me-2">close</span>取消
    </button>
    <button class="btn btn-primary d-flex align-items-center">
      <span class="material-icons me-2">done</span>確定新增
    </button>
  </div>
</template>

<script>
import CategorySelect from '@/components/admin/Select_productCategory.vue';
import IsEnabledSelect from '@/components/admin/Select_isEnabled.vue';
import SubContentImg from '@/components/admin/Input_img.vue';

export default {
  data() {
    return {
      product: {},
    };
  },
  components: {
    CategorySelect,
    IsEnabledSelect,
    SubContentImg,
  },
};
</script>
