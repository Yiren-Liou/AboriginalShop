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
      <li v-if="readonly == 'edit'" class="breadcrumb-item">
        {{ productInfo.title }}
      </li>
      <li v-else class="breadcrumb-item active">{{ productInfo.title }}</li>
      <li v-if="!readonly" class="breadcrumb-item active">編輯</li>
    </ol>
  </nav>
  <div v-if="readonly" class="d-flex justify-content-between mb-4">
    <router-link to="/admin/products" class="btn btn-primary btn-sm"
      >返回</router-link
    >
    <div class="d-flex">
      <button
        type="button"
        class="btn btn-primary btn-sm me-3"
        @click="delProduct()"
      >
        刪除
      </button>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        @click="pushReadStatus(false)"
      >
        編輯
      </button>
    </div>
  </div>
  <div v-else class="d-flex justify-content-end mb-3">
    <button
      type="button"
      class="btn btn-primary btn-sm me-3"
      @click="cancelEdit"
    >
      取消
    </button>
    <button class="btn btn-primary btn-sm" @click="update()">確定</button>
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
                class="form-control disabled"
                id="productTitle"
                placeholder="請輸入商品標題"
                v-model="productInfo.title"
                name="商品名稱"
                rules="required"
                :class="{ 'is-invalid': errors['商品名稱'] }"
                :disabled="readonly"
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
                v-model="productInfo.description"
                name="商品描述"
                rules="required"
                as="textarea"
                :class="{ 'is-invalid': errors['商品描述'] }"
                style="height: 210px"
                :disabled="readonly"
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
                :readonly="readonly"
                :edit-main="productInfo.category"
                :edit-sub="productInfo.sub_category"
                @emit-category="getCategory"
              >
              </CategorySelect>
              <div class="col-md-6 mb-3">
                <label for="productOriPrice" class="form-label"
                  >原價<sup>*</sup></label
                >
                <Field
                  type="number"
                  class="form-control"
                  id="productOriPrice"
                  placeholder="請輸入商品原價"
                  v-model.number="productInfo.origin_price"
                  name="商品原價"
                  rules="min_value:1|required"
                  min="1"
                  :class="{ 'is-invalid': errors['商品原價'] }"
                  :disabled="readonly"
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
                  v-model.number="productInfo.price"
                  name="商品售價"
                  rules="min_value:1|required"
                  min="1"
                  :class="{ 'is-invalid': errors['商品售價'] }"
                  :disabled="readonly"
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
                  v-model="productInfo.unit"
                  name="商品單位"
                  rules="required"
                  :class="{ 'is-invalid': errors['商品單位'] }"
                  :disabled="readonly"
                >
                </Field>
                <error-message
                  name="商品單位"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="col-md-6 mb-3">
                <div class="d-flex mt-5">
                  <div class="form-check mb-3 me-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="seasonProduct"
                      :disabled="readonly"
                      v-model="productInfo.is_season"
                    />
                    <label class="form-check-label" for="seasonProduct">
                      季節限定
                    </label>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="sellProduct"
                      :disabled="readonly"
                      v-model="productInfo.is_sell"
                    />
                    <label class="form-check-label" for="sellProduct">
                      限時特惠
                    </label>
                  </div>
                </div>
              </div>
              <IsEnabledSelect
                :readonly="readonly"
                :edit-sell="productInfo.is_enabled"
                :edit-time="productInfo.sell_time"
                @emit-is-enabled="getIsEnabled"
              >
              </IsEnabledSelect>
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
                v-model="productInfo.main_content"
                name="主要內容"
                rules="required"
                as="textarea"
                :class="{ 'is-invalid': errors['主要內容'] }"
                style="height: 160px"
                :disabled="readonly"
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
                v-model="productInfo.sub_content"
                name="說明內容"
                rules="required"
                as="textarea"
                style="height: 160px"
                :class="{ 'is-invalid': errors['說明內容'] }"
                :disabled="readonly"
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
              <textarea
                type="text"
                class="form-control"
                id="productExplanation "
                placeholder="請輸入補充內容"
                v-model="productInfo.explanation"
                name="補充內容"
                style="height: 160px"
                :disabled="readonly"
              >
              </textarea>
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
                v-model="productInfo.spec"
                name="商品規格"
                rules="required"
                as="textarea"
                style="height: 160px"
                :class="{ 'is-invalid': errors['商品規格'] }"
                :disabled="readonly"
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
                v-model="productInfo.precautions"
                class="form-control"
                id="productPrecautions"
                style="height: 160px"
                placeholder="請輸入注意事項"
                :disabled="readonly"
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
        <ImagesInput
          :product-images="productInfo.imagesUrl"
          :readonly="readonly"
          @emit-images="getImages"
        >
        </ImagesInput>
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
      routeId: this.$route.params.id,
      productInfo: {},
      readonly: false,
      isLoading: false,
    };
  },
  components: {
    CategorySelect,
    IsEnabledSelect,
    ImagesInput,
  },
  methods: {
    getProduct() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${this.routeId}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.productInfo = res.data.product;
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
          });
        });
    },
    cancelEdit() {
      this.isLoading = true;
      this.pushReadStatus(true);
      this.getProduct();
    },
    update() {
      this.pushReadStatus(true);
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.routeId}`;
      this.$http
        .put(apiUrl, { data: this.productInfo })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
          } else {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
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
    delProduct() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.routeId}`;
      this.$http
        .delete(apiUrl)
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
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
    getCategory(categorySort) {
      this.productInfo.categorySort = categorySort;
    },
    getIsEnabled(isSell, sellTime) {
      this.productInfo.is_enabled = isSell;
      this.productInfo.sell_time = sellTime;
    },
    getImages(img) {
      this.productInfo.imagesUrl = img;
      this.productInfo.imagesUrl.sort((a, b) => a.imgId - b.imgId);
    },
    checkBasicInfo() {
      this.$swal({
        text: '儲存成功',
        icon: 'success',
        confirmButtonColor: '#ffbc1f',
      });
    },
    pushReadStatus(status) {
      this.readonly = status;
      sessionStorage.setItem('readOnly', status);
    },
  },
  mounted() {
    this.isLoading = true;
    this.getProduct();
    this.readonly = JSON.parse(sessionStorage.getItem('readOnly'));
  },
};
</script>
