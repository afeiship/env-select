const nx = require('@jswork/next');

module.exports = {
  get: () => {
    const penv = process.env;
    const tenv = {};
    nx.forIn(penv, (key, value) => {
      if (key.includes('__envs__')) {
        tenv[key.replace('__envs__', '')] = JSON.parse(value);
      }
    });
    return tenv;
  },
  set: (env) => {
    var res = {};
    nx.forIn(env, (key, value) => {
      res['__envs__' + key] = JSON.stringify(value);
    });
    return { envs: res };
  },
};
