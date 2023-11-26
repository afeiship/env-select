import { replaceModule } from './_utils';

interface Options {
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
}

const defaults: Options = {
  keyFn: (key: string) => replaceModule(key, 'modules/'),
  valueFn: (value: any, context: any) => context(value).default,
};

const webpackScan = (inContext: any, inOptions?: Options) => {
  const options = { ...defaults, ...inOptions };
  return inContext.keys().reduce((acc: any, key: string) => {
    acc[options.keyFn!(key)] = options.valueFn!(inContext(key), inContext);
    return acc;
  }, {});
};

export default webpackScan;
