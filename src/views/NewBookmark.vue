<template>
  <section>
    <h1>Nuevo bookmark</h1>
    <form @submit.prevent="onSubmit">
      <label for="title">Título</label>
      <form-text
        v-model="title"
        id="title"
        placeholder="Eventos de JavaScript"
        :required="true"
      />
      <label for="link">Enlace</label>
      <form-text
        v-model="link"
        id="link"
        placeholder="https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Eventos"
        :required="true"
      />
      <label for="body">Descripción</label>
      <form-textarea
        v-model="body"
        id="body"
        palceholder="Inserta una descripcion"
        :required="true"
      />
      <input
        type="submit"
        value="Guardar"
      />
    </form>
  </section>

</template>

<script>
import FormText from "../components/FormText";
import FormTextarea from "../components/FormTextarea";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NewBookmark",
  data: () => ({
    title: "",
    body: "",
    link: "",
  }),
  components: { FormText, FormTextarea },
  computed: mapGetters(["getAllEntries"]),
  methods: {
    ...mapActions(["buildEntry"]),
    onSubmit() {
      let entry = {
        id: this.getAllEntries.length,
        title: this.title,
        body: this.body,
        link: this.link,
        type: "bookmark",
      };
      this.buildEntry(entry);
      this.$router.push(`/dashboard/bookmark/${entry.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  * {
    margin-bottom: 2em;
  }
}

input[type="submit"] {
  text-decoration: none;
  border: 2px solid transparent;
  color: #fff;
  background-color: #ff1d2a;
  padding: 0.7em 1.5em;
  width: 181px;
  margin-left: auto;
  text-align: center;
  font-size: 1.1em;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.38);
    border-radius: 0.5em;
  }
}
</style>