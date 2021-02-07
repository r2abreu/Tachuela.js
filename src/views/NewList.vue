<template>
  <section>
    <h1>Nueva Lista</h1>
    <form @submit.prevent="onSubmit">
      <label for="title">Título</label>
      <form-text
        v-model="title"
        id="title"
        :required="true"
      />
      <label for="todo">Agregar Tarea</label>
      <v-text-field
        v-model="todo"
        id="todo"
        placeholder="Tarea"
        autocomplete="off"
      >
        <v-icon
          @click="onClick"
          slot="append"
          color="red"
        >mdi-plus</v-icon>
      </v-text-field>
      <v-list flat>
        <v-list-item
          v-for="(task, i) in tasks"
          :key="i"
        >
          <v-checkbox @click="onTaskComplete(task)" />
          <v-list-item-content :class="{strikeout: task.completed }">
            <v-list-item-title v-text="task.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <input
        type="submit"
        value="Guardar"
      />

    </form>

  </section>
</template>

<script>
import FormText from "../components/FormText";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NewList",
  metaInfo: {
    title: "Nueva Lista",
  },
  data: () => ({
    title: "",
    todo: "",
    tasks: [],
  }),
  components: { FormText },
  computed: mapGetters(["getAllEntries"]),
  methods: {
    ...mapActions(["buildEntry"]),
    onSubmit() {
      let entry = {
        id: this.getAllEntries.length,
        title: this.title,
        tasks: this.tasks,
        type: "list",
      };
      this.buildEntry(entry);
      this.$router.push(`/dashboard/list/${entry.id}`);
    },
    onClick() {
      let task = {
        text: this.todo,
        completed: false,
      };
      this.todo = "";
      this.tasks.push(task);
    },
    onTaskComplete(task) {
      task.completed = !task.completed;
    },
  },
};
</script>


<style lang="scss" scoped>
form {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
}

.strikeout {
  text-decoration: line-through;
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

section {
  label {
    margin-top: 3em;
  }
}

@media screen and (max-width: 800px) {
  input[type="submit"] {
    width: 100%;
  }
}
</style>