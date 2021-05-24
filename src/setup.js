import '@jswork/next-require';
import fetch from 'node-fetch';
import parseArgs from 'yargs-parser';


nx.require({
  pattern: ['@jswork/next-*', '@afeiship/next-*', '!@jswork/next-require'],
  scope: ['dependencies']
});

nx.global({
  args:parseArgs(process.argv.slice(2)),
  http: nx.Fetch.getInstance({ fetch }),
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});
