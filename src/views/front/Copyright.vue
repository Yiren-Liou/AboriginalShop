<template>
  <div class="main container">
    <h2 class="fontSizeM fontSize-md-L text-center mb-5">─ 版權宣告 ─</h2>
    <div class="row justify-content-center mb-6">
      <div class="col-md-10">
        <ul class="list-unstyled">
          <li class='mb-3'>
            Original
            高山部落蔬果的<strong>網站圖片</strong>及<strong>文字</strong>，
            僅供個人作品使用，不提供轉載、引用及商業用途。
          </li>
          <li class='mb-3'>
            圖片來源:
            <a href="https://unsplash.com/" class="ms-2 text-decoration-underline"
              >
              Unsplash
            </a>
            、
            <a href="https://www.pexels.com/zh-tw/" class="ms-2 text-decoration-underline"
              >
              Pexels
            </a>
            、
            <a href="https://www.flaticon.com/" class="ms-2 text-decoration-underline"
              >
              Flaticon
            </a>
          </li>
          <li class='mb-3'>
            圖片拍攝者:
            <div class="row mt-2">
              <div class="col-md-3">
                <ul>
                  <li>蔡嘉宇</li>
                  <li>Dan-Cristian</li>
                  <li>Shelley Pauls</li>
                  <li>Craig Dimmick</li>
                  <li>Eric Prouzet</li>
                  <li>pina messina</li>
                  <li>Olia Gozha</li>
                  <li>Visual Stories || Micheile</li>
                  <li>Monika Grabkowska</li>
                  <li>Amanda Ma</li>
                  <li>Joseph Gonzalez</li>
                  <li>Ryan Arnst</li>
                  <li>Anthony Vela</li>
                  <li>Mark Stebnicki</li>
                  <li>Karolina Grabowska</li>
                  <li>Ant</li>
                  <li>Ira E</li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>Roberto Martinez</li>
                  <li>LuAnn Hunt</li>
                  <li>Jordan</li>
                  <li>Kelly Neil</li>
                  <li>Christiann Koepke</li>
                  <li>Frank Zhang</li>
                  <li>Sugar Bee</li>
                  <li>Elaine Casap</li>
                  <li>Yulia Khlebnikova</li>
                  <li>Misky</li>
                  <li>Ibadah Mimpi</li>
                  <li>Steven Weeks</li>
                  <li>Johnny McClung</li>
                  <li>Katherine Hood</li>
                  <li>Tracey Hocking</li>
                  <li>Melanin Goddess</li>
                  <li>Artem Beliaikin</li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>Priscilla Du Preez</li>
                  <li>Markus Spiske</li>
                  <li>Vanesa conunaese</li>
                  <li>Joanna Kosinska</li>
                  <li>Gemma Evans</li>
                  <li>andrew welch</li>
                  <li>David Köhler</li>
                  <li>Natalie Grainger</li>
                  <li>Hermes Rivera</li>
                  <li>Gabriel Jimenez</li>
                  <li>Anaya Katlego</li>
                  <li>GreenForce Staffing</li>
                  <li>Roman Synkevych</li>
                  <li>Livier Garcia</li>
                  <li>Mick Victor</li>
                  <li>NastyaSensei</li>
                  <li>Sarah Chai</li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li>Nathan Dumlao</li>
                  <li>Danurwendho Adyakusuma</li>
                  <li>Tim Mossholder</li>
                  <li>Jia Ye</li>
                  <li>Nathan Dumlao</li>
                  <li>Christina Rumpf</li>
                  <li>Mike Kenneally</li>
                  <li>Markus Spiske</li>
                  <li>Alexandre Debiève</li>
                  <li>Yanapi Senaud</li>
                  <li>Kindel Media</li>
                  <li>Kelly Lacy</li>
                  <li>Quang Nguyen Vinh</li>
                  <li>Pixabay</li>
                  <li>Arina Krasnikova</li>
                  <li>Cats Coming</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
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
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  created() {
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>
