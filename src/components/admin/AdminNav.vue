<template>
  <ul class="nav flex-column">
    <li class="nav-item text-center mb-5">
      <div class="squareImg img-fluid bg-center bg-cover rounded-circle mx-auto mb-2" style="background-image:url(https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80)"></div>
      <p>管理員</p>
    </li>
    <li class="nav-item text-center">
      <router-link class="nav-link" to="/admin/products">
        <span class="material-icons mb-2">cases</span>
        <p>商品</p>
      </router-link>
    </li>
    <li class="nav-item text-center">
      <router-link class="nav-link" to="/admin/orders">
        <span class="material-icons mb-2">article</span>
        <p>訂單</p>
      </router-link>
    </li>
    <li class="nav-item text-center">
      <router-link class="nav-link" to="/admin/coupon">
        <span class="material-icons mb-2">price_change</span>
        <p>優惠券</p>
      </router-link>
    </li>
  </ul>
  <button class="btn btn-primary">登出</button>
</template>
