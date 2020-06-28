import '@feizheng/next-js-core2';
import '@feizheng/next-require';

// config
nx.require({
  scope: ['dependencies'],
  pattern: [
    '@feizheng/next-*',
    '@afeiship/next-*',
    '!@feizheng/next-require'
  ]
});
nx.global({
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});

