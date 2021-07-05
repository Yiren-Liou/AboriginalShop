<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">優惠券</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to='/admin/coupons'>全部優惠券</router-link>
      </li>
    </ol>
  </nav>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <router-link to="/admin/coupons/addCoupon"
                 class="btn btn-primary">
                新增優惠券
    </router-link>
    <div class="d-flex">
      <Search class="me-2"></Search>
      <Filter></Filter>
    </div>
  </div>
  <table class="table align-middle">
    <thead>
      <tr class="text-center">
        <th>#</th>
        <th>優惠券標題</th>
        <th>折扣趴數</th>
        <th>啟用狀態</th>
        <th>起始時間</th>
        <th>截止時間</th>
        <th>查看 </th>
        <th>編輯 </th>
        <th>刪除</th>
      </tr>
    </thead>
    <tbody v-if="!coupons">
      <tr>目前沒有優惠券呦</tr>
    </tbody>
    <tbody v-else class="text-center">
      <tr v-for="(coupon, i) in coupons" :key="coupon.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.percent }}%</td>
        <td>{{ coupon.is_enabled? '啟用' : '未啟用' }}</td>
        <td>{{ coupon.is_enabled? $toDate(coupon.start_date) : '-'}}</td>
        <td>{{ coupon.is_enabled? $toDate(coupon.due_date) : '-' }}</td>
        <td>
          <!-- <router-link :to="`/admin/coupon/${coupon.id}`" @click="emitCoupon(i)"
                       class="material-icons btn">
            remove_red_eye
          </router-link> -->
          <button type="button" class="material-icons btn" @click="emitCoupon(i, coupon.id)">
            remove_red_eye
          </button>
        </td>
        <td>
          <router-link :to="`/admin/coupon/${coupon.id}`" @click="emitCoupon(i)"
                       class="material-icons btn">
            edit
          </router-link>
        </td>
        <td>
          <button type="button" class="material-icons btn" @click="delCoupon(coupon.id)">
            delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
import Search from '@/components/Search.vue';
import Filter from '@/components/admin/Filter.vue';

export default {
  data() {
    return {
      coupons: '',
      coupon: '',
      isLoading: false,
    };
  },
  components: {
    Search,
    Filter,
  },
  methods: {
    getCoupons(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.coupons = res.data.coupons;
            console.log(this.coupons);
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    emitCoupon(index, id) {
      this.coupon = this.coupons[index];
      const tempId = id;
      this.$router.push({
        name: 'coupon',
        params: {
          id: tempId,
        },
        query: {
          coupon: JSON.stringify(this.coupon),
        },
      });
      // this.$emitter.emit('pushCoupon', this.coupon);
    },
    delCoupon(id) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getCoupons();
            this.$swal({ text: res.data.message, icon: 'success' });
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  created() {
    this.isLoading = true;
    this.getCoupons();
  },
};
</script>
