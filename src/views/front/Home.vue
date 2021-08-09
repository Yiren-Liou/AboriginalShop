<template>
  <div
    class="mainNav fixed-top zindexTop w-100"
    :class="{ 'shadow-sm': scroll, 'bg-secondary': scroll }"
  >
    <Navbar :nav-light="isNavLight"></Navbar>
  </div>
  <div class="bgImg banner justify-content-between align-items-center mb-6">
    <div class="bgCover"></div>
    <div class="bannerSlogan d-flex flex-column align-items-center">
      <h2 class="fontSizeL fontSize-md-XL fw-bold mb-3">
        你知道友善環境的美食嗎?
      </h2>
      <p class="text-center fontSize-md-M d-none d-lg-block mb-lg-0">
        原民部落使用永續循環的栽種方式，保持大自然的平衡，
      </p>
      <p class="text-center fontSize-md-M">
        不只能保護農民在安全環境下耕作，
        <br class="d-lg-none" />
        也能讓消費者吃得安心又健康。
      </p>
      <router-link
        to="/products"
        role="button"
        class="btn btn-light fontSizeM fw-bold px-4"
      >
        我現在就想吃
      </router-link>
    </div>
    <button
      class="
        moreBtn
        btn
        d-flex
        flex-column
        align-items-center
        text-white
        mb-2
        mb-md-5
      "
      type="button"
      @click="moveToIntro"
    >
      我想知道
      <span class="arrowImg material-icons position-absolute">keyboard_arrow_down</span>
    </button>
  </div>
  <div class="container mb-4 mb-md-7" id="intro">
    <div
      class="d-none d-md-flex row justify-content-center mb-4 mb-md-7"
      data-aos="fade-up"
    >
      <div class="col-md-6">
        <h3 class="fontSize-md-L fw-bold text-center mb-4">依循大自然的法則</h3>
        <p class="text-center fontSize-md-S">
          相信土地以及作物本身的生命力，不噴灑化學農藥以及化學肥料，回歸最原始的耕作方式。
          尊重土壤為基本，維護整個生態循環體系，使人類和環境可以和平相處，就是部落族人使用的農業技術。
        </p>
      </div>
    </div>
    <div
      class="row justify-content-between align-items-center mb-4 mb-md-7"
      data-aos="fade-up"
    >
      <div class="col-md-6 order-1 order-md-0">
        <div class="row">
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801208322.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ProQKWN1fvvWluzehFNDUCsj3YMENcjgf3f1Y1GdZQJBuS750WD%2F5cgwpXvUccsrE2fJR3nWAaHYQU6SHeeS2deOQLmDRwPJJlQeBAxlUBMp0D9yh2Zq2RLrXTcrXa6RcEu4XyWyxtR9U6Uyd%2FqnwmPNEyWH4KBHhXfiSbOIb23FcOvP%2FZs7Na7tU0SEE%2BUhn6dRDXf4PdhKhni0wu6rO1QyXkLYccAnytWl8lWTH3D4GUDFXxG7PyVF1SYIj%2Fcfyhl41y5T0PJvw2pMW2LYbkA3lGzv0A%2BHcaMg6mhTpZ6aEivfjO1cnm22ZS43J%2BNjBYEh%2FzwUM5xzD2QpK28j4w%3D%3D);
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801317591.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=V2RVAPniYFjmu5EeMeGM6DuBJ%2BkdqX4yzqGREFbjF2rPiRn0CKs6%2Baz8BRK1ERd9pZM23tFUIydogkuPTcKi9eipEtkHG6ETOAuTfvaSBI4SvY5hnZKL8DzzojIMPcoUZCmk956UdZ6Kz0wqrauqeTm0So0JIWJNYseTuk9B2nnoLNG95gn3IN3lycKR%2BaoA7kaeKVrcMmOvI41huCpMNbn%2BCR5U1Vu4PEqPEjIncjHKWDJRbodkcg%2FfxiaiOB8dp2dpXJP5tTxbSFoMxlUcFgn2nNHAbFp8JFZg3bgWnDtgP0qS7h4N6lqXiZtPkNJoow%2FokkB9c%2Bj34J%2FS4uRAlA%3D%3D);
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <h3 class="fontSize-md-L fw-bold text-center mb-4">微生物分解的天然肥料</h3>
        <p class="fontSize-md-S mb-md-4">
          蔬果跟人類一樣，生長的過程需要有足夠的營養，才能健康的成長。
          土壤就是蔬果的營養泉源，為了避免蔬果受到汙染、破壞生態環境，
          農民堅持不使用化學肥料，而是使用發酵好的雞糞或是牛糞拌入土讓，
          由土壤中的微生物來分解這些天然的肥料，讓土壤保有蔬果生長期所需的營養。
        </p>
      </div>
    </div>
    <div
      class="row justify-content-between align-items-center mb-4 mb-md-7"
      data-aos="fade-up"
    >
      <div class="col-md-6 order-1">
        <div class="row">
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801458821.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hHVY2NpKexonGjFPesxZjamWvU%2Fpp4mxvJyGUuzEEY0QoBKV1Tm1fHuFH6cRt9fU4tPCZ3wTMwMOrsV6c6CNvx1p2GMEhTUqbS3hhnoMZiNTvmQPBLEMsTUav7xSZUjXEowQ%2FfqKm%2FyB9Wlg5VlXhusdCt%2BF505pEYJMs2cY7XcG%2FEp55rO%2Fbu7CLFuO6LdLjf6GSORV82ZHGc5cTWHYHKsBTfcAS%2FILYsnvjP3%2FoJJGe91%2B2f2GmmANkjN2zk6C%2B2ggkA42QOQ%2F8HSQV40HrzVVcBl41boDcHSEbYrCKiLncU1EoOKwIR0TTtwKYGw5mOCDKmVxsBq%2BMb8HVmh4Ng%3D%3D);
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801395137.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EpkIMZ1rTFuYY%2B7diFtVzsLM9m1696KvKJc%2FO7%2Bl4r1PTcg%2Fj4NsRI5Ke5e2lU7voL6dbPSBHwMwH%2BDy%2FAc%2FiByk%2B57I45xNLCQXCNEY6Tiud11QwLcL26aYUXj0C28PoVrES1q1ChfQHJsEqqgaku5MdrMLxuaMLjFPiTqLNqaeBnJ%2BySliuiEmDDYV8Y4mDyN%2FPgQjh3uKcMbnOVe%2FdA6%2FhYEBVVG%2BOMCrzx6T%2FNJh2MqNu0nUBu4tsx%2Fqk7QiIhOQlcj7t%2FglcLSr%2BtEMv3anob613OgvRZ3Zk5uCXsFvzcZbxAq7suvu2U%2BPihGvbB%2BW6CP820N%2FTjsZUqnAiQ%3D%3D);
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <h3 class="fontSize-md-L fw-bold text-center mb-4">
          大自然的陽光、乾淨的水源
        </h3>
        <p class="fontSize-md-S mb-md-4">
          高山遮蔽物較少，蔬果有充足的日照時間，進行光合作用製造養分。除了陽光，
          水也是生長期的重要輔助之一，以高山的純淨山泉水，讓蔬果補足水份之外，
          也利於生長所需的無機鹽溶解於泥土中，藉由植物根部吸收，再傳送到植物的各部分。
        </p>
      </div>
    </div>
    <div
      class="row justify-content-between align-items-center"
      data-aos="fade-up"
    >
      <div class="col-md-6 order-1 order-md-0">
        <div class="row">
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801520939.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mWJrC9F9eu3gvxqtzOOtBNUfbX6JPFFnoFcj4%2BguRAzfD8Xv1Mix2A6I7pB%2ByOLBEXbXzwvNAq6zLI2ZAhUUjRp2YZ2DxcXIs9U%2BF5Kc12im6%2FScI7YU2YYqpo2S3s6ZvWC29b8MkGNnQkX1yLA%2FrjBs74SfdXlCWf4%2FRgpCXuOEZI%2FHzSmGcDZEdHjVy%2Ba%2B%2F%2BfqxkVekAvCeVVmkQ8f6C2hdy3p9VhooNxDd3x2VDBi%2FIh5ZAMmNTXgGoePvDzn%2FzXUZ77S0iMxvYNhEYjh%2BdZKZtFKfYf0sM9d4X4bGEXVfXcy7HXBNrVGDKPRSTgMrnKSyz2ERnCBjnvQUB9HfA%3D%3D);
              "
            ></div>
          </div>
          <div class="col">
            <div
              class="homeImgs bg-cover bg-center rounded w-100"
              style="
                backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625801484288.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cqiZpj212yPOBIZYRF2GNE6EqdXvM35070l49NFt8CCK5Gn9ry%2F8ZajYGSU0f6nUQzpHq0%2FWTt2rD20%2FuKYDgGX7jvQwy8dOxP%2F%2F7b%2Bui0%2F9ZqQDAJtzGnLwhQIUgBJxg9alYSrZ4lNao%2BFRYHd1Mu8Xg4BRPPG8QC7zkqyXyV4H4lTY92djUQF0%2FvLm44cXPK1ucx1CmyGJ5R7Jr%2FWADhURvkt06QgRsMGE2a5U%2FRIzSHIhtK3G%2BTQQuxpHoLVK%2F07V3RLyNcgHJub%2FevuznFC9FlbL58zvb%2FVgjaB91pborzuvq1%2F0WOJPaNgQmfuPLlXJMmNjXtKdtlZxiTrJ2A%3D%3D);
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <h3 class="fontSize-md-L fw-bold text-center mb-4">拔除雜草、自然除蟲劑</h3>
        <p class="fontSize-md-S mb-md-4">
          雜草能夠協助平衡田間生態，減少害蟲入侵，但過多的雜草會妨礙作物成長不良，
          為了確保作物能夠獲得充足的養分和水分，同時保留雜草的益處，不使用除草劑，
          而是定時以人力手拔或是鋤頭清除作物週圍多餘的雜草。
          當蟲害過於嚴重時，以菸葉、除蟲菊等天然成分配製成自然農藥，噴灑在作物周圍，
          不會造成藥劑殘留同時降低蟲害，讓作物健康生長。
        </p>
      </div>
    </div>
  </div>
  <div
    class="sectionBg d-center bg-bottom bg-lg-fixed mb-4 mb-md-7"
    style="
      backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1626619325929.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=VpKkTAEF0OqsCm%2FPtxXGuybFNxfTBdb4fI3x13Qg9DXamsPac2vfp39I9GbADRyhT6MAdDZq0ANYr0Q3dwgWIzk%2FJu6TzRqeHonKgrabYbFKuSp49N%2FxEff%2FqkvV1MQxRQ1LQ4Ji6gHS868iAYEhzVmYv%2Fv6kHkRLL4q60%2B1myaDkhcgRaWBE83QvglYK%2Br2JGO3JVkgT5L7HEdy3UlxUtHzmy2frAe%2BgvhA9qlH441l%2FYjco%2BxAPCIEKf9IkR01fh2KNr5nctO6%2FzNZ9xWyZvpGvVbDBbgp1y1rScyAa8TRC2NDfm75elXf0uCuComdLA%2Fo5hTHgrf8IfXov5cZmA%3D%3D);
    "
  >
    <span class="fontSizeM  fontSize-md-L fw-bold text-center text-white">
      相信土地以及作物本身的生命力
      <br>
      給予時間自然成長
    </span>
  </div>
  <div class="container mb-4 mb-md-7" data-aos="fade-up">
    <div class="d-md-flex align-items-md-center">
      <h3 class="d-flex align-items-center fontSize-M fontSize-md-XL fw-bold">
        <img
          src="@/assets/images/季節限定.png"
          alt="item"
          class="iconImg me-2"
        />
        季節限定
      </h3>
      <p class="fontSize-md-S text-primary ms-2 mb-0">每年產量不定，錯過要再等一年以上呦!</p>
    </div>
    <ProductSwiper :products="seasonProduct"></ProductSwiper>
    <div class="d-md-flex align-items-md-center">
      <h3 class="d-flex align-items-center fontSize-md-XL fw-bold">
        <img
          src="@/assets/images/限時特惠.png"
          alt="item"
          class="iconImg me-2"
        />
        限時特惠
      </h3>
      <p class="fontSize-md-S text-primary ms-2 mb-0">明天立即恢復原價，不要錯過囉!</p>
    </div>
    <ProductSwiper :products="sellProduct"></ProductSwiper>
  </div>
  <div class="container mb-4 mb-md-7" data-aos="fade-up">
    <div class="row justify-content-between mb-4 mb-md-7">
      <div class="col-md-7 order-1 order-md-0 mb-3 mb-md-0">
        <div class="sectionBg bg-cover bg-center bg-lg-fixed py-7"
            style="
              backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627899237424.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DRzHG3wVg%2B5f84TxVT1wQEkkS4zrwXvrjZE8DhBv9fAm2ySAXRcb2t8Ta%2BwzM1x4015%2F6xDWTFncdk2yZC4M2KaoLcYZOLKOigrwLiVWQBmLwVRsm6HMWYpahBMkJelSVchSso7ZABnLwNthB5YEK133vNKmuUt3V8AnsDxHzWKcMaoSgB84YdeKAfb9Ur%2FsJ51XCgRWQ4ATe6VUoEeus26ZFRFZowGuNj5K4eOhe2B5ymBBIKEhGNx5r62t8Nt76wppTrABHlxmiPUCwOL5Td4S9HbcWRiKRmJTErrpAPrLeym3NqfKrn6XeET5O5o7Cbba8oPzfNIN1rRNoMKnsw%3D%3D);
        ">
        </div>
      </div>
      <div class="col-md-4 order-0 order-md-1 d-flex flex-column justify-content-center">
        <h3 class="fontSize-md-L fw-bold border-bottom pb-2 mb-4">
          多吃蔬果 ─ 青春常駐
        </h3>
        <p class="fontSize-md-S">
          新鮮蔬果含豐富的維生素、礦物質及膳食纖維，
          其中，維生素A、E、C、胡蘿蔔素及微量礦物質，
          具有抗氧化作用，可以延緩衰老。
        </p>
        <p class="fontSize-md-S">
          天天五蔬果、美容養顏、排毒又抗衰老。
        </p>
      </div>
    </div>
    <div class="row justify-content-between mb-4 mb-md-7">
      <div class="col-md-4 d-flex flex-column justify-content-center">
        <h3 class="fontSize-md-L fw-bold border-bottom pb-2 mb-4">
            懶得吃蔬果 ─ 用喝的也行
        </h3>
        <p class="fontSize-md-S">
          用新鮮的蔬菜和水果一起打成蔬果汁，
          蔬菜富含豐富纖維質，能刺激腸胃蠕動，
          身體累積的毒素和宿便，會隨著消化和排泄、排出體外。
        </p>
        <p class="fontSize-md-S">
          早晨用蔬果汁開始，用最自然健康的方式，喚醒腸胃。
        </p>
      </div>
      <div class="col-md-7 mb-3 mb-md-0">
        <div class="sectionBg bg-lg-fixed py-7 bg-bottom "
            style="
              backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627910790875.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=j2YMyQZgeHBY6LHiD1ZIFf5%2FKzmah1ez4uF5XAuOAEG%2FhSkkruWASDhYnsIFY7HczDbe%2FDRJHEBdP1dTZ74Hf4IL5pYqKzxFPtOXZIoJ9EwKmt%2FPL9Ygf6TUKcayzBQGmZv5xjRXv%2FNZNAKY1a%2FzaeFV%2BKtrS%2FemY31KUCRwPVne%2FnWdGRS%2BRm6gAztiRlCRKLRxiK5t%2BYNH8M5EQfbyYCiyWkacAfmizF%2BbGuea0bRApXHLjKdw9cp7ydeJ9YqSdT3J0xBQJRdiy5loInTrfzzDq%2FINS8D5fyt90xcjMdi5TnzxOSm6xPa9r6eY57nW0qrC8IqwfQtByCULwS3cYA%3D%3D);
        ">
        </div>
      </div>
    </div>
    <div class="d-md-flex align-items-md-center">
        <h3 class="d-flex align-items-center fontSize-M fontSize-md-XL fw-bold">
          <img
            src="@/assets/images/新鮮蔬果.png"
            alt="item"
            class="iconImg me-2"
          />
          新鮮蔬果
        </h3>
        <p class="fontSize-md-S text-primary ms-2 mb-0">當天現採現寄，產地保鮮直送</p>
    </div>
    <ProductSwiper :products="fruits"></ProductSwiper>
    <div class="row justify-content-between mb-4 mb-md-7">
      <div class="col-md-7 order-1 order-md-0 mb-3 mb-md-0">
        <div class="sectionBg bg-center bg-lg-fixed py-7"
            style="
              backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627918568186.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DayuJQm0CQ5lMEaQsYBbr%2Bk5FLZSy574%2FS%2FUifkaEi38V86YdrrwRHYEefv9g9p%2F0g4vfBB6c89WTDleP%2BbMGmBurOqwUyI6OCuRhRgk2c%2F%2BdnbonDtn1j%2BXTOAWAgemOhEDCl4Es6u7WGHWpyaRYthOs0JU09r1IGwDGI67oVUICqUYTFJL6Sty4kyEImvbn21SNx2A4u3tcMkDKmpP4DHlBwbef9Q4RXvlbiaSTpXOsU7VZAEJOwpDvz%2FRALvFrdrvjPfnpv7jRTipW25TQ9CqHjHcREaRGcXjoS46nXqhHaJMGctZ9P54WVlRj09ywRDs4NpqNUxJTb%2BhwCed4A%3D%3D);
        ">
        </div>
      </div>
      <div class="col-md-4 order-0 order-md-1 d-flex flex-column justify-content-center">
        <h3 class="fontSize-md-L fw-bold border-bottom pb-2 mb-4">
          喝杯咖啡 ─ 提神又抗癌
        </h3>
        <p class="fontSize-md-S">
          咖啡因可刺激大腦中樞神經，使頭腦清醒、提高注意力，提升工作及學習效率。
          咖啡酸具有抑制細胞分裂、加速癌細胞死亡的作用，以及二萜之咖啡醇和咖啡豆醇，也有抗癌特性，
        </p>
        <p class="fontSize-md-S">
          奧運精彩到睡不著，早晨喝杯咖啡消除疲勞，繼續為運動員們加油。
        </p>
      </div>
    </div>
    <div class="row justify-content-between mb-4 mb-md-7">
      <div class="col-md-4 d-flex flex-column justify-content-center">
        <h3 class="fontSize-md-L fw-bold border-bottom pb-2 mb-4">
            飯後喝杯茶 ─ 去油膩解油脂
        </h3>
        <p class="fontSize-md-S">
          烏龍茶有分解三酸甘油酯和抑制膽固醇的作用，飯後 2 小時飲用可以達到去油解膩的功效。
          另外，茶葉中含有咖啡鹼、肌醇、葉酸、等物質，有助於調節脂肪與增加代謝，
          幫助控制體重。
        </p>
        <p class="fontSize-md-S">
          享受美食後，喝杯好茶，幫助代謝不留下脂肪。
        </p>
      </div>
      <div class="col-md-7 mb-3 mb-md-0">
        <div class="sectionBg bg-bottom bg-lg-fixed py-7"
            style="
              backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627917007156.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TfL%2BP4pPqXv4k6728RgMHjOwok9fLdwv0Hs4OczDqGMBHJhwHjFmd8ADO9FJtx9F%2FduIwoatvW8YUG8hBKgzvMk5MNoEGgvplOiT5lyGJXZxSwR19wZVIv9%2F4GMEGvKBibpE8aVTu2YC5vAkXrj7EO4uUiUgUPUDmUZtwfJZ1xK%2F8rUacBIUN6F83Hr0itpy7PbMr7Fka9lkVCMDS0VfHe4PlXCRluoE9T%2FpVD0Fcox1RVNbJKzr1fpJd4paGXz3FMndFEOpghWgoOKttXDgu8EgPsunIaV%2FLCcGc1wVJq4VhqTFCZ3i3NY6E4Ifod32o9EMN4eBXdvsTEkQxIRZfg%3D%3D);
        ">
        </div>
      </div>
    </div>
    <div class="d-md-flex align-items-md-center">
      <h3 class="d-flex align-items-center fontSize-M fontSize-md-XL fw-bold">
        <img
          src="@/assets/images/沖泡飲品.png"
          alt="item"
          class="iconImg me-2"
        />
        沖泡飲品
      </h3>
      <p class="fontSize-md-S text-primary ms-2 mb-0">質感豐厚、香醇滑順</p>
    </div>
    <ProductSwiper :products="drinks"></ProductSwiper>
  </div>
  <div
    class="bg-center bg-cover"
    style="
      backgroundImage: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1627915918145.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kxqypdK3%2BFEtxsQXodyzfSzSy3N4g%2FF%2F1s2i8%2F6ZJTNgeFaf0ekmNmhWvpFRrqdBCxh0BOnM9kX5SaR0cTX3H04MuHiY5Khk9jCd0xIhcIwMuO2E5uc0MjjCH2mKazkb4K3KaiDJQlr6LB%2FOiJ40s6jDArglO3nq9F0hn8mm63ByrgZOiBOlOCi0EcaC9uGkS%2BZblH7eCDdjVfhRIDSALbyhcwtQOa%2BiYs5kuk5HKL4XrdlGRRj%2BS6Av4Z2bfKeg2HhO%2FTjzYT6pXUN2mZSttLKnJHUr1zbesJM2%2F2WYtWcwoUasu5JWYyGIX3NysG5OkvotZLZJNrF%2BS0LGShztYg%3D%3D);
    "
  >
    <div class="container py-6 py-md-7">
      <div class="row justify-content-center py-md-4">
        <div class="col-md-5">
          <h3 class="fontSize-M fontSize-md-XL text-center mb-3">
            歡迎訂閱電子報 <br>獲得最新優惠訊息
          </h3>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="example@mail.com" id="subscribe"
                  aria-label="subscribe" aria-describedby="subscribeBtn">
            <button class="btn btn-primary text-white px-md-4" type="submit" id="subscribeBtn">
              免費訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="position-relative">
    <GoTop></GoTop>
  </div>
  <Footer :footer-dark="isFooterDark"></Footer>
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
import emitter from '@/methods/Emitter';
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/front/Footer.vue';
import GoTop from '@/components/GoTop.vue';
import ProductSwiper from '@/components/front/ProductSwiper.vue';

