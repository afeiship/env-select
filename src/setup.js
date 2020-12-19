import '@jswork/next-require';

nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

nx.global({
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});
