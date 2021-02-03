<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
:root {
  font-size: 16px;
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  max-width: 90%;
  padding: 2em 0;
  margin: auto;
  font-family: "Roboto", "Verdana", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>