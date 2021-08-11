<template>
  <Form v-slot="{ errors }" @submit="pushTempOrder">
    <div class="border rounded p-3 p-md-5 mb-5">
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="userName" class="col-sm-4 col-form-label fontSize-md-S">
          訂購人姓名<sup>*</sup>
        </label>
        <Field
            type="text"
            class="form-control disabled"
            id="userName"
            placeholder="請輸入訂購人姓名"
            v-model.trim="user.name"
            name="訂購人姓名"
            rules="required"
            :class="{ 'is-invalid': errors['訂購人姓名'] }"
          >
          </Field>
          <error-message
            name="訂購人姓名"
            class="invalid-feedback"
          ></error-message>
      </div>
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="userTell" class="col-sm-4 col-form-label fontSize-md-S">
          訂購人手機<sup>*</sup>
        </label>
        <Field
            type="tel"
            class="form-control disabled"
            id="userTell"
            placeholder="請輸入訂購人手機號碼"
            v-model.trim="user.tel"
            name="訂購人手機"
            :rules="isPhone"
            :class="{ 'is-invalid': errors['訂購人手機'] }"
          >
          </Field>
          <error-message
            name="訂購人手機"
            class="invalid-feedback"
          ></error-message>
      </div>
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="userEmail" class="col-sm-4 col-form-label fontSize-md-S">
          訂購人信箱<sup>*</sup>
        </label>
        <Field
            type="email"
            class="form-control disabled"
            id="userEmail"
            placeholder="請輸入訂購人信箱"
            v-model.trim="user.email"
            name="訂購人信箱"
            rules="email|required"
            :class="{ 'is-invalid': errors['訂購人信箱'] }"
          >
          </Field>
          <error-message
            name="訂購人信箱"
            class="invalid-feedback"
          ></error-message>
      </div>
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="payment" class="col-sm-4 col-form-label fontSize-md-S">
          付款方式<sup>*</sup>
        </label>
        <Field
            class="form-select"
            id="payment"
            v-model.trim="user.paymentMethod"
            name="付款方式"
            rules="required"
            as="select"
            :class="{ 'is-invalid': errors['付款方式'] }"
          >
            <option value="" selected disabled>請選擇付款方式</option>
            <option value="信用卡">信用卡</option>
            <option value="超商付款">超商付款</option>
          </Field>
          <error-message
            name="付款方式"
            class="invalid-feedback"
          ></error-message>
      </div>
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="remarks" class="col-sm-4 col-form-label fontSize-md-S">
          統一編號
        </label>
        <input
          class="form-control"
          v-model.trim="user.uniformNumbers"
          placeholder="請輸入統一編號"
          id="uniformNumbers"
        >
      </div>
      <div class="mb-3 d-md-flex align-items-md-center justify-content-md-between">
        <label for="RecipientAddre" class="col-sm-4 col-form-label fontSize-md-S">
          收件地址<sup>*</sup>
        </label>
        <Field
          type="text"
          class="form-control disabled"
          id="RecipientAddre"
          placeholder="請輸入收件地址"
          v-model.trim="user.address"
          name="收件地址"
          rules="required"
          :class="{ 'is-invalid': errors['收件地址'] }"
        >
        </Field>
        <error-message
          name="收件地址"
          class="invalid-feedback"
        ></error-message>
      </div>
      <div class="d-md-flex align-items-md-center justify-content-md-between">
        <label for="remarks" class="col-sm-4 col-form-label fontSize-md-S">
          備註
        </label>
        <textarea
          class="form-control"
          v-model.trim="message"
          placeholder="備註"
          id="remarks"
        >
        </textarea>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <router-link to="/cart" class="btn btn-outline-secondary me-3">
        回到購物車
      </router-link>
      <button type="submit" class="btn btn-secondary me-3">
        前往下一步
      </button>
    </div>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      message: '',
      order: {
        user: '',
        message: '',
      },
    };
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
    renderTempOrder() {
      const hasTempOrder = localStorage.getItem('tempOrder');
      if (hasTempOrder) {
        this.user = JSON.parse(hasTempOrder).user;
        this.message = JSON.parse(hasTempOrder).message;
      }
    },
    pushTempOrder() {
      this.order.user = this.user;
      this.order.message = this.message;
      localStorage.setItem('tempOrder', JSON.stringify(this.order));
      this.$router.push('/orderConfirm');
    },
  },
  created() {
    this.renderTempOrder();
  },
};
</script>
