<template>
  <section>
    <div>
      <h1>{{title}}</h1>
      <figure>
        <img
          :src="this.image"
          :alt="this.title"
          :title="this.title"
        />
      </figure>
    </div>
    <p>{{body}}</p>
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
  name: "Note",
  mixins: [fetchEntry],
  components: {
    NavigationButton,
  },
  data: () => ({
    id: "",
    title: "",
    body: "",
    image: "",
  }),
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
  margin-top: 4rem;
}

div {
  display: flex;
  align-items: center;

  figure {
    flex: 1 1 30%;

    img {
      width: 100%;
      border-radius: 0.3em;
      box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.38);
    }
  }

  h1 {
    flex: 1 1 40%;
  }
}
</style>