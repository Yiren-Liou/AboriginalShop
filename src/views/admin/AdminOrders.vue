<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">訂單</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to='/admin/products'>全部訂單</router-link>
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
        <th scope="col">訂單編號</th>
        <th scope="col">訂購人</th>
        <th scope="col">訂購時間</th>
        <th scope="col">付款狀態</th>
        <th scope="col">出貨狀態</th>
        <th scope="col">出貨時間</th>
        <th scope="col">查看</th>
        <th scope="col">刪除</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr>
        <th scope="row">1</th>
        <td>-MspoitUYTK4AW5G</td>
        <td>買家</td>
        <td>2021/06/12</td>
        <td>未付款</td>
        <td>未出貨</td>
        <td> - </td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">remove_red_eye</router-link>
        </td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">delete</router-link>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>-Qt9oitUYTK4AW5G</td>
        <td>買家</td>
        <td>2021/06/10</td>
        <td>未付款</td>
        <td>已出貨</td>
        <td>2021/06/11</td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">remove_red_eye</router-link>
        </td>
        <td>
          <router-link to="/admin/products" class="material-icons btn">delete</router-link>
        </td>
      </tr>
    </tbody>
  </table>
  <FeatureBtns></FeatureBtns>
</template>

<script>
import Search from '@/components/Search.vue';
import Filter from '@/components/admin/Filter.vue';
import FeatureBtns from '@/components/admin/FeatureBtns.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    Search,
    Filter,
    FeatureBtns,
  },
};
</script>
