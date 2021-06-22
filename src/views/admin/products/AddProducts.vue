<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">商品</p>
      </li>
      <li class="breadcrumb-item">
        <router-link to='/admin/products'>全部商品</router-link>
      </li>
      <li class="breadcrumb-item active">新增商品</li>
    </ol>
  </nav>
  <h2 class="fontSizeM text-center border-bottom pb-2">新增商品</h2>
  <div class="row">
    <div class="col-md-6">
      <div class="mb-3">
        <label for="productTitle" class="form-label">商品名稱</label>
        <input type="text" class="form-control" id="productTitle" placeholder="請輸入商品標題">
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">商品描述</label>
        <textarea class="form-control" id="productDescription"  placeholder="請輸入商品描述"></textarea>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row">
        <CategorySelect></CategorySelect>
        <!-- <div class="col-md-6 mb-3">
          <label for="mainCategory" class="form-label">分類</label>
          <select id="mainCategory" class="form-select">
            <option value="" selected>請選擇一個分類</option>
            <option v-for="(item, i) in mainCategory" :key=item :value=i>{{ item }}</option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="mainCategory" class="form-label">次分類</label>
          <select id="mainCategory" class="form-select">
            <option value="" selected>請選擇一個次分類</option>
            <option v-for="(item, i) in subCategory" :key=item
                    :value=i>{{ item }}
            </option>
          </select>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script>
import CategorySelect from '@/components/admin/ProductCategory.vue';

export default {
  data() {
    return {
      mainCategory: ['新鮮蔬果', '沖泡飲品', '手工編織'],
      subCategory: ['水果', '蔬菜', '手工果醬', '茶葉', '咖啡', '圍巾', '置物籃'],
    };
  },
  components: {
    CategorySelect,
  },
};
</script>
