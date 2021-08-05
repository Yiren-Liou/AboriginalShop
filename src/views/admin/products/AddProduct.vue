<template>
  <nav
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
    class="mb-3"
  >
    <ol class="breadcrumb">
      <li class="breadcrumb-item">商品</li>
      <li class="breadcrumb-item">
        <router-link to="/admin/products">全部商品</router-link>
      </li>
      <li class="breadcrumb-item active">新增商品</li>
    </ol>
  </nav>
  <div class="d-flex justify-content-end mb-3">
    <button
      type="button"
      class="btn btn-primary btn-sm me-3"
      @click="returnToProducts"
    >
      取消
    </button>
    <button class="btn btn-primary btn-sm" @click="addProduct">新增</button>
  </div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="info-tab"
        type="button"
        role="tab"
        data-bs-toggle="tab"
        data-bs-target="#info"
        aria-controls="info"
        aria-selected="true"
      >
        商品資訊
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="content-tab"
        type="button"
        role="tab"
        data-bs-toggle="tab"
        data-bs-target="#content"
        aria-controls="content"
        aria-selected="false"
      >
        商品內容
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="images-tab"
        type="button"
        role="tab"
        data-bs-toggle="tab"
        data-bs-target="#images"
        aria-controls="images"
        aria-selected="false"
      >
        商品圖片
      </button>
    </li>
  </ul>
  <div class="tab-content border-bottom p-4" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="info"
      role="tabpanel"
      aria-labelledby="info-tab"
    >
      <Form v-slot="{ errors }" @submit="checkBasicInfo">
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="productTitle" class="form-label"
                >商品名稱<sup>*</sup></label
              >
              <Field
                type="text"
                class="form-control"
                id="productTitle"
                placeholder="請輸入商品標題"
                v-model="newProduct.title"
                name="商品名稱"
                rules="required"
                :class="{ 'is-invalid': errors['商品名稱'] }"
              >
              </Field>
              <error-message
                name="商品名稱"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="productDescription" class="form-label"
                >商品描述<sup>*</sup></label
              >
              <Field
                type="text"
                class="form-control"
                id="productDescription"
                placeholder="請輸入商品描述"
                v-model="newProduct.description"
                name="商品描述"
                rules="required"
                as="textarea"
                :class="{ 'is-invalid': errors['商品描述'] }"
                style="height: 210px"
              >
              </Field>
              <error-message
                name="商品描述"
                class="invalid-feedback"
              ></error-message>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row">
              <CategorySelect
                @emit-category="getCategory"
                :add="isAdd"
              ></CategorySelect>
              <div class="col-md-6 mb-3">
                <label for="productOriPrice" class="form-label"
                  >原價<sup>*</sup></label
                >
                <Field
                  type="number"
                  class="form-control"
                  id="productOriPrice"
                  placeholder="請輸入商品原價"
                  v-model.number="newProduct.origin_price"
                  name="商品原價"
                  rules="min_value:1|required"
                  min="1"
                  :class="{ 'is-invalid': errors['商品原價'] }"
                >
                </Field>
                <error-message
                  name="商品原價"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-md-6 mb-3">
                <label for="productPrice" class="form-label"
                  >售價<sup>*</sup></label
                >
                <Field
                  type="number"
                  class="form-control"
                  id="productPrice"
                  placeholder="請輸入商品售價"
                  v-model.number="newProduct.price"
                  name="商品售價"
                  rules="min_value:1|required"
                  min="1"
                  :class="{ 'is-invalid': errors['商品售價'] }"
                >
                </Field>
                <error-message
                  name="商品售價"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-md-6 mb-3">
                <label for="productUnit" class="form-label"
                  >單位<sup>*</sup></label
                >
                <Field
                  type="text"
                  class="form-control"
                  id="productUnit"
                  placeholder="請輸入商品單位"
                  v-model="newProduct.unit"
                  name="商品單位"
                  rules="required"
                  :class="{ 'is-invalid': errors['商品單位'] }"
                >
                </Field>
                <error-message
                  name="商品單位"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-md-6 mb-3 d-flex">
                <div class="form-check mt-5 me-4">
                  <input class="form-check-input me-2" type="checkbox" value=""
                          v-model="newProduct.is_season">
                  <label class="form-check-label" for="seasonProduct">
                    季節限定
                  </label>
                </div>
                <div class="form-check mt-5">
                  <input class="form-check-input me-2" type="checkbox" value=""
                          v-model="newProduct.is_sell">
                  <label class="form-check-label" for="sellProduct">
                    限時特惠
                  </label>
                </div>
              </div>
              <IsEnabledSelect
                @emit-is-enabled="getIsEnabled"
              ></IsEnabledSelect>
            </div>
          </div>
        </div>
      </Form>
    </div>
    <div
      class="tab-pane fade"
      id="content"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <Form v-slot="{ errors }" @submit="checkBasicInfo">
         <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="productMainContent" class="form-label">
                主要內容<sup>*</sup>
              </label>
              <Field
                type="text"
                class="form-control"
                id="productMainContent"
                placeholder="請輸入主要內容"
                v-model="newProduct.main_content"
                name="主要內容"
                rules="required"
                as="textarea"
                :class="{ 'is-invalid': errors['主要內容'] }"
                style="height: 160px"
              >
              </Field>
              <error-message
                name="主要內容"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="productSubContent" class="form-label">
                說明內容<sup>*</sup>
              </label>
              <Field
                type="text"
                class="form-control"
                id="productSubContent"
                placeholder="請輸入說明內容"
                v-model="newProduct.sub_content"
                name="說明內容"
                rules="required"
                as="textarea"
                style="height: 160px"
                :class="{ 'is-invalid': errors['說明內容'] }"
              >
              </Field>
              <error-message
                name="說明內容"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="productExplanation " class="form-label">
                補充內容<sup>*</sup>
              </label>
              <Field
                type="text"
                class="form-control"
                id="productExplanation "
                placeholder="請輸入補充內容"
                v-model="newProduct.explanation "
                name="補充內容"
                rules="required"
                as="textarea"
                style="height: 160px"
                :class="{ 'is-invalid': errors['補充內容'] }"
              >
              </Field>
              <error-message
                name="補充內容"
                class="invalid-feedback"
              ></error-message>
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="productSpec" class="form-label">
                商品規格<sup>*</sup>
              </label>
              <Field
                type="text"
                class="form-control"
                id="productSpec"
                placeholder="請輸入商品規格"
                v-model="newProduct.spec"
                name="商品規格"
                rules="required"
                as="textarea"
                style="height: 160px"
                :class="{ 'is-invalid': errors['商品規格'] }"
              >
              </Field>
              <error-message
                name="商品規格"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="productPrecautions" class="form-label"
                >注意事項</label
              >
              <textarea
                v-model="newProduct.precautions"
                class="form-control"
                id="productPrecautions"
                style="height: 160px"
                placeholder="請輸入注意事項"
              >
              </textarea>
            </div>
          </div>
        </div>
      </Form>
    </div>
    <div
      class="tab-pane fade"
      id="images"
      role="tabpanel"
      aria-labelledby="images-tab"
    >
      <div class="row">
        <ImagesInput @emit-images="getImages" :add="isAdd"></ImagesInput>
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
import CategorySelect from '@/components/admin/Select_productCategory.vue';
import IsEnabledSelect from '@/components/admin/Select_isEnabled.vue';
import ImagesInput from '@/components/admin/Input_image.vue';

export default {
  data() {
    return {
      newProduct: {},
      isAdd: true,
      isLoading: false,
    };
  },
  emits: ['emit-readonly', 'emit-order'],
  props: ['readStatus', 'pushOrder'],
  components: {
    CategorySelect,
    IsEnabledSelect,
    ImagesInput,
  },
  methods: {
    returnToProducts() {
      this.newProduct = {};
      this.$router.push('/admin/products');
    },
    addProduct() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`;
      this.$http
        .post(apiUrl, { data: this.newProduct })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
            this.$router.push('/admin/products');
          } else {
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getCategory(mainCategoryValue, subCategoryValue) {
      this.newProduct.category = mainCategoryValue;
      this.newProduct.sub_category = subCategoryValue;
    },
    getIsEnabled(isSell, sellTime) {
      this.newProduct.is_enabled = isSell;
      this.newProduct.sell_time = sellTime;
    },
    getImages(img) {
      this.newProduct.imagesUrl = img;
      this.newProduct.imagesUrl.sort((a, b) => a.imgId - b.imgId);
    },
    checkBasicInfo() {
      this.$swal({
        text: '儲存成功',
        icon: 'success',
        confirmButtonColor: '#ffbc1f',
      });
    },
  },
};
</script>
