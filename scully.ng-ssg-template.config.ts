import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "ng-ssg-template",
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
