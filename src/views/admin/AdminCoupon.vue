<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">優惠券</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to='/admin/products'>全部優惠券</router-link>
      </li>
    </ol>
  </nav>
  <div class="row justify-content-end">
    <div class="col-md-3">
      <Search></Search>
    </div>
    <div class="col-md-1">
      <Filter></Filter>
    </div>
  </div>
  <table class="table table-striped align-middle">
    <thead>
      <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">優惠券標題</th>
        <th scope="col">折扣趴數</th>
        <th scope="col">啟用狀態</th>
        <th scope="col">起始時間</th>
        <th scope="col">截止時間</th>
        <th scope="col">編輯 </th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr>
        <th scope="row">1</th>
        <td>首購優惠</td>
        <td>95%</td>
        <td>啟用</td>
        <td>2021/01/01</td>
        <td>2021/12/31</td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">edit</router-link>
        </td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">delete</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Search from '@/components/Search.vue';
import Filter from '@/components/admin/Filter.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Search,
    Filter,
  },
};
</script>
