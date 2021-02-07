<template>
  <section>
    <h1>Nota</h1>
    <form @submit.prevent="onSubmit">
      <label for="title">Título</label>
      <form-text
        v-model="title"
        id="title"
        placeholder="Receta de Ensalada"
        :required="true"
      />
      <label for="body">Texto</label>
      <form-textarea
        v-model="body"
        id="body"
        placeholder="Inserta el texto"
        :required="true"
      />
      <label for="image">Imagen</label>
      <dropzone
        @change="onFileChange"
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
import Dropzone from "../components/Dropzone.vue";
import FormTextarea from "../components/FormTextarea.vue";
import FormText from "../components/FormText.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewNote",
  metaInfo: {
    title: "Nueva Nota",
  },
  data: () => ({
    title: "",
    body: "",
    image: "",
  }),
  components: { Dropzone, FormText, FormTextarea },
  computed: mapGetters(["getAllEntries"]),
  methods: {
    ...mapActions(["buildEntry"]),
    onFileChange(file) {
      let reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result;
      };

      reader.readAsDataURL(file);
    },
    onSubmit() {
      let entry = {
        id: this.getAllEntries.length,
        title: this.title,
        body: this.body,
        image: this.image,
        type: "note",
      };
      this.buildEntry(entry);
      this.$router.push(`/dashboard/note/${entry.id}`);
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

@media screen and (max-width: 800px) {
  input[type="submit"] {
    width: 100%;
  }
}
</style>
