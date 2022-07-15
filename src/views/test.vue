<template>
  <div>
    <div class="perspective overflow">
      <div class="preserve">
        <div class="parallax" style="transform: translateZ(-1.2px)">
          z = -1.2
        </div>
        <div class="parallax" style="transform: translateZ(-1.0px)">
          z = -1.0
        </div>
        <div class="parallax" style="transform: translateZ(-0.8px)">
          z = -0.8
        </div>
        <div class="parallax" style="transform: translateZ(-0.6px)">
          z = -0.6
        </div>
        <div class="parallax" style="transform: translateZ(-0.4px)">
          z = -0.4
        </div>
        <div class="parallax" style="transform: translateZ(-0.2px)">
          z = -0.2
        </div>
        <div class="parallax" style="transform: translateZ(0px)">z = 0</div>
        <div class="spacer"></div>
      </div>
    </div></div
></template>
<script>
export default {};
</script>
<style scoped>
.overflow {
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid black;
  width: 100vw;
  height: 100vh;
}

.perspective {
  perspective: 1px;
  perspective-origin: top left;
}

.preserve {
  transform-style: preserve-3d;
}

.parallax {
  position: absolute;
  top: 200px;
  margin-left: 250px;
  font-size: 24px;
}

.spacer {
  height: 1000px;
}

.sticky {
  position: sticky;
  position: -webkit-sticky;
}
</style>
