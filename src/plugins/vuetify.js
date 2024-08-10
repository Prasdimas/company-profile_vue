import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Memuat gaya Vuetify

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        primary: "#47f70c",
        secondary: "#171b34",
        accent: "#3D87E4" // Perbaiki format warna
      }
    },
    icons: {
      iconfont: 'mdi', // Pastikan Anda telah menginstal Material Design Icons
    },
  },
});

export default vuetify;
