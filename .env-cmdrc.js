const { CraEnvs } = require('./dist/index.cjs');

module.exports = CraEnvs.set({
  beta: {
    base_url: 'https://site-predict-platform.beta.saybot.net',
  },
  staging: {
    base_url: 'https://site-predict-platform.staging.saybot.net',
  },
});
