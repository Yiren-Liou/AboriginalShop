<template>
  <div class="d-none d-md-flex row justify-content-center my-5">
    <div class="col-md- col-lg-7">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column align-items-center">
          <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"
              :class="{'bg-primary' : progress === '確認購物車' ||
                                      progress === '訂購資訊' ||
                                      progress === '確認結帳'}">
          </div>
          <span class="text-center">確認購物車</span>
        </div>
        <div class="progressLine"
        :class="{'border-primary' : progress === '訂購資訊' || progress === '確認結帳'}"></div>
        <div class="d-flex flex-column align-items-center">
          <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"
          :class="{'bg-primary' : progress === '訂購資訊' || progress === '確認結帳'}"></div>
          <span class="text-center">訂購資訊</span>
        </div>
        <div class="progressLine"
        :class="{'border-primary' : progress === '確認結帳'}"></div>
        <div class="d-flex flex-column align-items-center">
          <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"
          :class="{'bg-primary' : progress === '確認結帳'}"></div>
          <span class="text-center">確認結帳</span>
        </div>
        <div class="progressLine"
        :class="{'border-primary' : progress === '訂購成功'}"></div>
        <div class="d-flex flex-column align-items-center">
          <div class="border border-2 rounded-circle p-1 p-md-2 mb-3"
          :class="{'bg-primary' : progress === 'progress'}"></div>
          <span class="text-center">訂購成功</span>
        </div>
      </div>
    </div>
  </div>
  <div class="d-md-none row g-0 mb-3">
    <div class="col-6">
      <div class="fontSizeXS border text-center py-1"
          :class="{ 'progressFocus' : progress === '確認購物車',
            'progressInfo' : progress === '訂購資訊' || progress === '確認結帳'}">
        確認購物車
      </div>
    </div>
    <div class="col-6">
      <div class="fontSizeXS border text-center py-1"
          :class="{'progressFocus' : progress === '訂購資訊',
                  'progressInfo' : progress === '確認結帳'}">
        訂購資訊
      </div>
    </div>
    <div class="col-6">
      <div class="fontSizeXS border text-center py-1"
          :class="{'progressFocus' : progress === '確認結帳'}">
        確認結帳
      </div>
    </div>
    <div class="col-6">
      <div class="fontSizeXS border text-center py-1"
          :class="{'progressFocus' : progress === '訂購成功'}">
        訂購成功
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['progress'],
};
</script>
