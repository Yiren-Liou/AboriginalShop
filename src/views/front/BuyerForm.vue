<template>
  <div class="container mb-5">
    <div class="row justify-content-center mb-5">
      <div class="col-md-6">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-primary p-2 mb-3"></div>
            <span class="text-center">確認購物車</span>
          </div>
          <div class="progressLine border-primary"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle bg-primary p-2 mb-3"></div>
            <span class="text-center">填寫訂購資訊</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">確認結帳</span>
          </div>
          <div class="progressLine"></div>
          <div class="d-flex flex-column align-items-center">
            <div class="border border-2 rounded-circle p-2 mb-3"></div>
            <span class="text-center">訂購成功</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="fw-bold fontSize-lg-L text-center mb-5">訂購資訊</h2>
    <div class="row justify-content-center">
      <div class="col-md-7">
        <Form v-slot="{ errors }" @submit='emitOrder'>
          <div class="border rounded py-4 px-5 mb-4">
            <div class="row mb-3">
              <label for="userName" class="col-sm-4 col-form-label">訂購人姓名<sup>*</sup></label>
              <div class="col-sm-8">
                <Field type="text" class="form-control disabled" id="userName"
                    placeholder="請輸入訂購人姓名" v-model="user.name"
                    name="訂購人姓名" rules="required"
                    :class="{ 'is-invalid': errors['訂購人姓名'] }">
                </Field>
                <error-message name="訂購人姓名" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-3">
              <label for="userTell" class="col-sm-4 col-form-label">訂購人手機<sup>*</sup></label>
              <div class="col-sm-8">
                <Field type="tel" class="form-control disabled" id="userTell"
                    placeholder="請輸入訂購人手機號碼" v-model="user.tel"
                    name="訂購人手機" :rules="isPhone"
                    :class="{ 'is-invalid': errors['訂購人手機'] }">
                </Field>
                <error-message name="訂購人手機" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-3">
              <label for="userEmail" class="col-sm-4 col-form-label">訂購人信箱<sup>*</sup></label>
              <div class="col-sm-8">
                <Field type="email" class="form-control disabled" id="userEmail"
                    placeholder="請輸入訂購人信箱" v-model="user.email"
                    name="訂購人信箱" rules="email|required"
                    :class="{ 'is-invalid': errors['訂購人信箱'] }">
                </Field>
                <error-message name="訂購人信箱" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="row mb-3">
              <label for="payment" class="col-sm-4 col-form-label">付款方式<sup>*</sup></label>
              <div class="col-sm-8">
                <Field class="form-select" id="payment"
                    v-model="user.payment"
                    name="付款方式" rules="required" as='select'
                    :class="{ 'is-invalid': errors['付款方式'] }">
                    <option value='' selected disabled>請選擇付款方式</option>
                    <option value="信用卡">信用卡</option>
                    <option value="711取貨付款">7-11 取貨付款</option>
                </Field>
                <error-message name="付款方式" class="invalid-feedback"></error-message>
              </div>
            </div>
            <template v-if='user.payment==="711取貨付款"'>
              <div class="row mb-3">
                <label for="payment" class="col-sm-4 col-form-label">711取貨門市<sup>*</sup></label>
                <div class="col-sm-8">
                  <Field class="form-select mb-2" id="convenienceStore"
                      name="711取貨門市" rules="required" as='select'
                      :class="{ 'is-invalid': errors['711取貨門市'] }">
                      <option value='' selected disabled>請選擇711取貨門市</option>
                      <option value="creditCard">信用卡</option>
                      <option value="711pay">7-11 取貨付款</option>
                  </Field>
                  <input class="form-control disabled" id="storeAddr" type="text"
                        aria-describedby="storeAddr" v-model="user.address">
                  <error-message name="711取貨門市" class="invalid-feedback"></error-message>
                </div>
              </div>
            </template>
            <template v-else-if='user.payment==="信用卡"'>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" v-model="isEqual"
                        id="userEqual">
                <label class="form-check-label" for="userEqual">訂購人等於收件人</label>
              </div>
              <template v-if='!isEqual'>
                <div class="row mb-3">
                  <label for="RecipientName" class="col-sm-4 col-form-label">
                      收件人姓名<sup>*</sup>
                  </label>
                  <div class="col-sm-8">
                    <Field type="text" class="form-control disabled" id="RecipientName"
                        placeholder="請輸入收件人姓名" v-model="recipient.name"
                        name="收件人姓名" rules="required"
                        :class="{ 'is-invalid': errors['收件人姓名'] }">
                    </Field>
                    <error-message name="收件人姓名" class="invalid-feedback"></error-message>
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="userTell" class="col-sm-4 col-form-label">收件人手機<sup>*</sup></label>
                  <div class="col-sm-8">
                    <Field type="tel" class="form-control disabled" id="userTell"
                        placeholder="請輸入收件人手機號碼" v-model="recipient.tel"
                        name="收件人手機" :rules="isPhone"
                        :class="{ 'is-invalid': errors['收件人手機'] }">
                    </Field>
                    <error-message name="收件人手機" class="invalid-feedback"></error-message>
                  </div>
                </div>
              </template>
              <div class="row mb-3">
                <label for="RecipientAddre" class="col-sm-4 col-form-label">
                  收件地址<sup>*</sup>
                </label>
                <div class="col-sm-8">
                  <Field type="text" class="form-control disabled" id="RecipientAddre"
                      placeholder="請輸入收件地址" v-model="user.address"
                      name="收件地址" rules="required"
                      :class="{ 'is-invalid': errors['收件地址'] }">
                  </Field>
                  <error-message name="收件地址" class="invalid-feedback"></error-message>
                </div>
              </div>
            </template>
            <div class="row mb-3">
              <label for="remarks" class="col-sm-4 col-form-label">備註</label>
              <div class="col-sm-8">
              <textarea class="form-control" v-model='message' placeholder="備註" id="remarks">
              </textarea>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <router-link to='/cart' class='btn btn-outline-secondary me-3'>回到購物車</router-link>
            <button type='submit' class="btn btn-secondary me-3">前往下一步</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      message: '',
      recipient: {},
      order: {},
      isEqual: false,
      isLoading: false,
    };
  },
  props: ['pushOrder', 'pushProducts', 'productIndex'],
  watch: {
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
    emitOrder() {
      this.order.user = this.user;
      this.order.message = this.message;
      this.order.isEqual = this.isEqual;
      this.order.orderStatus = '處理中';
      this.order.is_delivery = '未出貨';
      if (this.recipient) {
        this.order.recipient = this.recipient;
      }
      this.$emit('emit-order', this.order);
      this.$router.push('/orderConfirm');
    },
  },
  created() {},
};
</script>
