<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-1 d-flex justify-content-center">
        <div class="position-fixed
                    d-flex flex-column justify-content-between align-items-center
                    h-100 py-4">
            <AdminNav></AdminNav>
        </div>
      </div>
      <div class="col">
        <div class="py-4 px-3">
          <router-view v-if="checkUser"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from '@/components/admin/AdminNav.vue';
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      checkUser: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  components: {
    AdminNav,
  },
  methods: {
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (token) {
      this.$http.defaults.headers.common.Authorization = token;
      const apiUrl = `${process.env.VUE_APP_URL}api/user/check`;
      this.$http.post(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.checkUser = true;
          } else {
            // alert(res.data.message);
            this.$router.push('/login');
          }
        });
    } else {
      // alert('尚未登入');
      this.$router.push('/login');
    }
  },
};
</script>
