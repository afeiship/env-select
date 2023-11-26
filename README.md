# scan-modules
> Get module objects use vite or webpack.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/scan-modules
```

## usage
```js
import { scanVite, scanWebpack } from '@jswork/scan-modules';

// when vite
const moduleFiles = import.meta.glob('./shared/stores/**/*.ts', { eager: true });
const stores = scanVite(moduleFiles, { modules: '/stores/' });

// when webpack
const context = require.context('./shared/stores/modules', true, /\.ts$/);
const stores = scanWebpack(context, { modules: '/modules/' });

// result
const reuslt = {
  "user": 'any',
  "sub.child1": 'any',
  "sub.authCtrl": 'any',
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/scan-modules/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/scan-modules
[version-url]: https://npmjs.org/package/@jswork/scan-modules

[license-image]: https://img.shields.io/npm/l/@jswork/scan-modules
[license-url]: https://github.com/afeiship/scan-modules/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/scan-modules
[size-url]: https://github.com/afeiship/scan-modules/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/scan-modules
[download-url]: https://www.npmjs.com/package/@jswork/scan-modules
