import { replaceModule } from './_utils';
import path2mod from '@jswork/path2modname';

type ModuleFiles = Record<string, any>;

interface Options {
  modules?: string;
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
  transform?: (key: string, value, context: any) => any;
}

const defaults: Options = {
  modules: 'modules/',
  valueFn: (_: any, context: any) => context?.default || context,
  keyFn: (key: string) => path2mod(key),
  transform: (key, value, context) => {
    context[key] = value;
    return context;
  },
};

const scan = (inModuleFiles: ModuleFiles, inOptions?: Options): Record<string, any> => {
  const options = { ...defaults, ...inOptions };
  const toPath = (key: string) => replaceModule(key, options.modules);

  const keys = Object.keys(inModuleFiles);
  return keys.reduce((acc: any, key: string) => {
    const value = inModuleFiles[key];
    const _key = options.keyFn!(toPath(key));
    const _value = options.valueFn!(key, value);
    return options.transform?.(_key, _value, acc);
  }, {});
};

export default scan;
