import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createVuetify } from 'vuetify';

export default defineConfig({
  plugins: [vue(), createVuetify()],
});
