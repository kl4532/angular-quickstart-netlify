"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
/** this loads the default render plugin, remove when switching to something else. */
require("@scullyio/scully-plugin-puppeteer");
const environment_1 = require("./src/environments/environment");
let CHROMIUM_PATH;
exports.config = {
    projectRoot: "./src",
    projectName: "angular-quickstart",
    // add spsModulePath when using de Scully Platform Server,
    puppeteerLaunchOptions: { executablePath: environment_1.environment.CHROMIUM_PATH },
    outDir: './dist/static',
    routes: {}
};
