import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/front/Home.vue'),
  },
  {
    path: '/',
    component: () => import('../views/front/FrontLayout.vue'),
    children: [
      {
        path: 'products',
        // name: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('../views/front/Product.vue'),
      },
      {
        path: 'buyerForm',
        name: 'buyerForm',
        component: () => import('../views/front/BuyerForm.vue'),
      },
      {
        path: 'orderConfirm',
        name: 'orderConfirm',
        component: () => import('../views/front/OrderConfirm.vue'),
      },
      {
        path: 'orders',
        // name: 'orders',
        component: () => import('../views/front/Orders.vue'),
      },
      {
        path: 'order/:id',
        // name: 'order',
        component: () => import('../views/front/Order.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'favorite',
        // name: 'favorite',
        component: () => import('../views/front/Favorite.vue'),
      },
      {
        path: 'about',
        // name: 'about',
        component: () => import('../views/front/About.vue'),
      },
      {
        path: 'contact',
        // name: 'contact',
        component: () => import('../views/front/Contact.vue'),
      },
      {
        path: 'questions',
        // name: 'questions',
        component: () => import('../views/front/Questions.vue'),
      },
      {
        path: 'copyright',
        // name: 'copyright',
        component: () => import('../views/front/Copyright.vue'),
      },
    ],
  },
  {
    path: '/orderCompleted',
    name: 'orderCompleted',
    component: () => import('../views/front/OrderCompleted.vue'),
  },
  {
    path: '/login',
    name: 'login',
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
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/UploadImgs.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
