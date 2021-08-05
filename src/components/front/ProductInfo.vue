<template>
  <nav class="mb-4">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link fontSize-md-S active"
        id="nav-describe-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-describe"
        type="button"
        role="tab"
        aria-controls="nav-describe"
        aria-selected="true"
      >
        商品描述
      </button>
      <button
        class="d-none d-md-block nav-link fontSize-md-S"
        id="nav-spec-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-spec"
        type="button"
        role="tab"
        aria-controls="nav-spec"
        aria-selected="false"
      >
        商品規格
      </button>
      <button
        class="nav-link fontSize-md-S"
        id="nav-delivery-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-delivery"
        type="button"
        role="tab"
        aria-controls="nav-delivery"
        aria-selected="false"
      >
        付款配送
      </button>
      <button
        class="nav-link fontSize-md-S"
        id="nav-precautions-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-precautions"
        type="button"
        role="tab"
        aria-controls="nav-precautions"
        aria-selected="false"
      >
        注意事項
      </button>
    </div>
  </nav>
  <div class="tab-content mb-4 mb-md-7" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-describe"
      role="tabpanel"
      aria-labelledby="nav-describe-tab"
    >
      <p
        v-html="product.main_content"
        class="fontSizeBase fontSize-md-M mb-3"
      ></p>
      <div
        class="largeImg bg-cover bg-center py-7 mb-3"
        :style="{
          backgroundImage: 'url(' + product.imagesUrl[4].imgUrl + ')',
        }"
      ></div>
      <p
        v-html="product.sub_content"
        class="fontSizeBase fontSize-md-M mb-3"
      ></p>
      <div
        class="largeImg bg-cover bg-center py-7 mb-3"
        :style="{
          backgroundImage: 'url(' + product.imagesUrl[5].imgUrl + ')',
        }"
      ></div>
      <p
        v-if="product.explanation"
        v-html="product.explanation"
        class="fontSizeBase fontSize-md-M"
      ></p>
      <div
        class="largeImg bg-cover bg-center py-7 mb-4 mb-md-0"
        :style="{
          backgroundImage: 'url(' + product.imagesUrl[6].imgUrl + ')',
        }"
      ></div>
      <template class="d-block d-md-none">
        <h4 class="fontSizeM fontSize-md-S d-flex align-items-center mb-3">
          <span class="material-icons me-2">description</span>
          商品規格
        </h4>
        <p v-html="product.spec" class="fontSize-md-S"></p>
      </template>
    </div>
    <div
      class="tab-pane fade"
      id="nav-spec"
      role="tabpanel"
      aria-labelledby="nav-spec-tab"
    >
      <p v-html="product.spec" class="fontSize-md-S"></p>
    </div>
    <div
      class="tab-pane fade"
      id="nav-delivery"
      role="tabpanel"
      aria-labelledby="nav-delivery-tab"
    >
      <h4 class="fontSizeBase fontSize-md-M d-flex align-items-center mb-3">
        付款方式
      </h4>
      <ul class="list-unstyled fontSizeBase fontSize-md-S mb-3 mb-md-5">
        <li class="d-flex align-items-center mb-3">
          信用卡 :
          <span class="ms-2"> VISA、Master、JCB </span>
        </li>
        <li class="d-flex align-items-center">
          超商付款
          <span class="ms-2"> 7-11、全家、萊爾富、OK 超商 </span>
        </li>
      </ul>
      <h4 class="fontSizeBase fontSize-md-M d-flex align-items-center mb-3">
        配送方式
      </h4>
      <p class="fontSizeBase fontSize-md-S">
        {{
          product.category === '新鮮蔬果'
            ? '冷藏: 出貨後 1 - 2 天內會送達指定地點'
            : '常溫: 出貨後 2 - 3 天內會送達指定地點'
        }}
      </p>
    </div>
    <div
      class="tab-pane fade"
      id="nav-precautions"
      role="tabpanel"
      aria-labelledby="nav-precautions-tab"
    >
      <p v-html="product.precautions" class="fontSize-md-S"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>
