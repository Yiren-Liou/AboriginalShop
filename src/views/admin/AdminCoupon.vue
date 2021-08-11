<template>
  <nav
    style="--bs-breadcrumb-divider: '>'"
    aria-label="breadcrumb"
    class="mb-3"
  >
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <p class="mb-0">優惠券</p>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <router-link to="/admin/coupons">全部優惠券</router-link>
      </li>
    </ol>
  </nav>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <router-link to="/admin/coupons/addCoupon" class="btn btn-primary">
      新增優惠券
    </router-link>
    <div class="d-flex">
      <div class="input-group me-3">
        <input
          type="text"
          class="form-control"
          placeholder="請輸入優惠券名稱"
          aria-label="search"
          aria-describedby="searchBtn"
          v-model="search"
        />
        <span class="input-group-text material-icons bg-transparent me-3">search</span>
        <div class="dropdown">
          <button
            class="
              material-icons
              btn btn-outline-secondary
              d-flex
              justify-content-center
              align-items-center
              me-2
            "
            type="button"
            id="filterBtn"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            sort
          </button>
          <ul class="dropdown-menu" aria-labelledby="filterBtn">
            <li class="mb-2">
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="startDate_new_old"
                @click="filterItem"
              >
                起始時間新到舊
              </button>
            </li>
            <li class="mb-2">
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="startDate_old_new"
                @click="filterItem"
              >
                起始時間舊到新
              </button>
            </li>
            <li class="mb-2">
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="dueDate_new_old"
                @click="filterItem"
              >
                截止時間新到舊
              </button>
            </li>
            <li class="mb-2">
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="dueDate_old_new"
                @click="filterItem"
              >
                截止時間舊到新
              </button>
            </li>
            <li class="mb-2">
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="discount_low_high"
                @click="filterItem"
              >
                折扣趴數低到高
              </button>
            </li>
            <li>
              <button
                type="button"
                class="dropdown-item"
                href="#"
                data-field="discount_high_low"
                @click="filterItem"
              >
                折扣趴數高到低
              </button>
            </li>
          </ul>
        </div>
      </div>
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
        <th>查看</th>
        <th>編輯</th>
        <th>刪除</th>
      </tr>
    </thead>
    <tbody v-if="!coupons">
      <tr>
        目前沒有優惠券呦
      </tr>
    </tbody>
    <tbody v-else class="text-center">
      <tr v-for="(coupon, i) in filterCoupon" :key="coupon.id">
        <th scope="row">{{ i + 1 }}</th>
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.percent }}%</td>
        <td :class="{ 'text-secondary': !coupon.is_enabled }">
          {{ coupon.is_enabled ? '啟用' : '未啟用' }}
        </td>
        <td>{{ coupon.is_enabled ? $date.toDate(coupon.start_date) : '-' }}</td>
        <td>{{ coupon.is_enabled ? $date.toDate(coupon.due_date) : '-' }}</td>
        <td>
          <button
            type="button"
            class="material-icons btn"
            @click="emitCoupon(i, coupon.id, true)"
          >
            remove_red_eye
          </button>
        </td>
        <td>
          <router-link
            :to="`/admin/coupon/${coupon.id}`"
            @click="emitCoupon(i, coupon.id, false)"
            class="material-icons btn"
          >
            edit
          </router-link>
        </td>
        <td>
          <button
            type="button"
            class="material-icons btn"
            @click="delCoupon(coupon.id)"
          >
            delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
      coupons: '',
      coupon: '',
      isLoading: false,
      search: '',
    };
  },
  computed: {
    filterCoupon() {
      return this.coupons.filter((item) => item.title.match(this.search));
    },
  },
  methods: {
    getCoupons(page = 1) {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.coupons = res.data.coupons;
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
    emitCoupon(index, id, status) {
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
      this.pushReadStatus(status);
    },
    pushReadStatus(status) {
      sessionStorage.setItem('readOnly', status);
    },
    delCoupon(id) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`;
      this.$http
        .delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getCoupons();
            this.$swal({
              text: res.data.message,
              icon: 'success',
              confirmButtonColor: '#ffbc1f',
            });
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
    filterItem(e) {
      const action = e.target.getAttribute('data-field');
      switch (action) {
        case 'discount_low_high':
          this.coupons.sort((a, b) => a.percent - b.percent);
          break;
        case 'discount_high_low':
          this.coupons.sort((a, b) => b.percent - a.percent);
          break;
        case 'startDate_new_old':
          this.coupons.sort((a, b) => {
            const date1 = this.$date.toUnix(a.start_date);
            const date2 = this.$date.toUnix(b.start_date);
            return date2 - date1;
          });
          break;
        case 'startDate_old_new':
          this.coupons.sort((a, b) => {
            const date1 = this.$date.toUnix(a.start_date);
            const date2 = this.$date.toUnix(b.start_date);
            return date1 - date2;
          });
          break;
        case 'dueDate_new_old':
          this.coupons.sort((a, b) => {
            const date1 = this.$date.toUnix(a.due_date);
            const date2 = this.$date.toUnix(b.due_date);
            return date2 - date1;
          });
          break;
        case 'dueDate_old_new':
          this.coupons.sort((a, b) => {
            const date1 = this.$date.toUnix(a.due_date);
            const date2 = this.$date.toUnix(b.due_date);
            return date1 - date2;
          });
          break;
        default:
          break;
      }
    },
  },
  created() {
    this.isLoading = true;
    this.getCoupons();
  },
};
</script>
