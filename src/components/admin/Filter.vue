<template>
  <div class="dropdown">
    <button
      class="
        btn btn-outline-secondary
        dropdown-toggle
        d-flex
        justify-content-center
        align-items-center
      "
      type="button"
      id="filterBtn"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="material-icons me-2">filter_alt</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="filterBtn">
      <li>
        <p class="dropdown-item">上架時間</p>
      </li>
      <li>
        <p class="dropdown-item">售價低到高</p>
      </li>
      <li>
        <p class="dropdown-item">售價高到低</p>
      </li>
    </ul>
  </div>
</template>
