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
    component: () => import('../views/admin/Layout.vue'),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('../views/admin/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('../views/admin/AdminOrders.vue'),
      },
      {
        path: 'coupon',
        name: 'AdminCoupon',
        component: () => import('../views/admin/AdminCoupon.vue'),
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
