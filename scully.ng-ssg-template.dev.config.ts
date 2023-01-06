import { ScullyConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer'
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ng-ssg-template",
  puppeteerLaunchOptions: {executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium' || {}},
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
    '/about/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './src/assets/content/about',
      },
    },
  }
};
