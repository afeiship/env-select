import nx from '@jswork/next';

const ENVS_KEY = '__envs__';

export default class CraEnvs {
  static version = '__VERSION__';
  static get() {
    const penv = process.env;
    const tenv = {};
    nx.forIn(penv, (key, value) => {
      if (key.includes(ENVS_KEY)) {
        tenv[key.replace(ENVS_KEY, '')] = JSON.parse(value);
      }
    });
    return tenv;
  }

  static set(env) {
    var res = {};
    nx.forIn(env, (key, value) => {
      res[ENVS_KEY + key] = JSON.stringify(value);
    });
    return { envs: res };
  }
}
