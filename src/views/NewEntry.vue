<template>
  <section>
    <h1>Insertar...</h1>
    <article>
      <router-link to="/dashboard/note">
        <div>
          <v-icon
            x-large
            class="danger"
          >
            mdi-text-box-outline
          </v-icon>
          Nota
        </div>
      </router-link>
      <router-link to="/dashboard/bookmark">
        <div>
          <v-icon
            x-large
            class="danger"
          >
            mdi-bookmark
          </v-icon>
          Marcador
        </div>
      </router-link>
      <router-link to="/dashboard/list">
        <div>
          <v-icon
            x-large
            class="danger"
          >
            mdi-format-list-bulleted-square
          </v-icon>
          Lista
        </div>
      </router-link>
    </article>
  </section>
</template>

<script>
export default {
  name: "NewEntry",
  metaInfo: {
    title: "Nueva Entrada",
  },
};
</script>


<style lang="scss" scoped>
h1 {
  font-size: 3em;
}
h1,
a {
  margin-bottom: 1.5em;
}

a {
  display: block;
  width: 100%;
  border-radius: 0.5em;
  font-size: 1.5em;
  text-decoration: none;
  transition: all 0.2s ease-in;
}

a:hover {
  transform: translateY(-5px) scale(1.2);
  .danger {
    filter: grayscale(0);
  }
}

article {
  display: flex;
}

div {
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;

  i {
    font-size: 4em;
  }
}

.danger {
  border: 2px solid transparent;
  color: #ff1d2a;
  filter: grayscale(1);
}

@media screen and (max-width: 600px) {
  h1 {
    margin-bottom: 1em;
  }

  article {
    flex-direction: column;

    div {
      margin: 0.5em;
    }
  }
}
</style>