import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'
import {environment} from "./src/environments/environment";

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-quickstart",
  // add spsModulePath when using de Scully Platform Server,
  puppeteerLaunchOptions: {executablePath: environment.CHROMIUM_PATH},
  outDir: './dist/static',
  routes: {
  }
};
