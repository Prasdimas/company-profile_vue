<template>
  <v-app>
    <!-- Navigation Component -->
    <navigation  />

    <!-- Main Content Area -->
    <v-main class="pt-0">
      <router-view />
    </v-main>

    <!-- Scroll-to-Top Button -->
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

    <!-- Footer Component -->
    <foote />
  </v-app>
</template>
<style scoped>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import navigation from "./components/Header.vue";
import foote from "./components/Footer.vue";
import router from "./router"; // Import Vue Router instance

export default {
  name: "App",

  components: {
    navigation,
    foote,
  },

  data() {
    return {
      fab: null,
      color: "",
      flat: null,
    };
  },

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

  router, // Attach the router instance to Vue instance
};
</script>
