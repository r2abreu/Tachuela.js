<template>
  <section>
    <h1>{{title}}</h1>
    <p>Enlace</p>
    <a
      :href="link"
      target="_blank"
    >{{link}}</a>
    <p>{{body}}</p>
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
    console.log(this.id, this.title, this.body, this.link);
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