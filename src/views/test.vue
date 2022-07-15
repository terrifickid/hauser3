<template>
  <div>
    <header>
      <div
        class="lax d-flex align-items-center"
        :style="{ top: distance + 'px' }"
        style="
      border: 1px solid red;
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: url('https://storageapi.fleek.co/terrifickid-team-bucket/GST%20JOS%20468-22.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    "
      >
        {{ distance }}
      </div>
    </header>

    <section>
      <h3>Cool like you</h3>
    </section>
  </div></template
>
<script>
export default {
  data() {
    return {
      distance: 0
    };
  },
  methods: {
    handleScroll() {
      this.distance = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Courgette:400,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #0056a7, #165fa3, #477aaa);
  font-family: "Courgette", cursive;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  color: #eee;
  z-index: -1;
  text-align: center;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100vh;
  font-size: 5rem;
  background: #fcdb6d;
  color: #0056a7;
}
.animate-me {
  animation: bounceIn 3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>
