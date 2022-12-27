import { ScullyConfig } from '@scullyio/scully';

import '@scullyio/scully-plugin-puppeteer'
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-quickstart",
  puppeteerLaunchOptions: {executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium' || {}},
  outDir: './dist/static',
  routes: {
  }
};
