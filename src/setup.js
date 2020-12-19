import '@jswork/next-require';
import fetch from 'node-fetch';

nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

nx.global({
  http: nx.Fetch.getInstance({ fetch }),
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});
