<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">商品</li>
      <li class="breadcrumb-item active">全部商品</li>
    </ol>
  </nav>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <router-link to="/admin/products/addProduct" class="btn btn-primary d-flex align-items-center">
        <span class="material-icons me-2">add</span>新增商品
    </router-link>
    <div class="d-flex">
      <Search class="me-2"></Search>
      <Filter></Filter>
    </div>
  </div>
  <table class="table align-middle">
    <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">商品圖片</th>
        <th scope="col">商品名稱</th>
        <th scope="col">分類</th>
        <th scope="col">原價</th>
        <th scope="col">售價</th>
        <th scope="col">上架狀態</th>
        <th scope="col">查看</th>
        <th scope="col">編輯</th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr v-for="(item, i) in productData" :key="item.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>
          <div class="productImg img-fluid bg-cover bg-center"
               :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.category }}</td>
        <td class="text-center">NT {{ $toCurrency(item.origin_price) }}</td>
        <td class="text-center">NT {{ $toCurrency(item.price )}}</td>
        <td class="text-center">
          <p v-if="item.is_enabled" class="fw-bold text-warning mb-0">已上架</p>
          <p v-else class="mb-0">未上架</p>
        </td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">remove_red_eye</router-link>
        </td>
        <td class="text-center">
          <router-link :to="`products/${item.id}`" @click="getProduct(item)"
                      class="material-icons btn">edit
          </router-link>
        </td>
        <td class="text-center">
          <input class="form-check-input" type="checkbox" value="" id="delCheck">
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center mb-4">
    <Pagination :page="pagination" @emit-page="getProducts"></Pagination>
  </div>
  <FeatureBtns></FeatureBtns>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import Search from '@/components/Search.vue';
import Filter from '@/components/admin/Filter.vue';
import FeatureBtns from '@/components/admin/FeatureBtns.vue';

export default {
  data() {
    return {
      productData: [],
      tempData: {
        data: {
          imagesUrl: [],
        },
      },
      isEnabled: [0, 1],
      updateStatusText: '',
      pagination: '',
      alertText: '',
      isLoading: false,
    };
  },
  components: {
    Search,
    Filter,
    FeatureBtns,
    Pagination,
  },
  methods: {
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.productData = res.data.products;
            this.tempData.data = { imagesUrl: [] };
            this.pagination = res.data.pagination;
            this.isLoading = false;
          } else {
            this.$swal({ text: res.data.message, icon: 'error' });
            this.isLoading = false;
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getProduct(e) {
      this.tempData.data = {
        imagesUrl: [],
      };
      this.tempData.data = JSON.parse(JSON.stringify(e));
      if (this.tempData.data.imagesUrl === undefined) {
        this.tempData.data.imagesUrl = [];
      }
    },
    updateData(status, tempData) {
      this.isLoading = true;
      let apiUrl = '';
      let apiMethod = '';
      if (status === 'add') {
        apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`;
        apiMethod = 'post';
      } else if (status === 'edit') {
        apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${tempData.id}`;
        apiMethod = 'put';
      }
      this.$http[apiMethod](apiUrl, { data: tempData })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$refs.productModal.hideModal();
            this.$swal({ text: res.data.message, icon: 'success' });
            this.getProducts();
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    delData(product) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.$swal({ text: res.data.message, icon: 'success' });
            this.getProducts();
          } else {
            console.log(res.data.message);
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        }).catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.isLoading = true;
    this.getProducts();
  },
};
</script>
