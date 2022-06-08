# env-select
> Dynamic detect env by url or other window environment.

## installation
```shell
npm i @jswork/env-select
```

## usage
```js
// .env-cmdrc.js
const { envs } = require('./src/envs');

module.exports = envs.set({
  beta: {
    base_url: 'https://site-predict-platform.beta.saybot.net',
  },
  staging: {
    base_url: 'https://site-predict-platform.staging.saybot.net',
  },
});

```
