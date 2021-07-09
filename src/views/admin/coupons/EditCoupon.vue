<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="mb-3">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">優惠券</li>
      <li class="breadcrumb-item">
        <router-link to='/admin/coupons'>全部優惠券</router-link>
      </li>
      <li v-if="readonly == 'edit'" class="breadcrumb-item">
        {{ coupon.title }}
      </li>
      <li v-else class="breadcrumb-item active">{{ coupon.title }}</li>
      <li v-if="!readonly" class="breadcrumb-item active">編輯</li>
    </ol>
  </nav>
  <div v-if="readonly" class="d-flex justify-content-between mb-4">
    <router-link to='/admin/coupons' class="btn btn-primary btn-sm">返回</router-link>
    <div class="d-flex">
      <button type="button" class="btn btn-primary btn-sm me-3" @click="delCoupon">
        刪除
      </button>
      <button type="button" class="btn btn-primary btn-sm" @click="emitReadonly(false)">
        編輯
      </button>
    </div>
  </div>
  <div v-else class="d-flex justify-content-end mb-3">
    <button type="button" class="btn btn-primary btn-sm me-3" @click="cancel">
      取消
    </button>
    <button class="btn btn-primary btn-sm" @click="update">
      確定
    </button>
  </div>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link active" id="coupon-tab" type="button" role="tab"
                data-bs-toggle="tab" data-bs-target="#coupon"
                aria-controls="coupon" aria-selected="true">
                優惠券資訊
      </button>
    </li>
  </ul>
  <div class="tab-content border-bottom p-4" id="myTabContent">
    <div class="tab-pane fade show active" id="coupon"
          role="tabpanel" aria-labelledby="coupon-tab">
      <Form v-slot="{ errors }">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponTitle" class="form-label">優惠券標題<sup>*</sup></label>
                  <Field type="text" class="form-control" id="couponTitle"
                    placeholder="請輸入優惠券標題" v-model="coupon.title"
                    name="優惠券標題" rules="required"
                    :class="{ 'is-invalid': errors['優惠券標題'] }"
                    :disabled='readonly'>
                  </Field>
                  <error-message name="優惠券標題" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponCode" class="form-label">折扣碼<sup>*</sup></label>
                  <Field type="text" class="form-control" id="couponCode"
                          placeholder="請輸入折扣碼" v-model="coupon.code"
                          name="折扣碼" rules="required"
                          :class="{ 'is-invalid': errors['折扣碼'] }"
                          :disabled='readonly'>
                  </Field>
                  <error-message name="折扣碼" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponDiscount" class="form-label">折扣趴數<sup>*</sup></label>
                  <Field type="number" class="form-control" id="couponDiscount"
                          placeholder="請輸入折扣趴數" v-model.number="coupon.percent"
                          name="折扣趴數" rules="required" min="1" max="100"
                          :class="{ 'is-invalid': errors['折扣趴數'] }"
                          :disabled='readonly'>
                  </Field>
                  <error-message name="折扣趴數" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="couponIsEnabled" class="form-label">啟用狀態<sup>*</sup></label>
                    <select class="form-select" id="couponIsEnabled"
                            v-model.number="coupon.is_enabled" :disabled='readonly'>
                      <option value='' selected disabled>請選擇啟用狀態</option>
                      <option value=0>未啟用</option>
                      <option value=1>已啟用</option>
                    </select>
                </div>
              </div>
              <div class="col-md-6" v-if='coupon.is_enabled'>
                <div class="mb-3">
                  <label for="startDate" class="form-label">啟用日期<sup>*</sup></label>
                  <Field type="date" class="form-control" id="startDate"
                          placeholder="請輸入啟用日期" v-model="coupon.start_date"
                          name="啟用日期" rules="required"
                          :class="{ 'is-invalid': errors['啟用日期'] }"
                          :disabled='!coupon.is_enabled || readonly'>
                  </Field>
                  <error-message name="啟用日期" class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-md-6" v-if='coupon.is_enabled'>
                <div class="mb-3">
                  <label for="dueDate" class="form-label">截止日期<sup>*</sup></label>
                  <Field type="date" class="form-control" id="dueDate"
                          placeholder="請輸入截止日期" v-model="coupon.due_date"
                          name="截止日期" rules="required"
                          :class="{ 'is-invalid': errors['截止日期'] }"
                          :disabled='readonly'>
                  </Field>
                  <error-message name="截止日期" class="invalid-feedback"></error-message>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <label for="couponContent" class="form-label">內容說明</label>
            <textarea type="text" class="form-control" id="couponContent"
                      v-model="coupon.content" :disabled='readonly'
                      style="height: 210px">
            </textarea>
          </div>
        </div>
      </Form>
    </div>
  </div>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-dual-ball-haac1tizt7t"><div class="ldio-u3364un719">
    <div></div><div></div><div></div>
    </div></div>
  </Loading>
</template>

<script>
export default {
  data() {
    return {
      routeId: this.$route.params.id,
      coupon: {},
      isLoading: false,
    };
  },
  computed: {
    readonly() {
      const readonly = this.readStatus;
      return readonly;
    },
  },
  emits: ['emit-readonly'],
  props: ['readStatus'],
  methods: {
    getCoupon() {
      this.coupon = JSON.parse(this.$route.query.coupon);
      this.coupon.start_date = this.$date.toDate(this.coupon.start_date);
      this.coupon.due_date = this.$date.toDate(this.coupon.due_date);
      this.isLoading = false;
    },
    cancel() {
      this.isLoading = true;
      this.emitReadonly(true);
      this.getCoupon();
    },
    update() {
      this.isLoading = true;
      if (this.coupon.is_enabled) {
        this.coupon.start_date = this.$date.toUnix(this.coupon.start_date);
        this.coupon.due_date = this.$date.toUnix(this.coupon.due_date);
      } else {
        this.coupon.start_date = this.$date.toUnix();
        this.coupon.due_date = this.$date.toUnix();
      }
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.routeId}`;
      this.$http.put(apiUrl, { data: this.coupon })
        .then((res) => {
          if (res.data.success) {
            this.emitReadonly(true);
            this.isLoading = false;
            this.coupon.start_date = this.$date.toDate(this.coupon.start_date);
            this.coupon.due_date = this.$date.toDate(this.coupon.due_date);
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
    delCoupon() {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.routeId}}`;
      console.log(apiUrl);
      this.$http.delete(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'success' });
            this.$router.push('/admin/coupons');
          } else {
            this.isLoading = false;
            this.$swal({ text: res.data.message, icon: 'error' });
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    emitReadonly(status) {
      this.$emit('emit-readonly', status);
    },
  },
  created() {
    this.isLoading = true;
    this.getCoupon();
  },
};
</script>
