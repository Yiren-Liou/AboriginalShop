<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5 g-0">
        <div
          class="bg-center bg-cover img-fluid vh100"
          style="
            background-image: url(https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
          "
        ></div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-center align-items-center vh100">
          <Form v-slot="{ errors }" @submit="login">
            <h2 class="fontSizeM mb-3">
              <span class="material-icons me-2">face</span>管理員登入
            </h2>
            <div class="mb-3">
              <label for="email" class="form-label">Email </label>
              <Field
                id="email"
                name="信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                placeholder="請輸入信箱"
                rules="email|required"
              >
              </Field>
              <error-message
                name="信箱"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="mb-3">
              <label for="adminPwd" class="form-label">密碼 </label>
              <Field
                id="adminPwd"
                name="密碼"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors['密碼'] }"
                placeholder="請輸入密碼"
                rules="required"
              >
              </Field>
              <error-message
                name="密碼"
                class="invalid-feedback"
              ></error-message>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary">登入</button>
            </div>
          </Form>
        </div>
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
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.user.username = document.querySelector('#email').value;
      this.user.password = document.querySelector('#adminPwd').value;
      this.$http
        .post(`${process.env.VUE_APP_URL}admin/signin`, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(
              expired,
            )}; path=/`;
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
            this.$router.push({ name: 'AdminProducts' });
          } else {
            this.isLoading = false;
            this.$swal({
              text: res.data.message,
              icon: 'error',
              confirmButtonColor: '#ffbc1f',
            });
          }
        })
        .catch(() => {
          this.$swal({
            text: 'Opps ... 發生錯誤，請嘗試重新整理此頁面',
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
        });
    },
  },
};
</script>
