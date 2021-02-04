<template>
  <main>
    <h1>Nota</h1>
    <form @submit.prevent="onSubmit">
      <label for="title">Título</label>
      <form-text
        v-model="title"
        id="title"
        placeholder="Receta de Ensalada"
        value="value"
        :required="true"
      />
      <dropzone />
      <label for="body">Texto</label>
      <form-textarea />
      <input
        type="submit"
        value="Guardar"
      />
    </form>
  </main>
</template>

<script>
import Dropzone from "../components/Dropzone.vue";
import FormTextarea from "../components/FormTextarea.vue";
import FormText from "../components/FormText.vue";
export default {
  data() {
    return {
      title: "",
    };
  },
  components: { Dropzone, FormText, FormTextarea },
  name: "List",
  methods: {
    onSubmit() {
      console.log(this.title);
    },
  },
};
</script>


<style lang="scss" scoped>
main {
  width: 50%;
  margin: auto;
}
form {
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  * + * {
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
