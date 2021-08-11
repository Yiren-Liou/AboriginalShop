<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-1 d-flex justify-content-center">
        <div
          class="
            position-fixed
            d-flex
            flex-column
            justify-content-between
            align-items-center
            h-100
            py-4
          "
        >
          <AdminNav></AdminNav>
        </div>
      </div>
      <div class="col">
        <div class="py-4 px-3">
          <router-view v-if="checkUser"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from '@/components/admin/AdminNav.vue';

export default {
  data() {
    return {
      readStatus: '',
      checkUser: false,
      order: '',
    };
  },
  components: {
    AdminNav,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    if (token) {
      this.$http.defaults.headers.common.Authorization = token;
      const apiUrl = `${process.env.VUE_APP_URL}api/user/check`;
      this.$http.post(apiUrl).then((res) => {
        if (res.data.success) {
          this.checkUser = true;
        } else {
          this.$swal({
            text: res.data.message,
            icon: 'error',
            confirmButtonColor: '#ffbc1f',
          });
          this.$router.push('/login');
        }
      });
    } else {
      this.$router.push('/login');
    }
  },
};
</script>
