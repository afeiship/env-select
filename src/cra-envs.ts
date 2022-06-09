import nx from '@jswork/next';
import CraAppEnvs from '@jswork/cra-envs';

const ENVS_KEY = '__envs__';

export default class CraEnvs {
  static version = '__VERSION__';
  static get() {
    const penv = CraAppEnvs.get('envs');
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
    return CraAppEnvs.set({ envs: res });
  }
}
