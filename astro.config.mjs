import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import path from 'path';
import {fileURLToPath} from 'url';

import {SITE} from './src/utils/config.ts';
import tasks from './src/utils/tasks';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
    site: SITE.site,
    base: SITE.base,
    trailingSlash: SITE.trailingSlash ? 'always' : 'never',

    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        sitemap(),
        icon({
            include: {
                tabler: ['*'],
                'flat-color-icons': [
                    'template',
                    'gallery',
                    'approval',
                    'document',
                    'advertising',
                    'currency-exchange',
                    'voice-presentation',
                    'business-contact',
                    'database'
                ]
            }
        }),
        tasks()
    ],
    vite: {
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src')
            }
        }
    }
});
