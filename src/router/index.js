import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // path: '/login',
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/products',
    component: () => import('../views/admin/Layout.vue'),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'products/addProduct',
        name: 'addProduct',
        component: () => import('../views/admin/products/AddProduct.vue'),
      },
      {
        path: 'product/:id',
        name: 'productInfo',
        component: () => import('../views/admin/products/EditProduct.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
      {
        path: 'order/:id',
        name: 'orderInfo',
        component: () => import('../views/admin/orders/EditOrder.vue'),
      },
      {
        path: 'coupons',
        name: 'AdminCoupon',
        component: () => import('../views/admin/AdminCoupon.vue'),
      },
      {
        path: 'coupons/addCoupon',
        name: 'addCoupon',
        component: () => import('../views/admin/coupons/AddCoupon.vue'),
      },
      {
        path: 'coupon/:id',
        name: 'coupon',
        component: () => import('../views/admin/coupons/EditCoupon.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
