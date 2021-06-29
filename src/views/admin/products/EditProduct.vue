<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">商品</li>
      <li class="breadcrumb-item">全部商品</li>
      <li v-if="isEdit == 'edit'" class="breadcrumb-item">
        {{ productInfo.title }}
      </li>
      <li v-else class="breadcrumb-item active">{{ productInfo.title }}</li>
      <li v-if="isEdit == 'edit'" class="breadcrumb-item active">編輯</li>
    </ol>
  </nav>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品資訊</h2>
  <div class="row mb-6">
    <div class="col-md-6">
      <div class="mb-3">
        <label for="productTitle" class="form-label">商品名稱<sup>*</sup></label>
        <input type="text" class="form-control" id="productTitle" v-model='productInfo.title'>
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">商品描述<sup>*</sup></label>
        <textarea class="form-control" id="productDescription"
                  v-model='productInfo.description' style="height: 210px">
        </textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <CategorySelect :isEdit='isEdit'
                        :editMain='productInfo.category'
                        :editSub='productInfo.subCategory'>
        </CategorySelect>
        <div class="col-md-6 mb-3">
          <label for="productOriPrice" class="form-label">原價<sup>*</sup></label>
          <input  v-model.number='productInfo.origin_price'
                  type="number" class="form-control" id="productOriPrice">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productPrice" class="form-label">售價<sup>*</sup></label>
          <input v-model.number='productInfo.price'
                 type="number" class="form-control" id="productPrice">
        </div>
        <div class="col-md-6 mb-3">
          <label for="productUnit" class="form-label">單位<sup>*</sup></label>
          <input v-model='productInfo.unit'
                 type="text" class="form-control" id="productUnit">
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
        <div class="col-md-6 mb-3">
          <label for="productSellTime" class="form-label">上架時間</label>
          <input type="date" class="form-control" id="productSellTime" placeholder="請輸入商品單位">
        </div>
      </div>
    </div>
  </div>
  <h2 class="fontSizeM text-center border-bottom pb-2 mb-3">商品內容</h2>
  <div class="row mb-6">
    <div class="col">
      <div class="mb-3">
        <label for="productMainContent" class="form-label">
          主要內容
          <span>( 搭配說明圖片1.2 )</span>
          <sup>*</sup>
        </label>
        <textarea class="form-control" id="productMainContent"
                  placeholder="請輸入主要內容" style="height: 172px">
        </textarea>
      </div>
    </div>
    <div class="col">
      <div class="mb-3">
        <label for="productSubContent" class="form-label">
          說明內容
          <span>( 搭配說明圖片3.4.5 )</span>
          <sup>*</sup>
        </label>
        <textarea class="form-control" id="productSubContent"
                  placeholder="請輸入說明內容">
        </textarea>
      </div>
      <div class="mb-3">
        <label for="productPrecautions" class="form-label">注意事項</label>
        <textarea class="form-control" id="productPrecautions"
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
        <input v-if="isEdit === 'edit'" type="file" class="form-control mb-3" id="productMainImg">
        <div class="img-fluid editImg bg-cover bg-center"
             :style="{ backgroundImage: 'url(' + productInfo.imageUrl + ')' }">
        </div>
      </div>
    </div>
    <div class="col-md-4" v-for="(item, i) in productInfo.imagesUrl" :key=item>
      <div class="mb-3">
        <label for="productImg1" class="form-label">說明圖片{{ i + 1 }}<sup>*</sup></label>
        <input v-if="isEdit === 'edit'" type="file" class="form-control mb-3" id="productImg1">
        <div class="img-fluid editImg bg-cover bg-center"
              :style="{ backgroundImage: 'url(' + item + ')' }">
        </div>
      </div>
    </div>
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
    <div v-if="isEdit == 'edit'" class="col-md-4 d-flex align-items-center">
      <button class="btn btn-primary d-flex align-items-center me-2">
        <span class="material-icons">add</span>
        新增推薦商品
      </button>
      <strong class="me-2 text-danger">最多推薦 6 項商品喔!</strong>
    </div>
  </div>
  <div v-if="isEdit == 'readonly'" class="d-flex justify-content-between">
    <router-link class="btn btn-primary d-flex align-items-center me-3" to='/admin/products'>
      <span class="material-icons me-2">redo</span>返回商品列表
    </router-link>
    <div class="d-flex">
      <button class="btn btn-primary d-flex align-items-center me-3">
        <span class="material-icons me-2">delete</span>刪除
      </button>
      <button class="btn btn-primary d-flex align-items-center" @click="edit">
        <span class="material-icons me-2">edit</span>編輯
      </button>
    </div>
  </div>
  <div v-else class="d-flex justify-content-end">
    <div class="d-flex">
      <button @click="cancelEdit()"
              class="btn btn-primary d-flex align-items-center me-3">
        <span class="material-icons me-2">close</span>取消
      </button>
      <button class="btn btn-primary d-flex align-items-center" @click="edit">
        <span class="material-icons me-2">check</span>確定修改
      </button>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import CategorySelect from '@/components/admin/Select_productCategory.vue';

export default {
  data() {
    return {
      productInfo: {},
      isEdit: 'readonly',
      isLoading: false,
    };
  },
  components: {
    CategorySelect,
  },
  methods: {
    cancelEdit() {
      this.productInfo = {};
      this.$router.push('/admin/products');
    },
    getProduct() {
      const { id } = this.$route.params;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.productInfo = res.data.product;
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    readonly() {
      document.querySelectorAll('.form-control').forEach((item) => {
        item.setAttribute('disabled', true);
      });
      document.querySelectorAll('.form-select').forEach((item) => {
        item.setAttribute('disabled', true);
      });
    },
    edit() {
      this.isEdit = 'edit';
      document.querySelectorAll('.form-control').forEach((item) => {
        item.setAttribute('disabled', false);
      });
      document.querySelectorAll('.form-select').forEach((item) => {
        item.setAttribute('disabled', false);
      });
    },
  },
  mounted() {
    this.isLoading = true;
    this.getProduct();
    this.readonly();
  },
};
</script>
