/* eslint-disable */
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
import path from 'path';

const { REACT_APP_ENV, GA_KEY } = process.env;
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  base: '/',
  publicPath: '/',
  hash: true,
  analytics: GA_KEY ? { ga: GA_KEY } : false,
  dva: {
    hmr: true,
    immer: true,
  },
  locale: {
    // default en-US
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
  },
  dynamicImport: {},
  targets: {
    ie: 11,
  },
  theme: {
    ...defaultSettings,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
  },
  ignoreMomentLocale: true,
  sass: {},
  cssLoader: {
    localsConvention: 'camelCase',
    modules: {
      // @ts-ignore
      getLocalIdent: (context: { resourcePath: string }, _: string, localName: string) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }
        // return localName;
      },
    },
  },
  extraPostCSSPlugins: [
    // 移动端打开下边注释代码
    // require('postcss-px-to-viewport')({
    //   viewportWidth: 375, // (Number) The width of the viewport.
    //   viewportHeight: 667, // (Number) The height of the viewport.
    //   unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
    //   props: ['*', '!font-size'],
    //   viewportUnit: 'vw', // (String) Expected units.
    //   selectorBlackList: ['.ignore', '.hairlines', '.ant-radio-inner'], // (Array) The selectors to ignore and leave as px.
    //   minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
    //   mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
    // }),
  ],
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chainWebpack: webpackPlugin,
  alias: {
    fCmp: path.resolve(__dirname, '../src/components/FormilyCmp'),
  },
});
