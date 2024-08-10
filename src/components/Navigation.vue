<template>
  <div>
    <v-navigation-drawer
  v-model="drawer"
  app
  temporary
  dark
  width="100vw"
>
  <v-app-bar
    dark
    dense
    flat
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      <v-icon>mdi-close</v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>

  <v-list>
    <v-list-item>
      <v-list-item-avatar>
        <img src="/assets/img/logo.jpg" alt="Logo" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title">Calango</v-list-item-title>
        <v-list-item-subtitle>WEB</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>

  <v-divider />

  <v-list dense>
    <v-list-item
      v-for="([icon, text, link], i) in items"
      :key="i"
      link
      @click="$vuetify.goTo(link)"
    >
      <v-list-item-icon class="justify-center">
        <v-icon>{{ icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="subtitile-1">{{
          text
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <template v-if="isXs">
        <v-toolbar-title>
          <v-img src="@/assets/img/logo.png" max-width="50px" class="mr-10" />
        </v-toolbar-title>
        <v-spacer />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="mr-2"
        />
      </template>
      <template v-else>
  <div class="d-flex justify-center align-center text-md-body-1" style="width: 100%">
    <v-img src="@/assets/img/logo.png" max-width="100px" />
    <div class="ml-4">
      <v-btn text>
        <router-link to="/" class="text-decoration-none ">
          <span class="mr-2 white--text">Home</span>
        </router-link>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <span class="mr-2 white--text">Layanan</span>
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item >
            <router-link to="/point-of-sales" class="text-decoration-none">
              <v-list-item-title class="black--text">Point of Sales (POS)</v-list-item-title>
            </router-link>
          </v-list-item>
          <!-- Add more dropdown items here -->
        </v-list>
      </v-menu>
      <v-btn text>
        <router-link to="/harga" class="text-decoration-none">
          <span class="mr-2 white--text">Harga</span>
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/hubungi" class="text-decoration-none">
          <span class="mr-2 white--text">Hubungi Kami</span>
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="#" class="text-decoration-none">
          <span class="mr-2 white--text">Solusi Bisnis</span>
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/coba-gratis" class="text-decoration-none">
          <span class="mr-2 white--text">Coba Gratis</span>
        </router-link>
      </v-btn>
      <v-btn rounded color="primary" class="rounded-pill">
        <router-link to="/login" class="text-decoration-none white--text">
          <span class="mr-2 white--text">Log in</span>
        </router-link>
      </v-btn>
    </div>
  </div>
</template>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>