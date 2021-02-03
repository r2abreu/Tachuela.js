<template>
  <main>
    <h1>Insertar nueva</h1>
    <navigation-button to="/note">Nota</navigation-button>
    <navigation-button to="/bookmark">Bookmark</navigation-button>
    <navigation-button to="/list">Lista</navigation-button>
  </main>
</template>

<script>
import NavigationButton from "../components/NavigationButton";

export default {
  name: "NewEntry",
  components: {
    NavigationButton,
  },
};
</script>


<style lang="scss" scoped>
</style>