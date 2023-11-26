import { replaceModule } from './_utils';

interface Options {
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
}

const defaults: Options = {
  keyFn: (key: string) => replaceModule(key, 'modules/'),
  valueFn: (key: any, context: any) => context(key).default,
};

const scanWebpack = (inContext: any, inOptions?: Options): Record<string, any> => {
  const options = { ...defaults, ...inOptions };
  return inContext.keys().reduce((acc: any, key: string) => {
    acc[options.keyFn!(key)] = options.valueFn!(key, inContext);
    return acc;
  }, {});
};

export default scanWebpack;
