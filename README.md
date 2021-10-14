# Original 高山部落蔬果 電商網站
> Demo :  [Original 高山部落蔬果](https://yiren-liou.github.io/AboriginalShop/#/)

<img src="https://i.imgur.com/LgaJy70.jpg" width="60%" alt="Original 高山部落蔬果" />

## 網站動機

住在高海拔地區的原住民，下山到市場有一段距離，為了保持蔬果的新鮮度，<br>
當天現採的蔬果必須全部售完，因次只會帶少量的蔬果去販售以賺取微薄的生活費。<br>
希望能幫助高海拔地區的原住民提升生活品質，所以有了建造高山部落蔬果網路平台的想法，<br>
不只能幫到原住民部落也能推廣友善環境的農產品， 同時能讓消費者品嚐到高山蔬果的鮮甜美味。

## 設計概念

#### **色系搭配**：<img src="https://i.imgur.com/eyd1aLO.png" max-width="100%" height="30" alt="色系搭配" />

#### **圖片來源**： [Pexels](https://www.pexels.com/zh-tw/)、 [Unsplash](https://unsplash.com/)、 [flaticon](https://www.flaticon.com/)

## 專案說明
> * 主要使用 `  Vue.js ` 和 `  Vue Cli ` 架設而成
> * 引入 ` Vue Router ` 和 ` Vue Axios ` 等套件
> * 引入 ` Bootstrap 5 ` 樣式和 ` Material icons `
> * 修改 ` Bootstrap 5 ` 變數並搭配 ` Sass ` 切版 Layout 
> * 使用 ` mitt ` 傳遞跨元件資料
> * 使用 ` day.js ` 管理時間格式
> * 開發後台管理系統

### 使用技術
* Vue 3
* Vue Cli
* Vue Component
* vue-router
* vue-axios
* vee-validate
* vue-loading-overlay
* vue-sweetalert2
* mitt
* Bootstrap 5
* aos
* Swiper
* Material icons

### 前台
* 商品展示：首頁、商品列表、商品介紹等
* 收藏清單：新增、刪除收藏商品
* 購物車：刪除、修改商品數量
* 優惠券：首購優惠券、老客戶優惠券
* 結帳：消費者填寫購買資料
* 查詢訂單：查看自己購買的訂單

### 後台
* 管理者登入
* 商品管理
* 優惠券管理
* 訂單管理

## 前台頁面介紹

### **首頁**
<img src="https://i.imgur.com/iTDXs7i.jpg" width="60%" alt="首頁" />

### **商品列表**
* 商品列表可以依據商品分類篩選

<img src="https://i.imgur.com/WEGmPCx.jpg" width="60%" alt="商品列表" />

### **商品介紹**
<img src="https://i.imgur.com/1XNf1MW.jpg" width="60%" alt="商品介紹" />

### **收藏清單**
* 利用 ` Local Storage ` 儲存使用者的收藏紀錄

<img src="https://i.imgur.com/3Y6L5jW.png" width="60%" alt="收藏清單" />

### **購物車**
* 可以調整購買的商品數量
* 推薦消費者其他商品

<img src="https://i.imgur.com/yRXaa7i.png" width="60%" alt="購物車" />

### **優惠券**
* 根據是否首購有不同優惠券

<img src="https://i.imgur.com/5BrdQ5A.png" width="60%" alt="新會員優惠券" />

<img src="https://i.imgur.com/AYwOSNX.png" width="60%" alt="老客戶優惠券" />

### **結帳頁面**
* 彈跳視窗提醒使用者注意事項
* 上方有結帳流程進度提示
* 驗證使用者輸入資訊

<img src="https://i.imgur.com/9TlE4Bl.png" width="60%" alt="結帳頁面" />

<img src="https://i.imgur.com/5FEM6wu.png" width="60%" alt="消費者資料驗證" />

### **查詢訂單**
* 可以搜尋訂單編號
* 查看付款狀態、訂單狀態和訂單詳細內容

<img src="https://i.imgur.com/pr3PRIQ.png" width="60%" alt="查詢訂單" />

<img src="https://i.imgur.com/JFYFqs5.png" width="60%" alt="訂單詳細資料" />

## 後台頁面介紹

### **登入頁面**
* 管理員登入驗證
* 登入成功後會跳轉後台頁面
* 登入失敗無法進入後台

<img src="https://i.imgur.com/p4lqveS.png" width="60%" alt="管理員登入頁面" />
<img src="https://i.imgur.com/H18aHS7.png" width="60%" alt="管理員登入驗證" />

### **商品管理**
* 可以搜尋商品名稱
* 商品列表可依照上架時間、原價、售價排序
* 查看單一商品的詳細資訊
* 編輯單一商品
  * 可上傳圖片檔案

<img src="https://i.imgur.com/HzPKWzx.png" width="60%" alt="商品管理" />
<img src="https://i.imgur.com/F39ohQ4.png" width="60%" alt="查看商品" />
<img src="https://i.imgur.com/nDUweIe.png" width="60%" alt="編輯商品" />
<img src="https://i.imgur.com/O9YzDIY.jpg" width="60%" alt="上傳商品圖片" />

### **訂單管理**
* 可以搜尋訂單編號
* 訂單列表可依照訂購時間、總金額排序
* 訂單狀態可修改為處理中、已出貨、已完成

<img src="https://i.imgur.com/pKnF729.png" width="60%" alt="訂單管理" />
<img src="https://i.imgur.com/skEyZQe.png" width="60%" alt="編輯訂單" />

### **優惠券管理**
* 可以搜尋優惠券名稱
* 優惠券列表可依照啟用時間、截止時間、折扣趴數排序
* 自訂優惠券使用時間、啟用狀態

<img src="https://i.imgur.com/N0le0od.png" width="60%" alt="優惠券管理" />
<img src="https://i.imgur.com/QzGXQTH.png" width="60%" alt="編輯優惠券使用期限" />
<img src="https://i.imgur.com/64jy8NA.png" width="60%" alt="編輯優惠券啟用狀態" />

---

### 其餘細節部分，歡迎至 **[Original 高山部落蔬果](https://yiren-liou.github.io/AboriginalShop/#/)** 觀看
