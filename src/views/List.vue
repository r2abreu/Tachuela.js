<template>
  <section>
    <h1>{{title}}</h1>
    <h2>Tareas</h2>
    <v-list>
      <v-list-item
        v-for="task in tasks"
        :key="task.id"
      >
        {{task.text}}
      </v-list-item>
    </v-list>
    <navigation-button
      to="/"
      danger="danger"
    >Editar</navigation-button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import NavigationButton from "../components/NavigationButton";
import { fetchEntry } from "../mixins";

export default {
  name: "List",
  metaInfo() {
    let data = this;
    return {
      title: data ? this.title : "Cargando...",
    };
  },
  mixins: [fetchEntry],
  components: {
    NavigationButton,
  },
  data: () => ({
    id: "",
    title: "",
    tasks: "",
  }),
  computed: mapGetters(["getEntry"]),
  watch: {
    $route() {
      this.provideData();
    },
  },
  created() {
    this.provideData();
    console.log(this.tasks);
  },
};
</script>

<style lang="scss" scoped>
a {
  margin-top: 1em;
}

section {
  * + * {
    margin-top: 1em;
  }
}
</style>