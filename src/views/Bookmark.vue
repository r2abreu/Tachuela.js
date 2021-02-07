<template>
  <section>
    <h1>{{title}}</h1>
    <h2>Descripción:</h2>
    <p>{{body}}</p>
    <h2>Enlace:</h2>
    <a
      :href="link"
      target="_blank"
    >{{link}}</a>
    <navigation-button
      to="/"
      danger="danger"
    >
      Editar
    </navigation-button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationButton from "../components/NavigationButton";
import { fetchEntry } from "../mixins";

export default {
  name: "Bookmark",
  metaInfo() {
    let data = this;
    return {
      title: data ? this.title : "Cargando...",
    };
  },
  mixins: [fetchEntry],
  data: () => ({
    id: "",
    title: "",
    body: "",
    link: "",
  }),
  components: {
    NavigationButton,
  },
  computed: mapGetters(["getEntry"]),
  watch: {
    $route() {
      this.provideData();
    },
  },
  created() {
    this.provideData();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

* + * {
  margin-bottom: 1em;
}

p {
  line-height: 1.5;
  text-align: justify;
}

a {
  display: block;
  margin-left: auto;
}
</style>