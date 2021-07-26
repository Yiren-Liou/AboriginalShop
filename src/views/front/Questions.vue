<template>
  <div class="main container mt-4">
    <h2 class="fontSizeM text-center mb-5">常見問題</h2>
    <div class="row justify-content-center mb-6">
      <div class="col-md-8">
        <div class="accordion" id="questions">
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa1">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa1"
                      aria-controls="qa1">
                <span class="bg-primary p-1 me-2">Q1.</span>如何購買商品?
              </button>
            </h4>
            <div id="qa1" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                目前提供三種購買方式:
                <ol class='mt-2'>
                  <li class='mb-3'>
                    <p class="fw-bold mb-1">官網購買:</p>
                    <span>於
                      <a href="/products"
                         class='text-secondary fw-bold text-decoration-underline'>官網</a>
                      挑選需要的商品加入購物車，填寫聯絡資料後送出訂單，系統寄送訂單確認信至您填寫的 email 中，即購買完成。
                    </span>
                  </li>
                  <li class='mb-3'>
                    <p class="fw-bold mb-1">來電購買:</p>
                    <span>歡迎撥打
                      <a href="tel:+886-2-12345678"
                         class="text-secondary fw-bold text-decoration-underline">02-1234-5678</a>
                      ，告訴我們您需要的商品、數量以及相關連絡付款方式，即可完成訂購。
                    </span>
                  </li>
                  <li class=''>
                    <p class="fw-bold mb-1">來信購買:</p>
                    <span>請至
                      <router-link to='/contact'
                      class="text-secondary fw-bold text-decoration-underline">
                          此頁面
                      </router-link>
                      填寫您需要的商品、數量以及相關連絡付款方式，我們會於 2 個工作天與您聯絡，確認您訂單後即完成訂購。
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa2">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa2"
                      aria-controls="qa2">
                <span class="bg-primary p-1 me-2">Q2.</span>有哪些付款方式?
              </button>
            </h4>
            <div id="qa2" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                目前提供兩種付款方式:
                <ol class='mt-2'>
                  <li class='mb-3'>
                    <p class="fw-bold mb-1">信用卡:</p>
                     各家銀行 VISA、Master Card、JCB的信用卡皆可使用呦。
                  </li>
                  <li>
                    <p class="fw-bold mb-1">超商付款:</p>
                    訂單完成後，會將付款條碼寄送至您訂購的信箱，再請您至鄰近超商掃描條碼付款。
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa3">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa3"
                      aria-controls="qa3">
                <span class="bg-primary p-1 me-2">Q3.</span>訂購後多久會出貨?
              </button>
            </h4>
            <div id="qa3" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <ol class='mt-2'>
                  <li class='mb-3'>
                    <p class="fw-bold mb-1">訂單沒有包含預購商品</p>
                    <span>收到訂單後，我們會於 1 - 2 個工作天內安排出貨，出貨後系統會寄送出貨信件至訂購人 email 中，
                          您可透過信件中的出貨編號追蹤配送進度。</span>
                  </li>
                  <li class='mb-3'>
                    <p class="fw-bold mb-1">訂單包含預購商品</p>
                    <span>預購商品等待期都不相同，可於商品頁面查看預定到貨時間，訂單內商品全部到貨後，會立即安排出貨。
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa4">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa4"
                      aria-controls="qa4">
                <span class="bg-primary p-1 me-2">Q4.</span>如何退換貨?
              </button>
            </h4>
            <div id="qa4" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p>
                  商品配送到府後，請立即開箱檢查，若規格不符、瑕疵、宅配運送過程中有損毀等問題，
                  請於24小時內透過以下兩種方式聯繫我們:
                  <ol>
                    <li class='mb-3'>客服專線：
                        <a href="tel:+886-2-12345678"
                         class="text-secondary fw-bold text-decoration-underline">02-1234-5678</a>
                    </li>
                    <li>Email：
                        <a href="mail:example@mail.com"
                      class="text-secondary fw-bold text-decoration-underline">example@mail.com</a>
                    </li>
                  </ol>
                </p>
                <ul class='list-unstyled text-danger'>
                  <li class='mb-2'>※退回的商品必須是全新狀態且包裝完整，包含：商品、包裝、贈品以及相關紙本文件等。</li>
                  <li>※退貨後，此訂單使用的優惠券，會歸還至您的帳戶中。</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa5">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa5"
                      aria-controls="qa5">
                <span class="bg-primary p-1 me-2">Q5.</span>如何退款?
              </button>
            </h4>
            <div id="qa5" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p>
                  有消費款項不符或因退貨而需辦理款項退回者，請透過以下兩種方式聯繫我們，
                  我們將會依據您的付款方式，提供最合適的退款方式將款項退回給您。
                  <ol>
                    <li class='mb-3'>客服專線：
                        <a href="tel:+886-2-12345678"
                         class="text-secondary fw-bold text-decoration-underline">02-1234-5678</a>
                    </li>
                    <li>Email：
                        <a href="mail:example@mail.com"
                      class="text-secondary fw-bold text-decoration-underline">example@mail.com</a>
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa6">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa6"
                      aria-controls="qa6">
                <span class="bg-primary p-1 me-2">Q6.</span>多久會收到退款呢?
              </button>
            </h4>
            <div id="qa6" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p>
                  依據您的付款方式，收到退款時間會不同:
                  <ol>
                    <li class='mb-3'>
                      <p class='fw-bold mb-1'>信用卡：</p>
                      若您原付款方式為信用卡，刷退作業時間仍須以銀行作業時間為主，
                      依信用卡結帳週期而定，一般可於當期或下期信用卡帳單查看退款。
                    </li>
                    <li>
                      <p class='fw-bold mb-1'>超商付款</p>
                      確認申請退費無誤後，將於 3 - 5 個工作天內退款至您指定的退款帳戶。
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa7">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa7"
                      aria-controls="qa7">
                <span class="bg-primary p-1 me-2">Q7.</span>台灣及離島地區有配送範圍限制嗎?
              </button>
            </h4>
            <div id="qa7" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p class='mb-0'>
                  所有商品都有提供台灣本島及離島地區的宅配運送呦。
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa8">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa8"
                      aria-controls="qa8">
                <span class="bg-primary p-1 me-2">Q8.</span>可以修改或取消訂單嗎?
              </button>
            </h4>
            <div id="qa8" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p class='mb-0'>
                  訂單修改及取消問題請直接來電聯絡我們，已出貨的訂單無法取消及修改呦。
                  <br>
                  客服專線: <a href="tel:+886-2-12345678"
                         class="text-secondary fw-bold text-decoration-underline">02-1234-5678</a>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h4 class="accordion-header" id="flush-qa9">
              <button class="accordion-button collapsed" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#qa9"
                      aria-controls="qa9">
                <span class="bg-primary p-1 me-2">Q9.</span>發票可以打統編嗎?
              </button>
            </h4>
            <div id="qa9" class="accordion-collapse collapse px-3"
                  aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">
                <p class='mb-0'>
                  如有統編需求，請您在訂單備註欄中填寫，或致電客服中心。
                  <br>
                  客服專線: <a href="tel:+886-2-12345678"
                         class="text-secondary fw-bold text-decoration-underline">02-1234-5678</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      isLoading: false,
    };
  },
  emits: ['emit-order', 'emit-carts'],
  props: ['pushOrder', 'pushCarts'],
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    const topNav = document.querySelector('#topNav');
    if (topNav.classList.contains('show')) {
      topNav.classList.remove('show');
    }
  },
};
</script>
