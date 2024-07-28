import { replaceModule } from './_utils';
import objectPath from 'object-path';

interface Options {
  modules?: string;
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
}

const defaults: Options = {
  modules: 'modules/',
  valueFn: (key: any, context: any) => context(key)?.default || context(key),
};

const scan = (inContext: any, inOptions?: Options): Record<string, any> => {
  const options = { ...defaults, ...inOptions };
  options.keyFn = options.keyFn || function(key: string) {
    return replaceModule(key, options.modules);
  };
  return inContext.keys().reduce((acc: any, key: string) => {
    objectPath.set(acc, options.keyFn!(key), options.valueFn!(key, inContext));
    return acc;
  }, {});
};

export default scan;
