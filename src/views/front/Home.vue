<template>
  <div class="bgImg banner justify-content-between align-items-center mb-6">
    <div class="bgCover"></div>
    <Navbar :nav-light='isNavLight'></Navbar>
    <div class="bannerSlogan d-flex flex-column align-items-center">
      <h2 class="fontSizeL fontSize-lg-L fw-bold mb-3">你知道友善環境的美食嗎?</h2>
      <p class="text-center d-none d-lg-block mb-lg-0">
        原民部落使用永續循環的栽種方式，保持大自然的平衡，
      </p>
      <p class="text-center">
        不只能保護農民在安全環境下耕作，
        <br class="d-lg-none">
        也能讓消費者吃得安心又健康。
      </p>
      <router-link to='/products' role='button'
          class="btn btn-light fontSizeM fw-bold px-4">
          我現在就想吃
      </router-link>
    </div>
    <p class="d-flex flex-column align-items-center fontSizeS">
      我想知道
      <span class="material-icons">keyboard_arrow_down</span>
    </p>
  </div>
  <div class="container">
    <div class="row justify-content-between align-items-center mb-6">
      <div class="col-md-6">
        <div class="row">
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801208322.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ProQKWN1fvvWluzehFNDUCsj3YMENcjgf3f1Y1GdZQJBuS750WD%2F5cgwpXvUccsrE2fJR3nWAaHYQU6SHeeS2deOQLmDRwPJJlQeBAxlUBMp0D9yh2Zq2RLrXTcrXa6RcEu4XyWyxtR9U6Uyd%2FqnwmPNEyWH4KBHhXfiSbOIb23FcOvP%2FZs7Na7tU0SEE%2BUhn6dRDXf4PdhKhni0wu6rO1QyXkLYccAnytWl8lWTH3D4GUDFXxG7PyVF1SYIj%2Fcfyhl41y5T0PJvw2pMW2LYbkA3lGzv0A%2BHcaMg6mhTpZ6aEivfjO1cnm22ZS43J%2BNjBYEh%2FzwUM5xzD2QpK28j4w%3D%3D)'></div>
          </div>
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801317591.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V2RVAPniYFjmu5EeMeGM6DuBJ%2BkdqX4yzqGREFbjF2rPiRn0CKs6%2Baz8BRK1ERd9pZM23tFUIydogkuPTcKi9eipEtkHG6ETOAuTfvaSBI4SvY5hnZKL8DzzojIMPcoUZCmk956UdZ6Kz0wqrauqeTm0So0JIWJNYseTuk9B2nnoLNG95gn3IN3lycKR%2BaoA7kaeKVrcMmOvI41huCpMNbn%2BCR5U1Vu4PEqPEjIncjHKWDJRbodkcg%2FfxiaiOB8dp2dpXJP5tTxbSFoMxlUcFgn2nNHAbFp8JFZg3bgWnDtgP0qS7h4N6lqXiZtPkNJoow%2FokkB9c%2Bj34J%2FS4uRAlA%3D%3D)'></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock. If you are going to use
          a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. There are many variations of passages of Lorem Ipsu
          available, but the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
     <div class="row justify-content-between align-items-center mb-6">
      <div class="col-md-6 order-md-1">
        <div class="row">
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801458821.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hHVY2NpKexonGjFPesxZjamWvU%2Fpp4mxvJyGUuzEEY0QoBKV1Tm1fHuFH6cRt9fU4tPCZ3wTMwMOrsV6c6CNvx1p2GMEhTUqbS3hhnoMZiNTvmQPBLEMsTUav7xSZUjXEowQ%2FfqKm%2FyB9Wlg5VlXhusdCt%2BF505pEYJMs2cY7XcG%2FEp55rO%2Fbu7CLFuO6LdLjf6GSORV82ZHGc5cTWHYHKsBTfcAS%2FILYsnvjP3%2FoJJGe91%2B2f2GmmANkjN2zk6C%2B2ggkA42QOQ%2F8HSQV40HrzVVcBl41boDcHSEbYrCKiLncU1EoOKwIR0TTtwKYGw5mOCDKmVxsBq%2BMb8HVmh4Ng%3D%3D)'></div>
          </div>
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801395137.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EpkIMZ1rTFuYY%2B7diFtVzsLM9m1696KvKJc%2FO7%2Bl4r1PTcg%2Fj4NsRI5Ke5e2lU7voL6dbPSBHwMwH%2BDy%2FAc%2FiByk%2B57I45xNLCQXCNEY6Tiud11QwLcL26aYUXj0C28PoVrES1q1ChfQHJsEqqgaku5MdrMLxuaMLjFPiTqLNqaeBnJ%2BySliuiEmDDYV8Y4mDyN%2FPgQjh3uKcMbnOVe%2FdA6%2FhYEBVVG%2BOMCrzx6T%2FNJh2MqNu0nUBu4tsx%2Fqk7QiIhOQlcj7t%2FglcLSr%2BtEMv3anob613OgvRZ3Zk5uCXsFvzcZbxAq7suvu2U%2BPihGvbB%2BW6CP820N%2FTjsZUqnAiQ%3D%3D)'></div>
          </div>
        </div>
      </div>
      <div class="col-md-5 order-md-0">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock. If you are going to use
          a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. There are many variations of passages of Lorem Ipsu
          available, but the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
     <div class="row justify-content-between align-items-center mb-6">
      <div class="col-md-6">
        <div class="row">
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801520939.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mWJrC9F9eu3gvxqtzOOtBNUfbX6JPFFnoFcj4%2BguRAzfD8Xv1Mix2A6I7pB%2ByOLBEXbXzwvNAq6zLI2ZAhUUjRp2YZ2DxcXIs9U%2BF5Kc12im6%2FScI7YU2YYqpo2S3s6ZvWC29b8MkGNnQkX1yLA%2FrjBs74SfdXlCWf4%2FRgpCXuOEZI%2FHzSmGcDZEdHjVy%2Ba%2B%2F%2BfqxkVekAvCeVVmkQ8f6C2hdy3p9VhooNxDd3x2VDBi%2FIh5ZAMmNTXgGoePvDzn%2FzXUZ77S0iMxvYNhEYjh%2BdZKZtFKfYf0sM9d4X4bGEXVfXcy7HXBNrVGDKPRSTgMrnKSyz2ERnCBjnvQUB9HfA%3D%3D)'></div>
          </div>
          <div class='col'>
            <div class='editImg bg-cover bg-center rounded w-100'
                 style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801484288.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cqiZpj212yPOBIZYRF2GNE6EqdXvM35070l49NFt8CCK5Gn9ry%2F8ZajYGSU0f6nUQzpHq0%2FWTt2rD20%2FuKYDgGX7jvQwy8dOxP%2F%2F7b%2Bui0%2F9ZqQDAJtzGnLwhQIUgBJxg9alYSrZ4lNao%2BFRYHd1Mu8Xg4BRPPG8QC7zkqyXyV4H4lTY92djUQF0%2FvLm44cXPK1ucx1CmyGJ5R7Jr%2FWADhURvkt06QgRsMGE2a5U%2FRIzSHIhtK3G%2BTQQuxpHoLVK%2F07V3RLyNcgHJub%2FevuznFC9FlbL58zvb%2FVgjaB91pborzuvq1%2F0WOJPaNgQmfuPLlXJMmNjXtKdtlZxiTrJ2A%3D%3D)'></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock. If you are going to use
          a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text. There are many variations of passages of Lorem Ipsu
          available, but the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  </div>
  <div class='sectionBg d-center mb-6' style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1626619325929.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VpKkTAEF0OqsCm%2FPtxXGuybFNxfTBdb4fI3x13Qg9DXamsPac2vfp39I9GbADRyhT6MAdDZq0ANYr0Q3dwgWIzk%2FJu6TzRqeHonKgrabYbFKuSp49N%2FxEff%2FqkvV1MQxRQ1LQ4Ji6gHS868iAYEhzVmYv%2Fv6kHkRLL4q60%2B1myaDkhcgRaWBE83QvglYK%2Br2JGO3JVkgT5L7HEdy3UlxUtHzmy2frAe%2BgvhA9qlH441l%2FYjco%2BxAPCIEKf9IkR01fh2KNr5nctO6%2FzNZ9xWyZvpGvVbDBbgp1y1rScyAa8TRC2NDfm75elXf0uCuComdLA%2Fo5hTHgrf8IfXov5cZmA%3D%3D)'>
    <span class='fontSizeL fw-bold text-white mt-6'>給予時間 自然成長</span>
  </div>
  <div class='container mb-6'>
    <div class="row justify-content-around align-items-center">
      <div class="col-md-5 mb-4">
        <p class=''>
          Richard McClintock. If you are going to use a of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the middle of text.
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form.
        </p>
        <div class='editImg bg-cover bg-center rounded w-50 mb-3'
            style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801566876.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=UNh%2FaPGYkkk1U06nUPjdb8aNdxVkWkZUdngJYPHH5CKBkCNUsFQlX1fSNV6SUwwdtPjwQqU8Q9VZdtcwXF8FG3sQMzHXVI5Vh5lGTml8gUFr4W440eA4wnZfny2oFoWdOmd2hF3xBruq0oaNGcFEvKp9n15xLdsvoGnTPpBd4Avgi9u3lt8kfdNL7K9Mx77ScNrjGQZ8DlHZeZWrvralbqyVMPPNr%2Fkb%2FO%2BJJ9gPRUcbLIF8QwRQ%2BDG60k%2Brs5gv%2BI0KITekqgop6ro%2B5dkegrI2knuhq9Y2gicXpmaADfhuOu5PWaX6hmI%2Bb5ganz1sLtj2qVzkiG3t2Ak11iae9A%3D%3D)'></div>
        <div class='editImg bg-cover bg-center rounded w-50 ms-md-auto'
            style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801583050.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=njuN6Cc1N0uD%2BwWNvr06vhwZ4yFcF9njOC%2BA8z5Lddg%2BgNEjg1NCjfdgk5fgLFicEGSeToKtOJwPKtYuL7ucgpgr05hKzNK9KyYbCHB5WK%2BV42pVdxyJKqRNP%2BzzTWSknRsTV4OTxK9RtBVMUOJ6ZonzCsUFsiOZuplQ0AZCOqg5HcfIxddYVHrjjTmBYx3RFNDAGK%2BbNppE3zoq%2Buo94Tz2gXdnGdWfraQZE4dbQGQLr2FvMxV%2BL89nJixTBhi8D6jH26KxhCNLVAfT3X17nKzcEBz3moK%2BbDMqFEsIzepDlUiJ%2BxQaQixcBAGn1gTXDJgVGAgWEuiYvfrrjQA5KQ%3D%3D)'></div>
      </div>
      <div class="col-md-5 mb-4">
        <p class=''>
          Richard McClintock. If you are going to use a of Lorem Ipsum,
          you need to be sure there isn't anything embarrassing hidden in the middle of text.
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form.
        </p>
        <div class='editImg bg-cover bg-center rounded w-50  ms-md-auto mb-3'
            style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801611015.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=nPLMiGQSjPV%2BsSusSVrCy8eqTTUK7C0QeY4xjTv%2B3etsaQIS%2FyU2UINgDz5Pe%2B8d3bJBGh%2FmKWzM5Lag2Xm8U7z%2FtAA5ALE6qDcPUvCRf53jyqJgl8fofjgDoIB2iFf%2BfEO6zttHmORJr%2Fwx3L3apP5gaZtl8GIKvzczGvu27x6lLPe19%2FhfR1jsYTpvWYlB1QPS5AfK2dw4W0ZKfhlpF6SkytHoRyxlGrrUs2FPm%2F7FNtJkBLu8PKJIEi1yQdzplTwcma72kgOpnRdfNXG3OqquDwOV5stvs3gusujoR%2F5IypwKyXdBh%2FdFyqydSgbXRIdw5q%2F6MBavc1whWR09nA%3D%3D)'></div>
        <div class='editImg bg-cover bg-center rounded w-50'
            style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801627030.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=QcgKPxKEMBgUBNntpPsyf0kwDEX5x4GDfDkF4%2F553EjsgbsFhRTMDUQaEVB0SgecUHchZSS9s7JCsL58DVouYtxh2xAoNXtwYn7NA9vDIrPoER7m6qbNB4OTL0z5oAvQFEk5Q3tNrOLIIIzSYLIewebHJYPXIkbDpsjWW4rPiToGLKSHXD1B2eJ2P5JCi6glj50ASaPR4D22GP0nQdEW9FHyQrqMSF5Tz8Dc9CL6f3SuGN7WDjClT2JhiONkLXK48%2B6SEOMzgs90aB38DRF8BK2ggtJbJ%2BIOrOGUjnw9KkpvZU9Xkyx28Mg%2B8gwxvFuIXht8h5zlxOL%2BJq%2BB4x2euQ%3D%3D)'></div>
      </div>
      <div class="col-md-8">
        <p class='text-center'>
          Richard McClintock. If you are going to use a of Lorem Ipsum, you need to be sure there
          sn't anything embarrassing hidden in the middle of text. There are many variations
          of passages of Lorem Ipsum available,but the majority have suffered alteration.
        </p>
      </div>
    </div>
  </div>
  <div class='bgImg d-center'  style='backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1626620909470.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=g6alKQw0vrNxhv7L6IQ8dzxjVXyxvyzWVAcbuTFuPv%2FIBQAw1NLgjC8Vj6qBqjr6OhItkwTFGD1JeoqspE9DXrAe6KfCGzzATudBH%2F10ycirrbp2hkLIdMIZgyVXgsxyeovtqpt0P9HFqoJLNXKKr0%2BaH21nubvtIMGocTrGdX69fzxDKXDTNKDRQ6qJUO%2FTmsyUoyzK4pn%2B%2FBHfZqGcstCcQBUEs2F%2FHRWcnTdCR%2FExEsKPQeMTLibkRObZzdphRyTENODctRSryyoRpa0AQ45FlJHnDrUbwa4mTm3E9zON3Rf2vcqph%2Fk4ofzGeEklEuShdeLv%2FeUm5tO9RHwxBQ%3D%3D)'>
    <router-link to='/products' role='button' class="btn btn-light fontSizeM fw-bold mb-4">
      來顆水果吧
    </router-link>
  </div>
  <Footer></Footer>
</template>

<style>
  body, html{
    background-color: #FDFAF6;
  }
</style>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';

export default {
  data() {
    return {
      isNavLight: true,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {},
  created() {
  },
};
</script>
