<template>
  <main>
    <h1>Insertar nueva</h1>
    <navigation-button to="/dashboard/note">Nota</navigation-button>
    <navigation-button to="/dashboard/bookmark">Bookmark</navigation-button>
    <navigation-button to="/dashboard/list">Lista</navigation-button>
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
main {
  width: 50%;
  margin: auto;

  h1,
  a {
    margin-bottom: 1.5em;
  }

  a {
    display: block;
    width: 100%;
    border-radius: 0.5em;
    font-size: 1.5em;
  }
}
</style>