# env-select
> Dynamic detect env by url or other window environment.

## installation
```shell
npm i @jswork/env-select
```

## usage
> basic partial files
```js
// .env-cmdrc.js
const { CraEnvs } = require('@jswork/env-select');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://site-predict-platform.beta.saybot.net',
  },
  staging: {
    base_url: 'https://site-predict-platform.staging.saybot.net',
  },
});


// Your app implementation
import { AbstractEnvSelect } from '@jswork/env-select';

class Env extends AbstractEnvSelect{
  /**
   * Auto select env by current url.
   * @returns {Environment} The target env string.
   */
  private static select(): Environment {
    let env: Environment = 'beta';
    nx.forIn(this.ENV_SELECTORS, (key: Environment, value) => {
      if (window.location.pathname.includes(value)) {
        env = key;
        return nx.BREAKER;
      }
    });
    return env;
  }
}

// Usage <when beta/staging>
const base_url = Env.get('base_url');
// https://site-predict-platform.beta.saybot.net
```

> npm package scripts
```json5
{
  // ...
  "start": "env-cmd -e envs react-scripts start",
  // ...
}
```
