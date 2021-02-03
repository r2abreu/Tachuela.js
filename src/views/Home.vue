<template>
  <main>
    <h1>Tachuela.js</h1>
    <p>Organiza tus ideas, bookmarks, listas y más.</p>
    <div>
      <navigation-button
        to="/dashboard"
        danger="danger"
      >
        Empezar
      </navigation-button>
      <navigation-button to="/about">
        Acerca
      </navigation-button>
    </div>
  </main>
</template>

<script>
import NavigationButton from "../components/NavigationButton.vue";

export default {
  name: "Home",
  components: {
    NavigationButton,
  },
};
</script>

<style scoped>
h1 {
  font-size: 4em;
  color: #444444;
  font-weight: 300;
  margin-bottom: 2em;
}

p {
  font-size: 5em;
  width: 70%;
  margin-bottom: 1em;
}

div {
  display: flex;
  justify-content: space-between;
  width: 30%;
}
</style>