<template>
  <main>
    <h1>{{title}}</h1>
    {{id}}
    <figure>
      <img
        src=""
        alt=""
        title=""
      />
    </figure>
    <p>{{body}}</p>
    <button>Edit</button>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    id: "",
    title: "",
    body: "",
    image: "",
  }),
  name: "Note",
  computed: mapGetters(["getEntry"]),
  watch: {
    $route() {
      this.id = this.obtainId();
      console.log(this.id);
    },
  },

  // VISTA NO SE ESTA ACTUALIZANDO AL CAMBIAR DE RUTA
  mounted() {
    let entry = this.getEntry(this.id);
    this.id = entry.id;
    this.title = entry.title;
    this.body = entry.body;
    this.image = entry.image;
  },
  methods: {
    obtainId() {
      let url = window.location.href;
      let id = url.slice(url.lastIndexOf("/") + 1);
      return id;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>