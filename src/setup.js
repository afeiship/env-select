import '@feizheng/next-js-core2';
import '@feizheng/next-require';

// config
nx.require({ scope: ['dependencies'] });
nx.global({
  conf: new nx.YamlConfiguration({ path: './config.yml' })
});

