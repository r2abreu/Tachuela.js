<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item
        to="/"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="title">
            Tachuela.js
          </v-list-item-title>
          <v-list-item-subtitle>
            v1.0
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-text-field
          filled
          placeholder="Buscar"
          v-model="query"
          dense
          append-icon="mdi-search"
          color="#ff1d2a"
        >
        </v-text-field>
        <div v-if="filtered.length">
          <v-list-item
            v-for="item in filtered"
            :key="item.id"
            :to="`/dashboard/${item.type}/${item.id}`"
            link
          >
            <v-list-item-icon class="mr-3">
              <v-icon>{{ icon(item) }}</v-icon>
            </v-list-item-icon>
            {{item.title}}

            <v-list-item-icon
              class="ml-auto"
              @click.prevent="onDelete(item)"
            >
              <v-icon>mdi-delete</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </div>
        <p v-else>No hay resultados.</p>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      color="#ff1d2a"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Tablero</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >

        {{filtered}}
        <router-view name="new"></router-view>
        <router-view name="note"></router-view>
        <router-view name="bookmark"></router-view>
        <router-view name="list"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
let slugify = require("slugify");

export default {
  data: () => ({
    drawer: null,
    entries: [],
    query: "",
  }),
  computed: {
    reversed() {
      return [...this.entries].reverse();
    },
    filtered() {
      return this.reversed.filter((entry) => {
        let query = this.query.toLowerCase();
        let title = entry.title.toLowerCase();
        return title.indexOf(query) != -1 ? entry : null;
      });
    },
    ...mapGetters(["getAllEntries"]),
    icon() {
      return (item) => {
        switch (item.type) {
          case "note":
            return "mdi-text-box-outline";
          case "list":
            return "mdi-format-list-bulleted-square";
          case "bookmark":
            return "mdi-bookmark";
        }
      };
    },
  },
  methods: {
    ...mapActions(["removeEntry"]),
    makeSlug(str) {
      return slugify(str).toLowerCase();
    },
    onDelete(item) {
      this.removeEntry(item);
    },
  },
  updated() {
    this.entries = this.getAllEntries;
    console.log(this.filtered);
  },
  created() {
    this.entries = this.getAllEntries;
  },
};
</script>

<style lang="scss" scoped>
.v-text-field {
  width: 90%;
  margin: 0.3em auto 0;
}

p {
  text-align: center;
}
</style>
