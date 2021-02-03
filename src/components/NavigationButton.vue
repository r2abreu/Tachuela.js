<template>
  <router-link
    :to="to"
    :class="style"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "NavigationButton",
  props: ["to", "danger"],
  computed: {
    style() {
      return {
        danger: this.danger,
      };
    },
  },
};
</script>


<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #000;
  border: 2px solid black;
  padding: 1em 1.5em;
  width: 181px;
  text-align: center;
  font-size: 1.1em;
  transition: all 0.2s ease-in;
}

a:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.38);
  border-radius: 0.5em;
}

.danger {
  border: 2px solid transparent;
  color: #fff;
  background-color: #ff1d2a;
}
</style>