export default {
  data() {
    return {
      isNavLight: true,
      isFooterDark: true,
      products: '',
      seasonProduct: '',
      sellProduct: '',
      fruits: '',
      drinks: '',
      favorite: '',
      scroll: '',
      isLoading: false,
    };
  },
  components: {
    Navbar,
    Footer,
    ProductSwiper,
    GoTop,
  },
  methods: {
    getProducts() {
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
            this.seasonProduct = this.products.filter((item) => item.is_season);
            this.sellProduct = this.products.filter((item) => item.is_sell);
            this.fruits = this.products.filter((item) => item.category === '新鮮蔬果');
            this.drinks = this.products.filter((item) => item.category === '沖泡飲品');
          } else {
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
    moveToIntro() {
      const intro = document.querySelector('#intro');
      document.documentElement.scrollTop = intro.offsetTop;
    },
    addToCart(productId) {
      this.isLoading = true;
      const apiUrl = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/cart`;
      const cartData = {
        data: {
          product_id: productId,
          qty: 1,
        },
      };
      this.$http
        .post(apiUrl, cartData)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            emitter.emit('update-cart');
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
    addToFavorite(item) {
      const hasFavorite = localStorage.getItem('favorite');
      if (hasFavorite) {
        this.favorite = JSON.parse(hasFavorite);
        const isSave = this.favorite
          .map((favorite) => favorite.id)
          .indexOf(item.id);
        if (isSave < 0) {
          this.favorite.push(item);
          this.$swal({
            text: '成功收藏',
            icon: 'success',
            confirmButtonColor: '#ffbc1f',
          });
        } else {
          this.$swal({
            text: '已經收藏過囉',
            icon: 'warning',
            confirmButtonColor: '#ffbc1f',
          });
        }
      } else {
        this.favorite.push(item);
        this.$swal({
          text: '成功收藏',
          icon: 'success',
          confirmButtonColor: '#ffbc1f',
        });
      }
      this.favorite = JSON.stringify(this.favorite);
      localStorage.setItem('favorite', this.favorite);
      emitter.emit('update-favorite');
    },
  },
  created() {
    this.getProducts();
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
};
</script>
