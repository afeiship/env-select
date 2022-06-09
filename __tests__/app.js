const { CraEnvs } = require('../dist/index.cjs');

nx.forIn(process.env, (key, value) => {
  if (key.startsWith('__envs__')) {
    process.env['REACT_APP_' + key] = value;
  }
});


// console.log(CraEnvs.get());
