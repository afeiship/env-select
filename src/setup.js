import '@jswork/next-js-core2';
import '@jswork/next-require';

// config
nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

nx.global({
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});
