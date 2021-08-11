<template>
  <div class="main container">
    <div class="row justify-content-center mb-6">
      <div class="col-md-7">
        <h2 class="fontSizeM fontSize-md-L text-center mb-5">─ 聯絡我們 ─</h2>
        <ul class="list-unstyled text-center mb-4">
          <li class="fontSize-md-S mb-3">
            如果需要大量訂購，或任何問題，歡迎您來電(
            <a
              href="tel:+886-2-12345678"
              class="text-secondary fw-bold text-decoration-underline"
              >02-1234-5678</a
            >
            )洽詢。
          </li>
          <li class="fontSize-md-S">
            不方便來電，可以透過下方郵件詢問，我們會於 2 個工作天內回覆您。
          </li>
        </ul>
        <Form
          v-slot="{ errors }"
          @submit="sendEmail"
          class="rounded-3 border border-secondary px-3 py-4 px-lg-0 py-lg-5"
        >
          <div class="row justify-content-center mb-3 mb-lg-4">
            <label for="userName" class="col-sm-2 col-form-label"
              >姓名<sup>*</sup></label
            >
            <div class="col-sm-8">
              <Field
                type="text"
                class="form-control disabled"
                id="userName"
                placeholder="請輸入姓名"
                name="姓名"
                rules="required"
                :class="{ 'is-invalid': errors['姓名'] }"
              >
              </Field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>
          </div>
          <div class="row justify-content-center mb-3 mb-lg-4">
            <label for="userName" class="col-sm-2 col-form-label"
              >Email<sup>*</sup></label
            >
            <div class="col-sm-8">
              <Field
                type="email"
                class="form-control disabled"
                id="userName"
                placeholder="請輸入Email"
                name="Email"
                rules="required"
                :class="{ 'is-invalid': errors['Email'] }"
              >
              </Field>
              <error-message
                name="Email"
                class="invalid-feedback"
              ></error-message>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <label for="userName" class="col-sm-2 col-form-label"
              >詢問事項<sup>*</sup></label
            >
            <div class="col-sm-8">
              <Field
                type="text"
                class="form-control disabled"
                id="userName"
                placeholder="請輸入詢問事項"
                name="content"
                rules="required"
                :class="{ 'is-invalid': errors['content'] }"
                as="textarea"
                style="height: 160px"
              >
              </Field>
              <error-message
                name="content"
                class="invalid-feedback"
              ></error-message>
            </div>
          </div>
          <div class="d-center">
            <button type="submit" class="btn btn-primary">送出</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t">
      <div class="ldio-u3364un719">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </Loading>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    sendEmail() {
      this.$swal({
        text: '已成功送出信件',
        icon: 'success',
        confirmButtonColor: '#ffbc1f',
      });
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
