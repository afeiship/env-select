const { CraEnvs, AbstractEnvSelect } = require('../dist/index.cjs');
const nx = require('@jswork/next');

// mock cra_app_ for process.env
nx.forIn(process.env, (key, value) => {
  if (key.startsWith('__envs__')) {
    process.env['REACT_APP_' + key] = value;
  }
});

describe('test cra-envs', () => {
  test('cra-envs: get all', function () {
    const res = CraEnvs.get();
    expect(res).toEqual({
      beta: {
        base_url: 'https://site-predict-platform.beta.saybot.net',
      },
      staging: {
        base_url: 'https://site-predict-platform.staging.saybot.net',
      },
    });
  });
});

describe('test abstract-env-select:', () => {
  var glb = { url: 'null' };

  class MyEnvSelect extends AbstractEnvSelect {
    static select() {
      if (glb.url.includes('beta')) {
        return 'beta';
      }
      return 'staging';
    }
  }

  test('abstract-env-select: get beta from env', function () {
    glb.url = 'xx.beta.url';
    const res = MyEnvSelect.get('base_url');
    expect(res).toBe('https://site-predict-platform.beta.saybot.net');
  });

  test('abstract-env-select: get staging from env', function () {
    glb.url = 'xx.yyy.url';
    const res = MyEnvSelect.get('base_url');
    expect(res).toBe('https://site-predict-platform.staging.saybot.net');
  });
});
