import { replaceModule } from './_utils';

type ModuleFiles = Record<string, any>;

interface Options {
  modules?: string;
  keyFn?: (key: string) => string;
  valueFn?: (value: any, context: any) => any;
}

const defaults: Options = {
  modules: 'modules/',
  valueFn: (_: any, context: any) => context?.default || context,
  keyFn: (key: string) => key,
};

const scan = (inModuleFiles: ModuleFiles, inOptions?: Options): Record<string, any> => {
  const options = { ...defaults, ...inOptions };
  const toPath = (key: string) => replaceModule(key, options.modules);

  const keys = Object.keys(inModuleFiles);
  return keys.reduce((acc: any, key: string) => {
    const value = inModuleFiles[key];
    const _key = toPath(key);
    acc[options.keyFn!(_key)] = options.valueFn!(key, value);
    return acc;
  }, {});
};

export default scan;
