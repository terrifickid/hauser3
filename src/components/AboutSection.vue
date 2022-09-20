<template>
  <div class="pad">
    <div class="container" style="position: relative;">
      <div
        class="d-none d-md-block"
        v-ani="{ class: 'grow-in-top', delay: 0 }"
        style="position: absolute; left: 50%; min-height:100%; border-left: 1px solid black;"
      ></div>
      <div class="row">
        <div
          v-ani="{ class: 'slide-in-left', delay: 0 }"
          class="col-12 col-md-5"
        >
          <h1 v-html="title"></h1>
          <div class="mb-4 d-md-none"></div>
        </div>
        <div class="col-2"></div>
        <div
          v-ani="{ class: 'slide-in-right', delay: 0 }"
          class="col-12 col-md-5"
          v-html="description"
        ></div>
      </div>
    </div>
  </div>
  <!-- end hero-ad -->
</template>
<script>
export default {
  props: ["title", "description"]
};
</script>
