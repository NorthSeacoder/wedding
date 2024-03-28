import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    vite: {
        resolve: {
          alias: {
            '~': path.resolve(__dirname, './src'),
          },
        },
      },
});
