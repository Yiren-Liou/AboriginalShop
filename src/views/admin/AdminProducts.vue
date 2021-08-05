<template>
  <nav
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
    class="mb-3"
  >
    <ol class="breadcrumb">
      <li class="breadcrumb-item">商品</li>
      <li class="breadcrumb-item active">全部商品</li>
    </ol>
  </nav>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <router-link to="/admin/products/addProduct" class="btn btn-primary">
      新增商品
    </router-link>
    <div class="d-flex">
      <div class="input-group me-3">
        <input
          type="text"
          class="form-control"
          placeholder="請輸入商品名稱"
          aria-label="search"
          aria-describedby="searchBtn"
          v-model="search"
        />
        <span class="input-group-text material-icons bg-transparent"
          >search</span
        >
      </div>
      <div class="dropdown">
        <button
          class="
            material-icons
            btn btn-outline-secondary
            d-flex
            justify-content-center
            align-items-center
            me-2
          "
          type="button"
          id="filterBtn"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          sort
        </button>
        <ul class="dropdown-menu" aria-labelledby="filterBtn">
          <li class="mb-2">
            <a
              class="dropdown-item"
              href="#"
              data-field="sellTime_new_old"
              @click.prevent="filterItem"
            >
              上架時間新到舊
            </a>
          </li>
          <li class="mb-2">
            <a
              class="dropdown-item"
              href="#"
              data-field="sellTime_old_new"
              @click.prevent="filterItem"
            >
              上架時間舊到新
            </a>
          </li>
          <li class="mb-2">
            <a
              class="dropdown-item"
              href="#"
              data-field="originPrice_low_high"
              @click.prevent="filterItem"
            >
              原價低到高
            </a>
          </li>
          <li class="mb-2">
            <a
              class="dropdown-item"
              href="#"
              data-field="originPrice_high_low"
              @click.prevent="filterItem"
            >
              原價高到低
            </a>
          </li>
          <li class="mb-2">
            <a
              class="dropdown-item"
              href="#"
              data-field="price_low_high"
              @click.prevent="filterItem"
            >
              售價低到高
            </a>
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              data-field="price_high_low"
              @click.prevent="filterItem"
            >
              售價高到低
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <table class="table align-middle">
    <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">商品圖片</th>
        <th scope="col">商品名稱</th>
        <th scope="col">分類</th>
        <th scope="col">次分類</th>
        <th scope="col">原價</th>
        <th scope="col">售價</th>
        <th scope="col">上架狀態</th>
        <th scope="col">查看</th>
        <th scope="col">編輯</th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody v-if="!productData.length" class="text-center">
      <tr>
        目前沒有任何商品呦
      </tr>
    </tbody>
    <tbody v-else class="text-center">
      <tr v-for="(item, i) in filterProducts" :key="item.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>
          <div
            class="productImg img-fluid bg-cover bg-center"
            :style="{ backgroundImage: `url(${item.imagesUrl[0].imgUrl})` }"
          ></div>
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.sub_category }}</td>
        <td class="text-center">NT {{ $toCurrency(item.origin_price) }}</td>
        <td class="text-center">NT {{ $toCurrency(item.price) }}</td>
        <td class="text-center" :class="{ 'text-secondary': !item.is_enabled }">
          {{ item.is_enabled ? '上架' : '未上架' }}
        </td>
        <td>
          <router-link
            :to="`product/${item.id}`"
            class="material-icons btn"
            @click="emitReadonly(true)"
            >remove_red_eye
          </router-link>
        </td>
        <td class="text-center">
          <router-link
            :to="`product/${item.id}`"
            class="material-icons btn"
            @click="emitReadonly(false)"
            >edit
          </router-link>
        </td>
        <td class="text-center">
          <button
            type="button"
            class="btn d-flex justify-content-center w-100"
            @click="delProduct(item.id)"
          >
            <span class="material-icons">delete</span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center mb-4">
    <Pagination :page="pagination" @emit-page="getProducts"></Pagination>
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
import Pagination from '@/components/Pagination.vue';

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
      search: '',
      isLoading: false,
    };
  },
  emits: ['emit-readonly', 'emit-order'],
  props: ['readStatus', 'pushOrder'],
  components: {
    Pagination,
  },
  computed: {
    filterProducts() {
      return this.productData.filter((item) => item.title.match(this.search));
    },
  },
  methods: {
    getProducts(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.productData = res.data.products;
            this.tempData.data = { imagesUrl: [] };
            this.pagination = res.data.pagination;
            this.isLoading = false;
            console.log(this.productData);
          } else {
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
            this.isLoading = false;
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
    getProduct(e) {
      this.tempData.data = {
        imagesUrl: [],
      };
      this.tempData.data = JSON.parse(JSON.stringify(e));
      if (this.tempData.data.imagesUrl === undefined) {
        this.tempData.data.imagesUrl = [];
      }
    },
    delProduct(id) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
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
            this.getProducts();
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
    emitReadonly(status) {
      this.$emit('emit-readonly', status);
    },
    filterItem(e) {
      e.preventDefault();
      const action = e.target.getAttribute('data-field');
      switch (action) {
        case 'price_low_high':
          this.productData.sort((a, b) => a.price - b.price);
          break;
        case 'price_high_low':
          this.productData.sort((a, b) => b.price - a.price);
          break;
        case 'originPrice_low_high':
          this.productData.sort((a, b) => a.origin_price - b.origin_price);
          break;
        case 'originPrice_high_low':
          this.productData.sort((a, b) => b.origin_price - a.origin_price);
          break;
        case 'sellTime_new_old':
          this.productData.sort((a, b) => {
            const date1 = this.$date.toUnix(a.sell_time);
            const date2 = this.$date.toUnix(b.sell_time);
            return date2 - date1;
          });
          break;
        case 'sellTime_old_new':
          this.productData.sort((a, b) => {
            const date1 = this.$date.toUnix(a.sell_time);
            const date2 = this.$date.toUnix(b.sell_time);
            return date1 - date2;
          });
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.isLoading = true;
    this.getProducts();
  },
};
</script>
