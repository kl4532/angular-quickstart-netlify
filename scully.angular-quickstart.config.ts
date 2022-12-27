import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-quickstart",
  // add spsModulePath when using de Scully Platform Server,
  puppeteerLaunchOptions: {executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium' || {}},
  outDir: './dist/static',
  routes: {
  }
};
