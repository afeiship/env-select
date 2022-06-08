# env-select
> Dynamic detect env by url or other window environment.

## installation
```shell
npm i @jswork/env-select
```

## usage
> basic partial files
```js
// 1. .env-cmdrc.js
const { CraEnvs } = require('@jswork/env-select');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://site-predict-platform.beta.saybot.net',
  },
  staging: {
    base_url: 'https://site-predict-platform.staging.saybot.net',
  },
});


//3. Write your app implementation
import { AbstractEnvSelect } from '@jswork/env-select';

class Env extends AbstractEnvSelect {
  static ENV_SELECTORS = {
    beta: 'course-assets.saybot.net',
    staging: 'course-assets.alo7.com',
  };

  /**
   * Auto select env by current url.
   * @returns {string} The target env string.
   */
  static select(): string {
    let env = 'beta';
    nx.forIn(this.ENV_SELECTORS, (key, value) => {
      if (window.location.pathname.includes(value)) {
        env = key;
        return nx.BREAKER;
      }
    });
    return env;
  }
}

// 3. Use you customize env <when beta/staging>
const base_url = Env.get('base_url');
// https://site-predict-platform.beta.saybot.net
```

> 4. update npm package scripts
```json5
{
  // ...
  "start": "env-cmd -e envs react-scripts start",
  // ...
}
```

## resources
- https://js.work/works/61077d5843ff0
